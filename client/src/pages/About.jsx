import aboutImg from "../assets/aboutImg.png";
import "./pages.css";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about">
      <div className="flex mt-24 items-center justify-around outlinesContainer">
        <h1 className="text-[50px]">
          <span className="font-extrabold text-[50px]">Introduction</span>
          <br />
          to HYDRA VR
        </h1>
        <p className="w-2/5 font-medium md:block sm:hidden">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vit
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center p-10 outlinesContainer">
      <div className="w-full md:w-1/2">
        <img
          src={aboutImg} 
          alt="VR Headset"
          className="about-image"
        />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-2">ABOUT</h2>
        <h3 className="text-xl font-semibold mb-4">HYDRA VR</h3>
        <p className="mb-4">
          Eget mi proin sed libero enim sed faucibus turpis. Nisi rhoncus mattis rhoncus urna neque viverra justo. 
          Vivamus at augue eget arcu dictum. Ultricies gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing.
        </p>
        <p className="mb-6">
          Consequat semper viverra nam libero justo. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button className="buttonHero font-semibold py-2 px-4 rounded-full">
          LET&apos;S GET IN TOUCH
        </Button>
      </div>
    </div>
    </section>
  );
};

export default About;
