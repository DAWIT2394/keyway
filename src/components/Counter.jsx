import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32 ">
      <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4 py-8">
        <div className="relative flex flex-col bg-clip-padding rounded-lg bg-transparent shadow-none">
          <div className="p-6 w-full justify-center text-center">
            <div className="flex items-center justify-center mb-2">
              <CountUp
                start={inView ? 0 : null}
                duration={3.5}
                end={30000}
                className="countup text-6xl font-bold text-primary"
              />
              <span className="ml-2 text-4xl font-bold text-gray-500">+</span>
            </div>
            <h5 className="block antialiased font-sans text-2xl font-light leading-relaxed text-inherit text-gray-500 mt-6">
              Loads Booked
            </h5>
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-padding rounded-lg bg-transparent shadow-none">
          <div className="p-6 w-full justify-center text-center">
            <div className="flex items-center justify-center mb-2">
              <CountUp
                start={inView ? 0 : null}
                duration={3.5}
                end={10000}
                className="countup text-6xl font-bold text-primary"
              />
              <span className="ml-2 text-4xl font-bold text-gray-500">+</span>
            </div>
            <h5 className="block antialiased font-sans text-2xl font-light leading-relaxed text-inherit text-gray-500 mt-6">
              Weekly Gross Revenue
            </h5>
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-padding rounded-lg bg-transparent shadow-none">
          <div className="p-6 w-full justify-center text-center">
            <div className="flex items-center justify-center mb-2">
              <CountUp
                start={inView ? 0 : null}
                duration={3.5}
                end={5}
                className="countup text-6xl font-bold text-primary"
              />
            </div>
            <h5 className="block antialiased font-sans text-2xl font-light leading-relaxed text-inherit text-gray-500 mt-6">
              Per Mile
            </h5>
          </div>
        </div>

        <div className="relative flex flex-col bg-clip-padding rounded-lg bg-transparent shadow-none">
          <div className="p-6 w-full justify-center text-center">
            <div className="flex items-center justify-center mb-2">
              <CountUp
                start={inView ? 0 : null}
                duration={3.5}
                end={500}
                className="countup text-6xl font-bold text-primary"
              />
              <span className="ml-2 text-4xl font-bold text-gray-500">+</span>
            </div>
            <h5 className="block antialiased font-sans text-2xl font-light leading-relaxed text-inherit text-gray-500 mt-6">
              Clients
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
