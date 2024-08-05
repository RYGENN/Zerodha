import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import nithinKamath from "../assets/nithinKamath.jpg";

const Aboutpage = () => {
  return (
    <div>
      <navbar><Navbar/></navbar>
      
      <main>
        <div className="flex flex-col justify-center text-neutral-500">

          <div className="flex flex-col justify-center text-center px-8 py-6  ">
            <section className="flex flex-col justify-center text-3xl font-semibold  my-14 text-neutral-700">
              <h1>We pioneered the discount broking model in India.</h1>
              <h1> Now, we are breaking ground with our technology.</h1>
            </section>
            <hr className=" mx-10 my-10"></hr>
            <section className="grid grid-cols-2 gap-2 mx-24 my-10 text-left font-">
              <div className=" flex flex-col gap-2 px-6 py-5 ">
                <p>
                  We kick-started operations on the 15th of August, 2010 with
                  the goal of breaking all barriers that traders and investors
                  face in India in terms of cost, support, and technology. We
                  named the company Zerodha, a combination of Zero and "Rodha",
                  the Sanskrit word for barrier.
                </p>
                <p>
                  Today, our disruptive pricing models and in-house technology
                  have made us the biggest stock broker in India.
                </p>
                <p>
                  Over 1+ Crore clients place millions of orders every day
                  through our powerful ecosystem of investment platforms,
                  contributing over 15% of all Indian retail trading volumes.
                </p>
              </div>

              <div className="twc flex flex-col gap-2 px-6 py-5">
                <p>
                  In addition, we run a number of popular open online
                  educational and community initiatives to empower retail
                  traders and investors.
                </p>
                <p>
                  <span>Rainmatter</span>, our fintech fund and incubator, has
                  invested in several fintech startups with the goal of growing
                  the Indian capital markets.
                </p>
                <p>
                  And yet, we are always up to something new every day. Catch up
                  on the latest updates on our <span> blog</span> or see what
                  the media is <span>saying about us</span>.
                </p>
              </div>
            </section>
            <section className=" mx-24">
            <h1 className=" text-3xl font-semibold text-neutral-600 mb-10 -ml-16 ">People</h1>

              <div className="flex flex-row w-full  justify-center">
                <div className="flex flex-col w-2/5 justify-center items-center gap-4 ">
                  <img
                    src={nithinKamath}
                    alt="landing"
                    className="w-2/3 h-full rounded-full "
                  />
                  <h1>Nithin Kamath</h1>
                  <h1>Founder, CEO</h1>
                </div>
                <div className=" flex flex-col w-3/5 items-start mt-5 gap-7 ">
                  <div className="twc flex flex-col gap-10 text-left">
                    <p>
                      Nithin bootstrapped and founded Zerodha in 2010 to
                      overcome the hurdles he faced during his decade long stint
                      as a trader. Today, Zerodha has changed the landscape of
                      the Indian broking industry.
                    </p>
                    <p>
                      He is a member of the SEBI Secondary Market Advisory
                      Committee (SMAC) and the Market Data Advisory Committee
                      (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                      Connect on <span>Homepage</span> / <span>TradingQnA</span>{" "}
                      / <span>Twitter</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className=" "><Footer /></footer>
      
    </div>
  );
};

export default Aboutpage;
