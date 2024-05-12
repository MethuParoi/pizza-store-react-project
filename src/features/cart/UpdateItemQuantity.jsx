import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="space-x-2">
      <Button
        type="rounded"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type="rounded"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
