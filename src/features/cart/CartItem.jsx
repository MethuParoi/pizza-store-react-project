import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import EmptyCart from "./EmptyCart";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getTotalCartQunatity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const totalQantity = useSelector(getTotalCartQunatity);

  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <p className="pb-2">
          {quantity}&times; {name}
        </p>

        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>

      <div className="flex items-center gap-x-7">
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
