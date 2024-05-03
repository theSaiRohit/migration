import Image from "next/image";
import React from "react";

const SectionContent = ({ heading, title, imageSrc, sectionText, textDisplay = true }) => {
  return (
    <div className="sectionContent">
      <div className="sectionHeader">
        <div className="sectionTitle">
          <h3>{title}</h3>
        </div>
        <div className="imgBg">
          <div className="imgText">{heading}</div>
          <div>
            <div className="buttonCard">
              <div className="linkText">Lorem Ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionImg">
        <Image src={imageSrc} alt={imageSrc} height="100" width="100" sizes="100%" />
      </div>
      <div className="sectionText">
        <p style={{ lineHeight: "1.5" }} dangerouslySetInnerHTML={{ __html: sectionText }}></p>
      </div>
    </div>
  );
};

export default SectionContent;
