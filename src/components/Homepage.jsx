import Navbar from "./ui/Navbar";
import landing from "../assets/landing.png";
import broker from "../assets/largest-broker.svg";
import presslogo from "../assets/press-logos.png";
import ecosytem from "../assets/ecosystem.png";

const Homepage = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <section className="landing  flex flex-col justify-center items-center mb-28">
          <div className=" w-3/6 h-fit m-10 ">
            <img src={landing}></img>
          </div>
          <div className=" mt-4">
            <h1 className=" text-bold text-5xl font-semibold text-gray-700 mb-3 ">
              Invest in everything
            </h1>
          </div>
          <div>
            <h1 className=" text-bold text-xl mb-10 ">
              Online platform to invest in stocks, derivatives, mutual funds,
              and more
            </h1>
          </div>
          <button className=" px-7 py-2 text-white  bg-blue-500 hover:bg-gray-800 rounded font-medium">
            Sign up now
          </button>
        </section>

        <section className="marketing ">
          <div className=" grid grid-cols-4 gap-6 p-5">
            <div className=" col-span-2 p-9 mr-9">
              <img src={broker}></img>
            </div>

            <div className=" col-span-2 flex flex-col p-6 ">
              <h1 className=" font-medium text-4xl text-gray-700 mb-6">
                Largest stock broker in India
              </h1>
              <p>
                1.5+ Crore Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
              </p>
              <div className=" grid grid-cols-2 mt-5 text-gray-700 mb-7">
                <div>
                  <ul className="custom-marker ">
                    <li>Future and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                  </ul>
                </div>
                <div>
                  <ul className="custom-marker">
                    <li>Stocks & IPOs</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt.Securities</li>
                  </ul>
                </div>
              </div>
              <img src={presslogo} />
            </div>
          </div>
        </section>

        <section className="px-10 py-14">
          <div className="grid grid-cols-7 gap-5 p-2">
            <div className="flex flex-col col-span-3 gap-7 ">
              <div><h1 className=" font-semibold text-4xl text-gray-600 py-1 mb-4">Trust with confidence</h1></div>
              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">Customer-first always</h1>
                <p>
                  That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                  crores worth of equity investments
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">No spam or gimmicks</h1>
                <p>
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">The Zerodha universe</h1>
                <p>
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">Do better with money</h1>
                <p>
                  With initiatives like Nudge and Kill Switch, we don't just
                  facilitate transactions, but actively help you do better with
                  your money.
                </p>
              </div>
            </div>

            <div className="felx flex-col col-span-4">
              <img src={ecosytem}></img>
              <div className="flex justify-around cursor-pointer ">
                <div className="text-blue-500 hover:text-gray-600">
                  <a className="flex gap-2">
                    Explore our products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-right mt-1"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
                <div className="text-blue-500 hover:text-gray-600">
                  <a className="flex gap-2 ">
                    Kite demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-move-right mt-1"
                    >
                      <path d="M18 8L22 12L18 16" />
                      <path d="M2 12H22" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Homepage;
