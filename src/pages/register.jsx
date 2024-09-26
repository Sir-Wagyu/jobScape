import "../app.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Register() {
  const regUrl = "https://job-vacancy-api.vercel.app/api/auth/register";
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = input;
    axios
      .post(regUrl, {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" mx-auto w-11/12 md:w-2/3 lg:w-1/3 px-5 py-10 font-poppins shadow-lg mt-12">
        <div className="flex justify-between items-center">
          <h1 className="font-montserrat text-3xl lg:text-4xl font-bold text-[#15ABFF] text-center">Register</h1>
          <Link to="/" className="w-9 h-9 bg-[#15ABFF] hover:bg-[#0072b3] text-white flex justify-center items-center rounded-lg ">
            <FontAwesomeIcon icon={faX} />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 mt-8">
          <div>
            <label htmlFor="username">Username:</label>
            <input value={input.name} onChange={handleInput} name="name" type="text" placeholder="Username" className="w-full rounded-full text-sm px-4 focus:border-b-2 focus:ring-0 focus:border-[#15ABFF]" />
          </div>
          <div>
            <label htmlFor="Profile Picture">Profile Picture:</label>
            <input
              value={input.image_url}
              onChange={handleInput}
              name="image_url"
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-full text-base px-4 focus:border-b-2 focus:ring-0 focus:border-[#15ABFF]"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input value={input.email} onChange={handleInput} name="email" type="email" placeholder="Email" className="w-full rounded-full text-base px-4 focus:border-b-2 focus:ring-0 focus:border-[#15ABFF]" required />
          </div>
          <div>
            <label htmlFor="Password">Password:</label>
            <input value={input.password} onChange={handleInput} name="password" type="password" placeholder="Password" className="w-full rounded-full text-sm px-4 focus:border-b-2 focus:ring-0 focus:border-[#15ABFF]" required />
          </div>
          <button type={"submit"} className="bg-[#15ABFF] text-white w-full rounded-full h-10 hover:bg-[#002D72] mx-auto mt-4">
            Register
          </button>
          <p className="text-sm">
            Already have an account?
            <Link to="/login" className="ml-1 text-[#15ABFF] hover:text-[#002D72]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
