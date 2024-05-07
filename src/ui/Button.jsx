import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-400 px-5 py-3 mt-2 rounded-2xl text-white font-semibold hover:bg-yellow-500 transition-colors duration-300";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
