import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  logo,
  logoWidth: "20vmax",
  burgerColor: "crimson",
  navColor1: "white",
  logoHoverSize: "10px",
  burgerColorHover: "#900",
  logoHoverColor: "crimson",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColorHover: "crimson",
  cartIconColorHover: "crimson",
  profileIconColorHover: "crimson",
  searchIconMargin: "0.5vmax",
  cartIconMargin: "1vmax",
  profileIconMargin: "0.5vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
