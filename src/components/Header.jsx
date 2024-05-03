import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import logoImage from "../assets/images/logo.png";
import { theme } from "@/theme";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const isLessLaptop = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div className="sticky-header">
      <Container maxWidth="xl">
        <header>
          <div className="header">
            <div className="header-content">
              <div className="logo">
                <Link href="/" className="img-container">
                  <Image src={logoImage.src} alt="LOGO" className="header-logo" height="100" width="100" sizes="100%" />
                </Link>
              </div>
              {!isLessLaptop && (
                <div className="c-select">
                  <div className="c-select">Loremips</div>
                </div>
              )}
              {!isLessLaptop && (
                <div className="slogan-text">
                  Lorem ipsum, <span className="red-text">dolor sit amet !</span>
                </div>
              )}
              <div className="header-right-wrap">
                <div>
                  <button className="header-btn">Loremips </button>
                </div>
                <div style={{ color: "black" }} className="lorem-font">
                  Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
