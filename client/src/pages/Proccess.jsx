import "./pages.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Proccess = () => {
  return (
    <>
      <div className="flex justify-around items-center">
        <h1 className="font-extrabold spanss">
          HOW WE BUILD <br />
          <span className="font-thin">WITH HYDRA VR ?</span>
        </h1>
        <p className="w-[652px] sm:hidden md:block">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="flex flex-row justify-around items-center py-6 sm:hidden md:flex outlinesContainer">
        <div className="flex flex-col items-center outlines">
          <h1>01</h1>
          <p>
            3D Conception <br />& Design
          </p>
        </div>
        <div className="flex flex-col items-center outlines">
          <h1>02</h1>
          <p>
            Interaction <br />
            Design
          </p>
        </div>
        <div className="flex flex-col items-center outlines">
          <h1>03</h1>
          <p>
            VR World <br />
            User Testing
          </p>
        </div>
        <div className="flex flex-col items-center outlines">
          <h1>04</h1>
          <p>
            Hydra VR <br />
            Deploy
          </p>
        </div>
      </div>
      <div className="sm:block md:hidden py-5 outlinesContainer">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center outlines">
                <h1>01</h1>
                <p>
                  3D Conception <br />& Design
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center outlines">
                <h1>02</h1>
                <p>
                  Interaction <br />
                  Design
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center outlines">
                <h1>03</h1>
                <p>
                  VR World <br />
                  User Testing
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center outlines">
                <h1>04</h1>
                <p>
                  Hydra VR <br />
                  Deploy
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Proccess;
