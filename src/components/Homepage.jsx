import Navbar from "./ui/Navbar";
import zerodha from "../assets/ZerodhaLogo.png";
import landing from "../assets/landing.png";
import broker from "../assets/largest-broker.svg";
import presslogo from "../assets/press-logos.png";
import ecosytem from "../assets/ecosystem.png";
import varsity from "../assets/varsity.png";

import Card from "./ui/Card";

const Homepage = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <section className="landing  flex flex-col justify-center items-center mb-28">
          <div className="w-2/3 md:w-3/6 h-fit md:m-10 ">
            <img src={landing}></img>
          </div>
          <div className=" flex text-center mt-4">
            <h1 className=" text-bold text-5xl font-semibold text-gray-700 mb-3 ">
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

        <section className=" md:px-10 py-14">
          <div className="grid grid-flow-row md:grid md:grid-cols-7 gap-5 p-2">
            <div className="flex flex-col col-span-3  gap-7 ml-7 md:ml-0">
              <div>
                <h1 className=" font-semibold text-4xl text-gray-600 py-1 mb-4">
                  Trust with confidence
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">
                  Customer-first always
                </h1>
                <p>
                  That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                  crores worth of equity investments
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">
                  No spam or gimmicks
                </h1>
                <p>
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">
                  The Zerodha universe
                </h1>
                <p>
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className=" font-medium text-xl text-gray-500">
                  Do better with money
                </h1>
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
            <button className="py-2 px-8 rounded bg-blue-500 hover:bg-gray-800 text-slate-50 cursor-pointer font-semibold text-xl">
              Sign up now
            </button>
          </div>
        </section>
      </main>

      <footer className=" bg-zinc-50">
        <section className="grid md:grid-cols-4 gap-6 md:gap-4 p-8">
          <div className="logo flex flex-col gap-5">
            <div className="flex justify-center md:flex-none md:justify-normal">
              <img src={zerodha} className="size-2/3 h-fit mt-1" />
            </div>

            <p className=" text-sm text-gray-600 flex justify-center md:flex-none">
              © 2010 - 2024, Zerodha Broking Ltd.All rights reserved.
            </p>

            <div className="flex flex-row gap-4 ml-0 text-gray-600 justify-center md:justify-normal">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook bg-gray-600 "
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a></a>
            </div>
          </div>
          <div className="company text-gray-600 flex flex-col items-center md:flex-none md:items-start">
            <h1 className="text-2xl md:text-xl font-medium mb-4 ">Company</h1>
            <div className="foot flex flex-col gap-2 font-medium items-center md:items-start">
              <h1>About</h1>
              <h1>Products </h1>
              <h1>Pricing </h1>
              <h1>Referral programme </h1>
              <h1>Careers</h1>
              <h1>Zerodha.tech</h1>
              <h1>Press & media </h1>
              <h1>Zerodha Cares (CSR)</h1>
            </div>
          </div>
          <div className="Support text-gray-600 flex flex-col items-center md:flex-none md:items-start">
            <h1 className="text-2xl md:text-xl font-medium mb-4 ">Support</h1>
            <div className="foot flex flex-col gap-2 font-medium items-center md:items-start">
              <h1>Contact us</h1>
              <h1>Support portal </h1>
              <h1>Z-Connect blog </h1>
              <h1>List of charges </h1>
              <h1>Download & resources</h1>
              <h1>Videos</h1>
              <h1>Market overview </h1>
              <h1>How to file a complaint</h1>
              <h1>Status of your complaint</h1>
            </div>
          </div>
          <div className="account text-gray-600 flex flex-col items-center md:flex-none md:items-start">
            <h1 className="text-2xl md:text-xl font-medium mb-4 ">Account</h1>
            <div className="foot flex flex-col gap-2 font-medium items-center md:items-start">
              <h1>Open an account</h1>
              <h1>Fund transfer</h1>
            </div>
          </div>
        </section>

        <section className="foot2 flex flex-col px-7 text-gray-400 gap-4 text-xs ">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <a>complaints@zerodha.com</a>, for DP related to <a>dp@zerodha.com</a>.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a>SEBI SCORES</a>: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a>Smart Online Dispute Resolution</a> | <a>Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a>create a ticket here.</a>
          </p>
          <div className="foot flex justify-center  items-center flex-wrap gap-4 pb-6 pt-2 font-medium">
            <h1>NSE</h1>
            <h1>BSE</h1>
            <h1>MCX</h1>
            <h1>Terms and Conditions</h1>
            <h1>Policies & procedures </h1>
            <h1>Privacy policy </h1>
            <h1>Disclosure </h1>
            <h1>For investor's attention </h1>
            <h1>Investor charter</h1>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Homepage;
