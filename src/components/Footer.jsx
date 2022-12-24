/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/footerstyle.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer" data-aos="fade-up" data-aos-delay="500">
        <img
          src="https://ahmadhassan7.github.io/SpaceX/img/logo.svg"
          alt="Logo"
          className="logo"
        />
        <nav className="footer-nav">
          <ul className="list">
            <li className="item">
              <a href="#" className="item-link">
                Twitter
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Youtube
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Instagram
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Flickr
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                LinkedIn
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Privacy
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Policy
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer-text">
          For additional questions please contact{" "}
          <a className="footer-link" href="#">
            SpaceX
          </a>
        </p>
        <a href="#" className="footer-button">
          Contact
        </a>
      </footer>
    </div>
  );
};

export default Footer;
