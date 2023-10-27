import { Link, useNavigate } from "react-router-dom";

function LnkButton({ children, to }) {
  const navigate = useNavigate();

  const className =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:underline  focus-visible:ring-offset-2 rounded";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LnkButton;
