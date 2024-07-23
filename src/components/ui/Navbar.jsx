import image from "../../assets/zero.png";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-5 shadow-sm ">
      <div className=" ">
        <img src={image} alt="logo" className="w-21 h-10" />
      </div>
      <div className="w-1/2 flex justify-around  ">
        <ul className=" text-gray-600 flex gap-10 md:ml-8 items-center ">
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
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      </div>
    </nav>
  );
};

export default Navbar;
