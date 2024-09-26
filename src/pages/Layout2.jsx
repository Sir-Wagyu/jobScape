import "../app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { faHome, faRectangleList, faSquarePlus, faUser, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar2(props) {
  const name = JSON.parse(localStorage.getItem("name"));
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    localStorage.clear();
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <div className="max-w-screen h-screen font-opensans relative">
        {/* horizontal navbar */}
        <div className=" w-full flex justify-between p-5 min-h-[12%] items-center shadow-lg z-10 relative">
          <Link to={"/"} className="hidden lg:block font-montserrat font-bold text-2xl ">
            JobScape
          </Link>
          <button className="text-xl font-semibold lg:hidden" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="font-montserrat font-semibold text-xl">Hai, {name}</h1>
        </div>
        <div className="w-full min-h-[88%] flex z-10">
          {/* vertical navbar */}
          <div className={`fixed h-full bg-[#15ABFF] lg:hidden text-white lg:px-3 shadow-lg flex flex-col ${!isNavbarOpen ? "w-max" : "w-[50%] md:w-[35%]"}`}>
            <div className="flex flex-col lg:hidden lg:items-center mt-5 text-xl gap-7 px-4">
              <Link to={"/dashboard"} className="flex items-center gap-3">
                <FontAwesomeIcon icon={faHome} />
                {!isNavbarOpen ? null : <p className="text-sm md:text-base font-medium">Dashboard</p>}
              </Link>
              <Link to="/dashboard/list-job" className="flex items-center gap-3">
                <FontAwesomeIcon icon={faRectangleList} />
                {!isNavbarOpen ? null : <p className="text-sm md:text-base  font-medium">List Job</p>}
              </Link>
              <Link to="/dashboard/list-job/create-update" className="flex items-center gap-3">
                <FontAwesomeIcon icon={faSquarePlus} />
                {!isNavbarOpen ? null : <p className="text-sm md:text-base  font-medium">Create Job</p>}
              </Link>
              <Link to="/dashboard/profile" className="flex  items-center gap-3">
                <FontAwesomeIcon icon={faUser} />
                {!isNavbarOpen ? null : <p className="text-sm md:text-base font-medium">Profile</p>}
              </Link>
              <Link to="/dashboard/profile/reset-password" className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGear} />
                {!isNavbarOpen ? null : <p className="text-sm md:text-base font-medium">Reset Password</p>}
              </Link>
              <Link onClick={handleLogout} className="flex items-center gap-3">
                <FontAwesomeIcon icon={faRightFromBracket} />
                {!isNavbarOpen ? null : <p className="text-sm md:text-base font-medium">Logout</p>}
              </Link>
            </div>
          </div>

          <div className="bg-[#15ABFF] w-[25%] hidden lg:block text-white">
            <div className="hidden lg:flex flex-col gap-7 px-5 mt-9 w-full font-semibold lg:text-xl ">
              <Link to={"/dashboard"} className="group w-max flex items-center gap-3  ">
                <FontAwesomeIcon icon={faHome} />
                <p className="text-base lg:text-xl font-medium">
                  Dashboard
                  <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </p>
              </Link>
              <Link to="/dashboard/list-job" className="group w-max flex items-center gap-3  ">
                <FontAwesomeIcon icon={faRectangleList} />
                <p className="text-base lg:text-xl font-medium">
                  List Job
                  <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </p>
              </Link>
              <Link to="/dashboard/list-job/create-update" className="group w-max flex items-center gap-3  ">
                <FontAwesomeIcon icon={faSquarePlus} />
                <p className="text-base lg:text-xl font-medium">
                  Create Job
                  <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </p>
              </Link>
              <Link to="/dashboard/profile" className="group w-max flex items-center gap-3">
                <FontAwesomeIcon icon={faUser} />
                <p className="text-base lg:text-xl font-medium">
                  Profile
                  <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </p>
              </Link>
              <Link to="/dashboard/profile/reset-password" className="group w-max flex items-center gap-3">
                <FontAwesomeIcon icon={faGear} />
                <p className="text-base lg:text-xl font-medium">
                  Reset Password
                  <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </p>
              </Link>
              <Link onClick={handleLogout} className="group w-max flex items-center gap-3">
                <FontAwesomeIcon icon={faRightFromBracket} />
                <p className="text-base lg:text-xl font-medium">
                  Logout
                  <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                </p>
              </Link>
            </div>
          </div>

          {/* content */}
          <div className="w-[85%] overflow-y-hidden">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
