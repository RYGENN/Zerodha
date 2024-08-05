import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import landingSignup from "../assets/landingSignup.png";

const Signpage = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main className="signPage">
        <div className="w-full grid grid-cols-5 gap-7 mt-28 ml-7">
            <div className=" flex justify-center  ml-5 col-span-3">
            <div className=" w-4/5 ">
            <img src={landingSignup}/>
            </div>
                
            </div>
            <div className=" p-6 col-span-2 flex flex-col gap-7">
                <h1 className="text-4xl font-medium text-gray-500">Signup now</h1>
                <p>Or track your existing application.</p>
                <div className=" mb-10  ">
                   <div className=" absolute">
                   <button className=" p-3 rounded-l outline outline-1 outline-neutral-300 bg-neutral-50 ">+91</button>
                    <input type="text" placeholder="" className=" p-3 outline rounded-r outline-1 outline-neutral-300 shadow-sm">
                    </input>
                   </div>
                    
                    <h1 className=" text-xs relative -mt-2 ml-3 bg-white w-fit h-fit px-1 bg-opacity-70 font-medium text-neutral-500">Mobile number</h1>
                    
                </div>
                <h1 className=" text-sm text-neutral-500">You will receive an OTP on your number</h1>
                <button className=" px-2 py-2 text-white  bg-blue-500 hover:bg-gray-800 rounded font-medium w-1/3">
            Continue
          </button>
          <p className=" text-blue-600 cursor-pointer" >Want to open an NRI account?</p>
            </div>

        </div>
        <section className=" text-xs text-neutral-500 mb-28">
            <div className=" px-32 text-center flex flex-col gap-5 my-10">
                <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <span>this article</span> to know more</p>
                <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <span>offline forms</span>. For help,<span>click here</span>.</p>
            </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Signpage;
