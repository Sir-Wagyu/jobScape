import "../app.css";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <>
      <div className="w-screen relative bg-cover h-96 md:h-[30rem] lg:h-[35rem]">
        <div className="relative w-full h-full">
          <img src="jumbotron.jpg" alt="" className="w-full h-full object-cover brightness-75" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#15ABFF]/35 h-full w-full " />
        </div>

        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-screen h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-2xl md:text-4xl xl:text-5xl w-11/12 font-bold text-center mb-4 lg:mb-5 font-montserrat">Discover Global Career Opportunities</h1>
            <p className="text-sm md:text-base xl:text-lg text-center w-4/5 lg:w-2/4 font-opensans">
              Discover exciting job opportunities from around the world. Whether you&apos;re looking for a new challenge or starting your career journey, explore our extensive listings tailored just for you!
            </p>
            <Link to="/job-vacancy">
              <div className="bg-[#15ABFF] text-white font-semibold lg:text-xl rounded-full px-12 py-2 md:px-16 md:py-3 xl:px-20 xl:py-4 hover:bg-[#0072b3] mt-5 lg:mt-9">Explore Now</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
