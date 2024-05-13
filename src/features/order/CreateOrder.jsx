import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
  } = useSelector((state) => state.user);
  const addressLoading = addressStatus === "loading";
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const dispatch = useDispatch();

  return (
    <div className="m-3 ">
      <h2 className="text-xl font-semibold pb-4">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="pb-3">
          <label>First Name</label>
          <input
            className="input"
            defaultValue={username}
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="pb-3">
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p className=" text-red-600">{formErrors.phone}</p>
          )}
        </div>

        <label>Address</label>
        <div className="flex">
          <div className="grow">
            <input
              type="text"
              disabled={addressLoading}
              defaultValue={address}
              name="address"
              required
              className="input"
            />
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute top-[296px] left-[71.5rem] z-10">
              <Button
                disabled={addressLoading}
                type="position"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                current location
              </Button>
            </span>
          )}
        </div>
        {addressStatus === "error" && (
          <p className=" text-red-600">
            can&apos;t access live location, please give permission
          </p>
        )}

        <div>
          <input
            className="h-5 w-5 my-5 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="pl-3 text-lg" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting || addressLoading} type="primary">
            {isSubmitting
              ? "placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const newOrder = await createOrder(order);

  // Validate the phone number
  const errors = {};
  if (!isValidPhone(data.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  store.dispatch(clearCart());

  //If everything is fine, create the order and redirect to the order page

  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
