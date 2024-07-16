import heroimg from "../assets/slider1.jpg";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={heroimg}
      />
      <div className="absolute inset-0 h-full w-full bg-gray-900/50"></div>
      <div className="container relative mx-auto px-8 min-h-[80vh] flex place-items-center text-center justify-center">
        <div>
          <p className="mt-6 mb-6 sm:mb-8 md:mb-14 text-3xl sm:text-5xl font-mono leading-relaxed text-white max-w-3xl">
            Truck Dispatch Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
