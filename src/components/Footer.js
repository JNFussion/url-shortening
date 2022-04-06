import React from "react";
import Logo from "../assets/images/logo-white.svg";
import iFacebook from "../assets/images/icon-facebook.svg";
import iTwitter from "../assets/images/icon-twitter.svg";
import iPinterest from "../assets/images/icon-pinterest.svg";
import iInstagram from "../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="flex flex-wrap justify-between  px-20 py-10 text-white bg-very-dark-violet">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-wrap gap-10">
        <section>
          <h4 className="my-2 font-bold">Features</h4>
          <ul className="text-grayish-violet">
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </section>
        <section>
          <h4 className="my-2 font-bold">Resources</h4>
          <ul className="text-grayish-violet">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </section>
        <section>
          <h4 className="my-2 font-bold">Company</h4>
          <ul className="text-grayish-violet">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex gap-5">
            <li>
              <a href="#">
                <img src={iFacebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iTwitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iPinterest} alt="pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iInstagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
