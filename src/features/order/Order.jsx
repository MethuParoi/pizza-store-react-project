// Test ID: IIDSAT
import OrderItem from "./OrderItem";
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="text-xl font-semibold pb-2">Order #{id} Status</h2>

        <div className="text-sm font-semibold space-x-2">
          {priority && (
            <span className="rounded-2xl bg-red-500 px-3 py-1 uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-2xl bg-green-500 px-3 py-1 uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 bg-stone-200 px-6 py-5 rounded-xl">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500 font-medium">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div>
        <ul className="divide-y-2 divide-stone-200 border-b-2 border-t-2">
          {cart.map((item) => (
            <OrderItem item={item} key={item.id} />
          ))}
        </ul>
      </div>

      <div className="space-y-2 bg-stone-200 px-6 py-5 rounded-xl">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params: { orderId } }) {
  const order = await getOrder(orderId);
  return order;
}

export default Order;
