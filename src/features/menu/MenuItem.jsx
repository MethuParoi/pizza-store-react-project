import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-5 py-2 px-2">
      <img
        className={`h-24 rounded-md ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />

      <div className="flex grow flex-col ">
        <p className="text-lg font-medium">{name}</p>
        <p className="italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto sm:flex justify-between items-center">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-stone-500 font-semibold">Sold out</p>
          )}

          <Button to="" type="small">
            ADD TO CART
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

