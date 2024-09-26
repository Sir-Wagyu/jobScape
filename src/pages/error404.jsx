import "../app.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row justify-center item-center font-opensans lg:px-12">
        <div className="w-3/4 md:w-1/2 lg:w-1/2 mx-auto lg:order-2">
          <img src="error404.svg" alt="" className="w-full h-full  object-cover" />
        </div>
        <div className="w-11/12 lg:w-1/2 mx-auto flex flex-col items-center lg:items-start lg:justify-center">
          <h1 className="text-3xl lg:text-5xl  font-bold text-center lg:text-left">
            Sorry, <br className="md:hidden xl:block" /> I have bad news for you
          </h1>
          <p className="text-center text-sm  lg:text-lg mt-2 lg:mt-4 lg:text-left">The page you are looking for might be removed or is temporarily unavailable.</p>
          <Link to={"/"} className="bg-[#15ABFF] hover:bg-[#0072b3] text-white lg:text-lg mt-4 lg:mt-6 px-4 lg:px-6 py-2 lg:py-4 rounded-xl">
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404;
