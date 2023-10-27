import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block tacking-wide text-sm rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus-visible:bg-yellow-300 focus-visible:ring focus-visible:ring-yellow-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block tacking-wide text-sm rounded-full border-2 border-stone-300 font-semibold uppercase text-stone-500 transition-colors duration-200 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus-visible:bg-stone-300 focus-visible:text-stone-800 focus-visible:ring focus-visible:ring-stone-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;