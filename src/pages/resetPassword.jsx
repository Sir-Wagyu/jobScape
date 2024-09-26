import "../app.css";
import Layout2 from "../pages/Layout2";
import InputForm from "../components/inputForm";
import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const passChangeURL = "https://job-vacancy-api.vercel.app/api/change-password";
  const token = localStorage.getItem("token");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let { current_password, new_password, new_confirm_password } = input;

    if (!current_password) {
      setError("Current password is required!");
      setSuccess(null);
      return;
    }

    if (new_password !== new_confirm_password) {
      setError("New password and confirmation do not match.");
      setSuccess(null);
      return;
    }

    axios
      .post(
        passChangeURL,
        {
          current_password,
          new_password,
          new_confirm_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setSuccess("Password changed successfully.");
        setError(null); // Reset pesan error jika berhasil
        setInput({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
      })
      .catch(() => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred. Please try again.");
        }
        setSuccess(null);
      });
  };

  return (
    <Layout2>
      <div className="w-full h-full flex items-center justify-center font-opensans">
        <div className="w-2/5 py-12 px-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl">Change Password</h1>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-red-500">{success}</p>}
          <form onSubmit={handleSubmit} className="mt-8">
            <InputForm type="text" name="current_password" label="Current Password" onChange={handleInput} />
            <InputForm type="text" name="new_password" label="New Password" onChange={handleInput} />
            <InputForm type="text" name="new_confirm_password" label="Confirm New Password" onChange={handleInput} />
            <button type={"submit"} className="bg-[#15ABFF] text-white font-bold py-2 px-7 rounded-xl mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout2>
  );
}

export default ResetPassword;
