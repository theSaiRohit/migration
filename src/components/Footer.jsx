import React from "react";
import { Container, Modal, IconButton } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import CloseIcon from "@mui/icons-material/Close";
import logoImage from "../assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/hooks/AppContext";

const Footer = () => {
  const { contactState, toggleState } = useAppContext();
  return (
    <footer>
      <Container maxWidth="xl">
        <div className="footer-content">
          <div className="info-section">
            <div className="logo">
              <Link href="/" className="img-container">
                <Image src={logoImage.src} alt="LOGO" className="footer-logo" height="100" width="100" sizes="100%" />
              </Link>
            </div>
            <div className="contact">
              <SocialIcon url="https://x.com" />
              <SocialIcon url="https://www.instagram.com" bgColor="black" />
              <SocialIcon url="https://www.facebook.com" bgColor="black" />
            </div>
          </div>
          <div className="links-section">
            <div className="links">
              <div className="company-links">
                <h6>
                  <a style={{ color: "black" }} href="/Page3">
                    Lorem ipsum
                  </a>
                </h6>
              </div>
              <div className="company-links" onClick={toggleState}>
                <h6>Lorem ipsum</h6>
              </div>
              <div className="company-links">
                <h6>Lorem ipsum</h6>
              </div>
              <div className="company-links">
                <h6>Lorem ipsum</h6>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </Container>

      <Modal open={contactState} onClose={toggleState} disablePortal>
        <div className="modal-content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{ fontWeight: "bold" }}>Lorem ipsum</h2>
            <div style={{ textAlign: "right" }}>
              <IconButton onClick={toggleState} size="small" color="inherit">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
