import img from "../../public/imgs/Frame.png";
import vector from "../../public/imgs/Vector.png";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Technologies  from "./Technologies.jsx";
import { Button } from "../components/ui/button.jsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Homeburger from "../../public/imgs/image.png";
import './pages.css'
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="sm:block md:hidden outlinesContainer ">
        <div  className="flex flex-row gap-5 px-4 py-3 items-center">
          <a href="/">
            <img src={vector} alt="logo" />
          </a>
          <img src={img} alt="image" className="w-24" />
        </div>
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" className=" absolute top-0 right-2 w-20 h-20 ">
              <img src={Homeburger} alt="burger menu" />
            </Button>
          </SheetTrigger>
          <SheetContent className='bg-red-200'>
            <SheetHeader>
              <SheetTitle className='flex flex-col gap-6 justify-center items-center'>
                <a className="font-bold" href={<About />}>About</a>
                <a className="font-bold" href={<Services/>}>services</a>
                <a className="font-bold" href={<Technologies/>}>Technologies</a>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden sm:hidden md:block">
        <div className="flex flex-row gap-4 items-center justify-center justify-around py-4 px-4 text-white">
          <div className="flex flex-row gap-4">
            <a href="/">
              <img src={vector} alt="logo" />
            </a>
            <img src={img} alt="image" className="w-24" />
          </div>
          <div className="flex gap-4">
            <a className="font-bold" href={<About />}>About</a>
            <a className="font-bold" href={<Services />}>services</a>
            <a className="font-bold" href={<Technologies />}>Technologies</a>
          </div>
          <div className="flex gap-6">
            <Button className='buttonHero rounded-full'>Contact us</Button>
            <Button className='buttonHero rounded-full'>Join HYDRA</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
