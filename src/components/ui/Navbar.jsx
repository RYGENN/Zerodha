import image from "../../assets/ZerodhaLogo.png";


const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-6 shadow-sm ">
      <div className="w-1/4 ">
        <img src={image} alt="logo" className="w-1/2 pl-3" />
      </div>
      <div className="navlinks w-2/3">
        <ul className=" text-neutral-500 flex  justify-end gap-4 md:gap-8 lg:gap-10  items-center">
          <li>
            <button className="hover:text-sky-700 ">Signup</button>
          </li>
          <li>
            <button className="hover:text-sky-700">About</button>
          </li>
          <li>
            <button className="hover:text-sky-700">Products</button>
          </li>
          <li>
            <button className="hover:text-sky-700">Pricing</button>
          </li>
          <li>
            <button className="hover:text-sky-700">Support</button>
          </li>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          className="size-6 cursor-pointer"
          
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          
        </svg>
        </ul>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
