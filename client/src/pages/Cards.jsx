import card1img from "../assets/card1img.png";
import card2img from "../assets/card2img.png";
import card3img from "../assets/card3img.png";
import card4img from "../assets/card4img.png";
import { Button } from "@/components/ui/button";

const Cards = () => {
  return (
    <>
    <div className="flex flex-row md:flex-row sm:flex-col justify-between my-5 mx-4 outlinesContainer">
      <div className="flex w-auto h-auto items-center flex-col gap-3 bg-slate-400 py-5 rounded-3xl cursor-pointer cards my-3 mx-3">
        <img src={card1img} alt="cardImg" className="rounded-full h-32 w-32" />
        <h1 className="font-extrabold">SIMULATION</h1>
        <p  className="text-center">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Button className="cardButton">Try it now</Button>
      </div>
      <div className="flex w-auto h-auto items-center flex-col gap-3 bg-slate-400 py-5 rounded-3xl cursor-pointer cards my-3 mx-3">
        <img src={card2img} alt="cardImg" className="rounded-full h-32 w-32" />
        <h1 className="font-extrabold">EDUCATION</h1>
        <p className="text-center">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Button className="cardButton">Try it now</Button>
      </div>
      <div className="flex w-auto h-auto items-center flex-col gap-3 bg-slate-400 py-5 rounded-3xl cursor-pointer cards my-3 mx-3">
        <img src={card3img} alt="cardImg" className="rounded-full h-32 w-32" />
        <h1 className="font-extrabold">SELF-CARE</h1>
        <p  className="text-center">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Button className="cardButton">Try it now</Button>
      </div>
      <div className="flex w-auto h-auto items-center flex-col gap-3 bg-slate-400 py-5 rounded-3xl cursor-pointer cards my-3 mx-3">
        <img src={card4img} alt="cardImg" className="rounded-full h-32 w-32" />
        <h1 className="font-extrabold">OUTDOOR</h1>
        <p className="text-center">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Button className="cardButton">Try it now</Button>
      </div>
    </div>
    </>
  );
};

export default Cards;
