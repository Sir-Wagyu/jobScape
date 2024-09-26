import "../app.css";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsDiscord } from "react-icons/bs";

function Info() {
  return (
    <Footer container className=" bg-[#002D72]">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <h1 className="text-2xl font-bold font-montserrat text-white">JobScape</h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-white">© 2024 copyright | JobScape by Wahyu Nur.</p>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="https://www.instagram.com/whyuuunr/" icon={BsInstagram} className="text-white" />
            <Footer.Icon href="https://github.com/Sir-Wagyu" icon={BsGithub} className="text-white" />
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
            <Footer.Icon href="#" icon={BsDiscord} className="text-white" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Info;
