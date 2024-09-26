import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faLocationDot, faMoneyBillWave, faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faClock, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Info from "./Info";

function JobDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [jobDetail, setJobDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://job-vacancy-api.vercel.app/api/jobs/${id}`)
      .then((res) => {
        setJobDetail(res.data); // Set data job yang diambil berdasarkan ID
      })
      .catch((error) => {
        console.error("Error fetching job detail:", error);
      });
  }, [id]);

  if (!jobDetail) {
    return (
      <div className="flex space-x-2 justify-center items-center bg-white h-screen">
        <span className="sr-only">Loading...</span>
        <div className="h-4 w-4 bg-[#15ABFF] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-[#15ABFF] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-[#15ABFF] rounded-full animate-bounce"></div>
      </div>
    );
  }

  const handleRupiah = (e) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(e);
  };

  const handleSalary = (minSal, maxSal) => {
    const min = minSal;
    const max = maxSal;
    return `${handleRupiah(min)} - ${handleRupiah(max)}`;
  };

  return (
    <>
      <div className="container mx-auto w-10/12 mt-10 md:w-4/5 xl:w-3/5 font-opensans mb-24">
        {/* bredcrumb */}
        <div className="flex items-center gap-2 ">
          <Link to="/">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to="/job-vacancy">Job Vacancy</Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to={`/job-vacancy/${id}`}> Details</Link>
        </div>

        {/* detail job */}
        <div className="shadow-lg mb-24 lg:mb-5 pb-12 lg:pb-16 md:pt-6 px-4 md:px-6 lg:pt-10 lg:px-10 rounded-lg mt-4">
          <div className="flex justify-between">
            <img src={jobDetail.company_image_url} alt="" className="max-h-32 object-cover rounded-lg" />
            <div className="w-9 h-9 flex justify-center items-center bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-xl text-lg">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold font-montserrat">{jobDetail.title}</h1>
                <div className="bg-green-400 text-white text-sm rounded-md px-3 py-1">{jobDetail.job_type}</div>
              </div>
              <p className="text-xl font-normal mt-2">{jobDetail.company_name}</p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} /> {jobDetail.company_city}
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faClock} />
                {jobDetail.job_tenure}
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faMoneyBillWave} />
                {handleSalary(jobDetail.salary_min, jobDetail.salary_max)}
              </div>
            </div>

            <div className="mt-9">
              <div>
                <h1 className="text-lg font-semibold">Requirements </h1>
                <p className="text-base font-normal mt-1">{jobDetail.job_qualification}</p>
              </div>
              <div className="mt-5">
                <h1 className="text-lg font-semibold">Detail Job</h1>
                <p className="text-base font-normal mt-1">{jobDetail.job_description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-white  py-5 flex gap-2 px-4 lg:px-0 md:static">
          {jobDetail.job_status ? (
            <div className="bg-[#15ABFF] hover:bg-[#0072b3] cursor-pointer text-white w-3/4 h-12 flex items-center justify-center gap-3 text-lg rounded-lg shadow-lg">
              Apply Now <FontAwesomeIcon icon={faArrowRight} />
            </div>
          ) : (
            <div className="bg-red-500 cursor-not-allowed text-white w-3/4 h-12 flex items-center justify-center gap-3 text-lg rounded-lg shadow-lg">Closed</div>
          )}
          <div className="bg-slate-200 hover:bg-slate-300 cursor-pointer w-1/4 flex items-center justify-center gap-3 text-2xl py-2 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
      </div>
      <Info />
    </>
  );
}

export default JobDetail;
