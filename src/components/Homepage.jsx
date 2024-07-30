import landing from "../assets/landing.png";
import broker from "../assets/largest-broker.svg";
import presslogo from "../assets/press-logos.png";
import ecosytem from "../assets/ecosystem.png";
import varsity from "../assets/varsity.png";

import Card from "./ui/Card";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Homepage = () => {
  return (
    <div className=" "> 
      <div className="fixed top-0 bg-white w-full">
      <Navbar/>
      </div>
      <main className=" mt-20">
        <section className="landing  flex flex-col justify-center items-center mb-28 ">
          <div className="w-2/3 md:w-3/6 h-fit md:m-10 ">
            <img src={landing}></img>
          </div>
          <div className=" flex text-center mt-4">
            <h1 className=" text-bold text-5xl font-semibold text-neutral-700 mb-3 ">
              Invest in everything
            </h1>
          </div>
          <div className="flex justify-center items-center w-full mb-10 text-center">
            <h1 className="text-bold text-xl  ">
              Online platform to invest in stocks, derivatives, mutual funds,
              and more
            </h1>
          </div>
          <button className=" px-7 py-2 text-white  bg-blue-500 hover:bg-gray-800 rounded font-medium">
            Sign up now
          </button>
        </section>

        <section className="marketing flex flex-col ">
          <div className=" grid grid-flow-row md:grid md:grid-cols-2  gap-6 p-5">
            <div className="p-9 mr-9">
              <img src={broker}></img>
            </div>

            <div className="flex flex-col p-6 ">
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

        <section className="trust md:px-10 py-14">
          <div className="grid grid-flow-row text-neutral-700 md:grid md:grid-cols-7 gap-5 p-2">
            <div className="flex flex-col col-span-3  gap-7 ml-7 md:ml-0">
              <div>
                <h1 className=" font-semibold text-4xl  py-1 mb-4">
                  Trust with confidence
                </h1>
              </div>
              <div className="twc ">
                <h1 className=" font-medium text-xl">
                  Customer-first always
                </h1>
                <p>
                  That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                  crores worth of equity investments
                </p>
              </div>

              <div className="twc">
                <h1 className=" font-medium text-xl ">
                  No spam or gimmicks
                </h1>
                <p>
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>

              <div className="twc">
                <h1 className=" font-medium text-xl">
                  The Zerodha universe
                </h1>
                <p>
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div className="twc">
                <h1 className=" font-medium text-xl">
                  Do better with money
                </h1>
                <p>
                  With initiatives like <span>Nudge</span> and <span>Kill Switch</span>, we don't just
                  facilitate transactions, but actively help you do better with
                  your money.
                </p>
              </div>
            </div>

            <div className="felx flex-col col-span-4">
              <img src={ecosytem}></img>
              <div className="flex justify-around cursor-pointer ">
                <div className="text-blue-500 hover:text-gray-600">
                  <a className="flex gap-2 ">
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

        <section className="pricing mb-5">
          <div className=" pb-14">
            <div className="grid md:grid-cols-5 gap-5 md:px-16 mt-8">
              <div className=" col-span-2 flex flex-col gap-5 p-4 mt-7">
                <h1 className=" text-4xl text-gray-700 font-medium">
                  Unbeatable pricing
                </h1>
                <p>
                  We pioneered the concept of discount broking and price
                  transparency in India. Flat fees and no hidden charges.
                </p>
                <a className=" flex gap-2 mt-2 text-blue-600 hover:text-gray-600">
                  See pricing
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
              <div className="col-span-3 md:grid md:grid-cols-2 p-5 m-5">
                <div className=" border border-r-0 border-gray-200  rounded">
                  <Card
                    title="₹0"
                    description="Free equity delivery and direct mutual funds"
                  />
                </div>
                <div className=" border border-gray-200  rounded">
                  <Card title="₹20" description="Intraday and F&O" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="varsity">
          <div className=" grid md:grid-cols-2 px-3 py-7 pb-8 gap-5  ">
            <div className=" col-span-1 flex justify-center md:float-none md:justify-normal">
              <div className=" size-3/4 flex items-center justify-center ml-5">
                <img src={varsity} />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-6 p-2 mr-14 text-gray-700">
              <h1 className=" text-2xl font-medium ">
                Free and open market education
              </h1>
              <div>
                <p className="mb-4">
                  Varsity, the largest online stock market education book in the
                  world covering everything from the basics to advanced trading.
                </p>
                <a className="flex gap-1 mt-2 text-blue-600 hover:text-gray-700">
                  Varsity
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

              <div>
                <p className="mr-4 mb-4">
                  TradingQ&A, the most active trading and investment community
                  in India for all your market related queries.
                </p>
                <a className="flex gap-1 mt-2 text-blue-600 hover:text-gray-700">
                  TradingQ&A
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
        </section>

        <section className="flex flex-col justify-center items-center gap-6 text-gray-700 my-20 text-center">
          <div>
            <h1 className="text-4xl font-semibold">Open a Zerodha account</h1>
          </div>
          <div>
            <p className=" text-lg text-stone-500">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
          </div>
          <div>
            <button className="py-2 px-7 rounded bg-blue-500  hover:bg-gray-800 text-slate-50 cursor-pointer font-semibold text-xl">
              Sign up now
            </button>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default Homepage;
