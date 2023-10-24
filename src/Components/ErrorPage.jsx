import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-2xl mt-10 text-center ">Oops!</h1>
      <p className="text-2xl mt-2 text-center ">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );

}