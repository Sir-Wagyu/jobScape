import "../app.css";
import Layout2 from "../pages/Layout2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function UserProfile() {
  const name = JSON.parse(localStorage.getItem("name"));
  const email = JSON.parse(localStorage.getItem("email"));
  const img_profile = JSON.parse(localStorage.getItem("img_profile"));

  return (
    <Layout2>
      <div className="w-full h-full flex justify-center items-center font-opensans">
        <div className="w-2/5 bg-slate-50 py-12 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img src={img_profile} alt="" className="w-32 h-32 object-cover rounded-full" />
            <h1 className="text-2xl font-semibold font-montserrat mt-2">{name}</h1>
            <p className="text-xl">{email}</p>
          </div>
          <div className="mt-6 w-full flex flex-col gap-2 text-lg font-medium px-10">
            <p>Account id : {}</p>
            <p>Created at : {}</p>
            <p>Update at : {}</p>
            <Link to="/dashboard/profile/reset-password" className="mt-8 text-center bg-[#15ABFF] py-2 rounded-lg text-white hover:bg-[#1586ff]">
              <FontAwesomeIcon icon={faKey} className="mr-4" />
              Change Password
            </Link>
          </div>
        </div>
      </div>
    </Layout2>
  );
}

export default UserProfile;
