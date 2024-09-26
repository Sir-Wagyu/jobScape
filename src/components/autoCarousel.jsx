import "../app.css";
import Marquee from "react-fast-marquee";

function AutoCarousel() {
  const companyLogos = [
    "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/nvidia_logo-freelogovectors.net_.png",
    "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png",
    "https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/39/BI_Logo.png",
    "https://cdn.vox-cdn.com/thumbor/ln4IHgPYpvNoIWpJ2Y1_c9msxXA=/0x0:2012x1341/2000x1333/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg",
  ];

  return (
    <div className="w-full py-8 my-20 md:my-24 lg:my-36 bg-gray-50">
      <h1 className="font-montserrat text-2xl md:text-4xl font-bold text-center mb-6 text-[#15ABFF]">Top Companies Hiring Now</h1>

      <Marquee speed={200} autoFill>
        {companyLogos.map((logo, index) => {
          return <img key={index} src={logo} alt={`Company ${index + 1}`} className="min-h-14 max-h-24 ml-16" />;
        })}
      </Marquee>
    </div>
  );
}

export default AutoCarousel;
