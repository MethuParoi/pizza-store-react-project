import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 rounded-2xl text-white font-semibold hover:bg-yellow-500 transition-colors duration-300";

  const styles = {
    primary: `${base} px-3 sm:px-5 py-2 sm:py-3 mt-2`,
    secondary:
      "border-2 border-stone-300 px-3 sm:px-5 py-2 rounded-2xl text-stone-700 font-semibold hover:bg-stone-300 transition-colors duration-300",
    small: `${base} px-2 py-2`,
    rounded: `bg-yellow-400 rounded-2xl text-white font-semibold hover:bg-yellow-500 transition-colors duration-300 rounded-full px-3 py-1 font-bold text-xl`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
