import { Link } from 'react-router-dom'
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-500 py-3 px-4 sm:px-6">
      <div className="flex justify-around">
        <div>
          <Link
            to="/"
            className="uppercase tracking-widest text-lg font-semibold"
          >
            Fast React Pizza Co.
          </Link>
        </div>

        <div>
          <SearchOrder />
        </div>

        <div>
          <Username />
        </div>
      </div>
    </header>
  );
};

export default Header