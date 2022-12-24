/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/navstyle.css";

const Header = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://ahmadhassan7.github.io/SpaceX/img/logo.svg"
        alt=""
      />
      <nav>
        <ul>
          <li>
            <a className="mid-nav" href="#">
              Falcon9
            </a>
          </li>
          <li>
            <a className="mid-nav" href="#">
              Falcon Heavy
            </a>
          </li>
          <li>
            <a className="mid-nav" href="#">
              Dragon
            </a>
          </li>
          <li>
            <a className="mid-nav" href="#">
              Updates
            </a>
          </li>
        </ul>
      </nav>
      <nav style={{ marginRight: "2rem" }}>
        <ul>
          <li>
            <a className="right-nav" href="#">
              About
            </a>
          </li>
          <li>
            <a className="right-nav" href="#">
              Gallery
            </a>
          </li>
          <li>
            <a className="right-nav" href="#">
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
