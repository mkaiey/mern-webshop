import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <ReactNavbar
      logo={logo}
      logoWidth="20vmax"
      navColor1="white"
      burgerColor="crimson"
      burgerColorHover="#900"
      logoHoverColor="crimson"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Color="rgba(35, 35, 35,0.8)"
      link1ColorHover="#eb4034"
      link1Size="1.3vmax"
      link1Margin="1vmax"
      profileIcon={true}
      searchIcon={true}
      cartIcon={true}
      ProfileIconElement={FaUserAlt}
      SearchIconElement={RiSearchLine}
      CartIconElement={BiCartAlt}
      profileIconUrl="/login"
      profileIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="crimson"
      searchIconColor="rgba(35, 35, 35,0.8)"
      searchIconColorHover="crimson"
      cartIconColor="rgba(35, 35, 35,0.8)"
      cartIconColorHover="crimson"
      searchIconMargin="0.5vmax"
      cartIconMargin="1vmax"
      profileIconMargin="0.5vmax"
    />
  );
};

export default Header;
