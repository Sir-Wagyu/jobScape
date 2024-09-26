import "../app.css";
import Layout2 from "../pages/Layout2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <Layout2>
      <div className="w-full h-full flex flex-col items-center justify-center font-opensans">
        <FontAwesomeIcon icon={faFolderOpen} className="h-28 text-[#15ABFF]" />
        <h1 className="font-bold text-5xl font-montserrat mt-6">Welcome to Dashboard</h1>
        <p className="font-opensans text-xl mt-3">Now you can post your job and find the right candidate!</p>
      </div>
    </Layout2>
  );
}

export default Dashboard;
