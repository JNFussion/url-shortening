import React from "react";
import Logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between py-10 px-20">
      <div className="flex gap-10">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <ul className="flex gap-5 text-grayish-violet">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <a href="#" className="text-grayish-violet">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="btn full">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
