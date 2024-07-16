import Container from "@/layouts/Container";
import serimg from "../assets/slider5.png";
import ser2img from "../assets/slider6.png";

const About2 = () => {
  return (
    <Container>
      <div>
        <div className=" flex justify-center my-8">
          <img src={serimg} alt="" />
        </div>

        <div className="p-0 md:p-8 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 ">
          <div className=" mr-8">
            <img src={ser2img} alt="" className="rounded-2xl" />
          </div>

          <div className=" flex flex-col mx-4">
            <h1 className="block antialiased tracking-normal font-sans font-semibold leading-tight mb-4 text-3xl">
              Truck Dispatch Services
            </h1>

            <p>
              Exact dispatcher - dispatch services arranges professional
              dispatch services for owner operators and truckers who are tired
              of wasting their time and energy on cheap freight. Trucks Dispatch
              Services provides the prospect of high paying loads while you
              drive. In addition, we can handle the rest of your administrative
              overhead such as negotiating rates and handling necessary
              paperwork.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About2;
