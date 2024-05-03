import React from "react";
import image from "../../assets/images/photography.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="heroContent">
      <div className="textContent">
        <div className="smallTopText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        <h2 className="typed" style={{ padding: "0", margin: "0" }}>
          From Sed ut perspiciatis to
        </h2>
        <h2 className="typed" style={{ padding: "0", margin: "0" }}>
          unde omnis istenatus
        </h2>
        <h2 className="typed" style={{ paddingTop: "0", marginTop: "0" }}>
          error sit voluptatem
        </h2>
        <div className="smallTopText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </div>
      <div className="imageContent">
        <Image src={image.src} height="100" width="100" sizes="100%"></Image>
      </div>
    </div>
  );
};

export default Banner;
