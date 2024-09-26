import "../app.css";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  const logUrl = "https://job-vacancy-api.vercel.app/api/auth/login";
  const [errorNotif, setErrorNotif] = useState(null);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    let { email, password } = input;
    axios
      .post(logUrl, { email, password })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", JSON.stringify(data.user.name));
        localStorage.setItem("email", JSON.stringify(data.user.email));
        localStorage.setItem("image_url", JSON.stringify(data.user.image_url));
        navigate("/");
      })
      .catch(() => {
        setErrorNotif("*Wrong Email or Password!");
      });
  };

  return (
    <>
      <div className=" mx-auto w-11/12 md:w-2/3 lg:w-1/3 px-5 py-10 font-poppins shadow-lg mt-12">
        <div className="flex justify-between items-center">
          <h1 className="font-montserrat text-3xl lg:text-4xl font-bold text-[#15ABFF] text-center">Login</h1>
          <Link to="/" className="w-9 h-9 bg-[#15ABFF] hover:bg-[#0072b3] text-white flex justify-center items-center rounded-lg ">
            <FontAwesomeIcon icon={faX} />
          </Link>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col w-full gap-6 mt-8">
          <div>
            <label htmlFor="email">Email:</label>
            <input name="email" value={input.email} onChange={handleInput} type="email" placeholder="Email" className="w-full rounded-full text-sm px-4 focus:border-b-2 focus:ring-0 focus:border-[#15ABFF]" required />
          </div>
          <div>
            <label htmlFor="Password">Password:</label>
            <input name="password" value={input.password} onChange={handleInput} type="password" placeholder="Password" className="w-full rounded-full text-sm px-4 focus:border-b-2 focus:ring-0 focus:border-[#15ABFF]" required />
          </div>
          <p className={`text-red-500 text-sm font-medium ${errorNotif ? "block" : "hidden"}`}>{errorNotif}</p>
          <button className={`bg-[#15ABFF] text-white w-full rounded-full h-10 hover:bg-[#002D72] ${errorNotif ? "mt-0" : "mt-5"}`}>Login</button>
          <p className="text-sm">
            Don&apos;t have an account?
            <Link to="/register" className="ml-1 text-[#15ABFF] hover:text-[#002D72]">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
