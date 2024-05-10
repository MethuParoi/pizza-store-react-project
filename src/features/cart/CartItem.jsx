import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <p className="pb-2">
          {quantity}&times; {name}
        </p>

        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>

      <DeleteItem pizzaId={pizzaId} />
    </li>
  );
}

export default CartItem;
