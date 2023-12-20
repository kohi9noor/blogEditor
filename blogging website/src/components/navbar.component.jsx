import { useState } from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} alt="" className="w-full" />
      </Link>

      <div
        onClick={() => setSearchBoxVisibility((curr) => !curr)}
        className={
          "md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto absolute pg-4 py-4 px-[5vw] bg-white w-full left-0 top-full mt-0.5 border-b border-grey " +
          (searchBoxVisibility ? "show" : "hide")
        }
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto bg-grey placeholder:text-dark-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full md:pl-12"
        />
        <i className="fi fi-rr-search absolute right-[12%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button className="md:hidden bg-grey w-12 h-14 rounded-full flex items-center justify-center">
          <i className="fi fi-rr-search text-xl "></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
