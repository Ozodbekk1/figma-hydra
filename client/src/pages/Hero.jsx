import MaskPng from "../../public/imgs/maskPng.png";
import "./pages.css";
import { Button } from "../components/ui/button";
import rightArrow from "../assets/right-arrow.png";
import locationIcon from "../assets/location.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone-call.png";

const Hero = () => {
  return (
    <>
      <div className=" py-5 flex items-center justify-between justify-around sm:flex-col-reverse gap-0 md:flex-row leading-10">
        <div className="">
          <h1 className="flex font-mono spanss flex-col ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Dive
            </span>{" "}
            Into The Depths <br />
            Of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Virtual Reality
            </span>
          </h1>
          <p className="paragraph flex md:block sm:hidden">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex">
            <Button className="flex rounded-full buttonHero">
              Build your world
            </Button>
            <span className="flex justify-between w-15 h-10 px-3 ">
              <img src={rightArrow} alt="right icon" />
            </span>
          </div>
        </div>
        <div className="w-auto h-auto">
          <img src={MaskPng} alt="mask" />
        </div>
      </div>
      <div className="flex flex-row justify-around  ">
        <div className="flex sm:h-10 gap-2">
          <img src={locationIcon} alt="emailIcon" />
          <div className="flex flex-col justify-center">
          <h1 className="">
            Pay Us a Visit
          </h1>
          <p>
            1234 North West Street, New York, NY 12345
          </p>
          </div>
        </div>
        <div className="flex sm:h-10 gap-2">
          <img src={phoneIcon} alt="PhoneIcon" />
          <div className="flex flex-col justify-center">
          <h1>
            Give us a Call
          </h1>
          <p>
            +998 95 030 76 79
          </p>
          </div>
        </div>
       <div className="flex sm:h-10 gap-2">
        <img src={emailIcon} alt="EmailIcon" />
        <div className="flex flex-col justify-center">
        <h1>
          Send us an Email
        </h1>
        <p>
          olimjonovozodbek16@gmail.com
        </p>
        </div>
       </div>
      </div>
    </>
  );
};

export default Hero;
