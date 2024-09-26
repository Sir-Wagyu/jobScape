import "../app.css";

function About() {
  return (
    <div className="w-screen mt-20 lg:mt-28 flex flex-col justify-center items-center">
      <h1 className="font-montserrat text-2xl md:text-4xl xl:text-5xl font-bold  text-center w-full text-[#15ABFF]">Why JobScape?</h1>
      <p className="font-opensans text-sm md:text-base xl:text-lg text-center w-96 md:w-3/4 lg:w-8/12 xl:w-1/2 mt-3">
        At JobScape, we prioritize your career journey by offering curated global opportunities, seamless navigation, and the best tools to land your dream job. Our commitment is to connect you with top companies, ensuring you find the
        right fit faster and easier
      </p>
    </div>
  );
}

export default About;
