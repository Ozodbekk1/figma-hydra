import unrealImg from "../assets/unrealImg.png";
import unityImg from "../assets/unityImg.png";
import oculusImg from "../assets/oculusImg.png";
import viveImg from "../assets/viveImg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Technologies = () => {
  return (
    <>
    <section id="technology" className="outlinesContainer">
      <div className="tech-container text-center my-12">
        <h1>
          TECHNOLOGIES & HARDWARE <br />
        </h1>
        <h1>USED BY HYDRA VR</h1>
      </div>
      <div className="flex flex-row justify-around flex-wrap items-center md:flex sm:hidden">
        <img src={unrealImg} alt="unrealImg" />
        <img src={unityImg} alt="unityImg" />
        <img src={oculusImg} alt="oculusImg" />
        <img src={viveImg} alt="viveImg" />
      </div>
      <div className="py-5 md:hidden sm:block">
        <Carousel>
          <CarouselContent className='h-28 '>
            <CarouselItem><img src={unrealImg} alt="unrealImg" /></CarouselItem>
            <CarouselItem><img src={unityImg} alt="unityImg" /></CarouselItem>
            <CarouselItem><img src={oculusImg} alt="oculusImg" /></CarouselItem>
            <CarouselItem><img src={viveImg} alt="viveImg" /></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
    </>
  );
};

export default Technologies;
