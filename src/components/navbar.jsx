import "../app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token", { path: "/" });
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between items-center py-4 px-6 shadow-lg text-[#1f1f1f] bg-white">
        <Link to="/">
          <h1 className="font-montserrat font-bold text-2xl cursor-pointer">JobScape</h1>
        </Link>
        <button className="text-xl lg:hidden" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="hidden lg:flex gap-6 justify-center items-center font-semibold">
          <Link to="/job-vacancy" className="group text-lg hover:text-[#15ABFF] transition-all">
            Vacancy
            <span className="group-hover:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#15ABFF]"></span>
          </Link>
          {!Cookies.get("token") && (
            <>
              <Link to="/login" className="flex items-center justify-center border border-[#15ABFF] text-[#15ABFF] rounded-md w-28 h-10 hover:bg-[#15ABFF] hover:text-white transition-all">
                <p>Login</p>
              </Link>
              <Link to="/register" className="flex items-center justify-center bg-[#15ABFF] text-white rounded-md w-28 h-10 hover:bg-[#0072b3]">
                <p>Sign Up</p>
              </Link>
            </>
          )}
          {Cookies.get("token") && (
            <>
              <Link to="/dashboard" className="text-lg">
                Dashboard
              </Link>
              <Link onClick={handleLogout} className="text-lg">
                Logout
              </Link>
            </>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="font-semibold text-lg flex flex-col justify-center items-center bg-white text-[#1f1f1f] shadow-lg pt-4 pb-7 gap-4">
          <Link to="/job-vacancy">Vacancy</Link>
          {!Cookies.get("token") && (
            <>
              <Link to="/login" className="flex justify-center items-center border border-[#15ABFF] text-[#15ABFF] rounded-md w-1/3 h-10">
                <p>Login</p>
              </Link>
              <Link to="/register" className="flex justify-center items-center bg-[#15ABFF] text-white rounded-md w-1/3 h-10 hover:bg-[#002D72]">
                <p>Sign Up</p>
              </Link>
            </>
          )}
          {Cookies.get("token") && (
            <>
              <Link to="/dashboard">
                <p>Dashboard</p>
              </Link>
              <Link onClick={handleLogout}>
                <p>Logout</p>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
