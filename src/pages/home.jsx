import "../app.css";

import Jumbotron from "../components/jumbotron";
import SearchBar from "../components/searchBar";
import About from "../components/about";
import Cta from "../components/CTA";
import AutoCarousel from "../components/autoCarousel";
import Info from "../components/Info";

function Home() {
  return (
    <div className="overflow-x-hidden ">
      {/* jumbotron */}
      <Jumbotron />

      {/* Search Bar */}
      <SearchBar />
      {/* category */}

      {/* about */}
      <About />

      <Cta />

      {/* top-companies */}
      <AutoCarousel />

      {/* footer */}
      <Info />
    </div>
  );
}

export default Home;
