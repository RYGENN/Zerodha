import Navbar from "./ui/Navbar";
import landing from "../assets/landing.png";
import broker from "../assets/largest-broker.svg";
import presslogo from "../assets/press-logos.png";

const Homepage = () => {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>

      <main>
        <section className=" homepage  flex flex-col justify-center items-center mb-28">
          <div className=" w-3/6 h-fit m-10 ">
            <img src={landing}></img>
          </div>
          <div className=" mt-4">
            <h1 className=" text-bold text-5xl font-semibold text-gray-700 mb-3 ">Invest in everything</h1>
          </div>
          <div>
          <h1 className=" text-bold text-xl mb-10 ">Online platform to invest in stocks, derivatives, mutual funds, and more</h1>
          </div>
          <button className=" px-7 py-2 text-white  bg-blue-500 hover:bg-gray-800 rounded font-medium">Sign up now</button>
        </section>

        <section className="marketing ">
          <div className=" grid grid-cols-4 gap-6 p-5">
            <div className=" col-span-2 p-9 mr-9">
              <img src={broker}></img>
            </div>

            <div className=" col-span-2 flex flex-col p-6 ">
              <h1 className=" font-medium text-4xl text-gray-700 mb-6">Largest stock broker in India</h1>
              <p>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
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
              <img src={presslogo}/>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Homepage;