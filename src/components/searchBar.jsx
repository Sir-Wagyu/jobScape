import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const { search, setSearch } = useContext(SearchContext); // Mengambil state dari context
  const navigate = useNavigate();

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/job-vacancy?search=${search}`);
  };

  return (
    <div className="w-screen mt-20 lg:mt-28 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center w-10/12 text-[#15ABFF]">Find Your Dream Job</h1>
      <p className="text-sm md:text-base xl:text-lg text-center w-96 mb-5 font-opensans">Start finding the right job for you today!</p>
      <form className="flex justify-center items-center gap-0 w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 h-12 md:h-14 border-2 border-[#15ABFF] rounded-l-full pl-5"
          placeholder="Search Job Position"
          value={search} // Bind input ke state global
          onChange={handleSearchInput} // Update state global saat input berubah
        />
        <button type="submit" className="bg-[#15ABFF] text-white rounded-r-full w-12 md:w-14 lg:w-16 h-12 md:h-14 hover:bg-[#0072b3] border-2 border-[#15ABFF] border-l-0 flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
