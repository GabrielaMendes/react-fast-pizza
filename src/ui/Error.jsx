import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="px-4 py-6">
      <h1 className="text-xl font-semibold mb-2">Something went wrong 😢</h1>
      <p className="mb-7">{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
