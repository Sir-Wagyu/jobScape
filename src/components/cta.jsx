import "../app.css";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <div className="w-screen mt-24 bg-[#15ABFF] h-80 md:h-96 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-montserrat text-2xl md:text-4xl xl:text-5xl font-bold text-center w-full text-white">Ready to Make an Impact?</h1>
        <p className="font-opensans text-sm md:text-base xl:text-lg text-center w-10/12 lg:w-3/4 xl:w-1/2 text-white mt-4 mb-5">
          Join our platform today to post your job openings and connect with a global pool of talented professionals. It&apos;s quick, easy, and the best way to find the right candidates for your team!
        </p>
      </div>
      <Link to={"/register"} className="bg-[#0072b3] text-white font-semibold lg:text-xl rounded-full px-12 py-2 md:px-16 md:py-3 xl:px-20 xl:py-4 hover:bg-[#15ABFF] border-2 border-[#0072b3] hover:border-white mt-3">
        <p className="text-white">Get Started</p>
      </Link>
    </div>
  );
}

export default Cta;
