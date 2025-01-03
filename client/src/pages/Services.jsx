import Cards from "./Cards"
const Services = () => {
  return (
    <section>
      <div className="flex justify-around items-center">
        <h1>
            <span className="font-extrabold text-[35px]">
              WHY BUILD
            </span> 
            <br />
            <span className="text-[35px]">
              WITH HYDRA?
            </span>
        </h1>
        <p className="w-1/2 sm:hidden md:flex">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Eget mi proin sed libero enim sed faucibus turpis. 
          Nisi rhoncus mattis rhoncus urna neque viverra justo. 
          Vivamus at augue eget arcu dictum. Ultricies gravida dictum fusce ut placerat orci. 
          Aenean et tortor at risus viverra adipiscing.
        </p>
      </div>
      <div>
      </div>
      <Cards />
    </section>
  )
}

export default Services
