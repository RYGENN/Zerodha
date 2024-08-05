import image from "../../assets/ZerodhaLogo.png";
import console from "../../assets/console.svg";
import kite from "../../assets/kite.svg";
import coin from "../../assets/coin.svg";
import kiteconnect from "../../assets/kiteconnect.svg";
import varsityLogo from "../../assets/varsityLogo.png";
import tqna from "../../assets/tqna.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isTransformed, setIsTransformed] = useState(false);
  const navigate = useNavigate();


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // setIsTransformed(!isTransformed);
  };
 
  function goToPage (path){
     navigate(path)
  }
 

  return (
    <nav className="flex" >
      <div className="navbar w-full flex justify-between items-center p-6 ">
        <div className="w-1/4 ">
          <img src={image} alt="logo" className="w-1/2 pl-3 cursor-pointer" onClick={() => goToPage("/")} />
        </div>
        <div className="navlinks w-2/3">
          <ul className=" text-neutral-500 flex  justify-end gap-4 md:gap-8 lg:gap-10  items-center">
            <li>
              <button className="hover:text-sky-700" onClick={() =>goToPage('/signup')}>Signup</button>
            </li>
            <li>
              <button className="hover:text-sky-700" onClick={() =>goToPage("/about")}>About</button>
            </li>
            <li>
              <button className="hover:text-sky-700" onClick={() =>goToPage("/products")} >Products</button>
            </li>
            <li>
              <button className="hover:text-sky-700" onClick={() =>goToPage("/pricing")}>Pricing</button>
            </li>
            <li>
              <button className="hover:text-sky-700">Support</button>
            </li>
            <div className="svgChange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="size-6 cursor-pointer mr-5"
                onClick={() => toggleMenu()}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </ul>
        </div>
      </div>
      {menuVisible && (
        <div className="menubar shadow-md">
          <div className="h-full flex flex-col justify-center gap-5">
            <section className="menubarUp">
              <div className="w-full grid grid-cols-4  gap-9">
                <div className="flex flex-col justify-center items-center">
                  <img src={kite}/>
                  <h1>kite</h1>
                  <p>Trading platform</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={console} />
                  <h1>Console</h1>
                  <p>Backoffice</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={kiteconnect} />
                  <h1>kite Connect</h1>
                  <p>Trading APIs</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={coin} />
                  <h1>Coin</h1>
                  <p>Mutual funds</p>
                </div>
              </div>
            </section>
            <section className="menubarDown h-full bg-slate-50 ">
              <div className=" grid grid-cols-3  px-4 ml-4 bg ">
                <div className="flex flex-col gap-3 ">
                  <h1>Utilities</h1>
                  <p>Brokerage calculator</p>
                  <p>Margin calculator</p>
                  <p>Holiday Calendar</p>
                  <p>Markets</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <h1>Updates</h1>
                  <p>Z-Connect blog</p>
                  <p>Pulse News</p>
                  <p>Circulars / Bulletin</p>
                  <p>IPOs</p>
                </div>
                <div className="flex flex-col gap-5">
                  <h1>Education</h1>
                  <div className="flex gap-6  ">
                   <div className="cursor-pointer hover:text-blue-500">
                   <img src={varsityLogo}/>
                   <h2 className=" opacity-80">Varsity</h2>
                   </div> 
                    <div className="cursor-pointer hover:text-blue-500 ">
                    <img src={tqna}/>
                    <h2 className="mt-1 opacity-80">Trading Q&A</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      {isTransformed && (
        <div className="w-full svgChange absolute flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="27"
          height="30"
          viewBox="0 0 24 24"
          className="relative right-10 top-6 z-999 bg-white cursor-pointer "
          onClick={() => toggleMenu()}
        >
          <path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"></path>
        </svg>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
