import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

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

      <Button type="small">Delete</Button>
    </li>
  );
}

export default CartItem;
