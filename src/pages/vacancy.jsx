import "../app.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Info from "../components/Info";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Vacancy() {
  const url = "https://job-vacancy-api.vercel.app/api/jobs";
  const [data, setData] = useState([]);
  const { search, setSearch } = useContext(SearchContext);
  const location = useLocation();

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

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

  const handleCreatedAt = (createdAt) => {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);
    const diffTime = Math.abs(currentDate - createdAtDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `Posted ${diffDays} days ago`;
  };

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search") || "";
    setSearch(searchQuery);
  }, [location.search, setSearch]);

  return (
    <>
      <div className="container mx-auto w-full md:w-4/5 xl:w-3/4 mb-24">
        {/* breadcrumb */}
        <div className="flex items-center gap-2  lg:mt-14 my-6 mx-9">
          <Link to="/">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to="/job-vacancy">Job Vacancy</Link>
        </div>

        {/* search bar */}
        <div className="flex justify-center items-center flex-col ">
          <h1 className="font-montserrat text-2xl md:text-4xl font-bold text-[#15ABFF]">Explore Job That Suit On You</h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex justify-center items-center gap-0 w-full mt-3 mb-10">
            <input className="w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 h-12 md:h-14  border-2 border-[#15ABFF] rounded-l-full pl-5" type="text" placeholder="Search Job Position" value={search} onChange={handleSearchInput} />
            <button type="submit" className="bg-[#15ABFF] text-white rounded-r-full w-12 md:w-14 lg:w-16 h-12 md:h-14  hover:bg-[#002D72] border-2 border-[#15ABFF] border-l-0 flex justify-center items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        {/* job list */}
        <div className="flex flex-col gap-8 items-center">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Link key={index} to={`/job-vacancy/${item._id}`} className="w-11/12  pt-5 pb-8 px-5 shadow-lg flex flex-col justify-between hover:ring-2 ring-[#15ABFF] transition-all rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <img src={item.company_image_url} alt="" className=" max-h-20 object-cover overflow-hidden" />
                    <h1 className="font-montserrat  font-bold mt-3">{item.title}</h1>
                    <p className="font-opensans text-sm">
                      {item.company_name}, <span>{item.company_city}</span>
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faBookmark} className="text-lg" />
                </div>
                <div className="my-4">{item.job_description}</div>
                <div className="text-sm font-medium flex gap-3 flex-wrap w-4/5 mt-3">
                  <div className="bg-gray-200 px-4 py-2 rounded-md">{item.job_type}</div>
                  <div className="bg-gray-200 px-4 py-2 rounded-md">{item.job_tenure}</div>
                  <div className="bg-gray-200 px-4 py-2 rounded-md">{handleSalary(item.salary_min, item.salary_max)}</div>
                </div>
                <p className="font-opensans text-sm font-semibold mt-3">{handleCreatedAt(item.createdAt)}</p>
              </Link>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center rounded-lg p-10">
              <FontAwesomeIcon icon={faFaceSadTear} className="text-4xl mb-2" />
              <p className="text-base lg:text-lg font-medium">Sorry, the job you&apos;re seeking doesn&apos;t exist.</p>
            </div>
          )}
        </div>
      </div>
      <Info />
    </>
  );
}

export default Vacancy;
