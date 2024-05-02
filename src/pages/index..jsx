import Slider from "../components/landing/Slider";
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";

import DescriptionCard from "../components/landing/DescriptionCard";
import Card1Image from "../assets/images/photography.png";
import Image from "next/image";

const LandingPage = () => {
  const cardImages = [Card1Image, Card1Image, Card1Image, Card1Image, Card1Image, Card1Image];
  const heading = "Lorem ipsum dolor sit";
  const desp = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

  const router = useRouter();
  return (
    <div>
      <Slider />
      <Container maxWidth="xl">
        <div className="description">
          <h1>Lorem ipsum</h1>
        </div>
        <Grid container spacing={8} maxWidth="xl">
          {cardImages.map((cardImage, index) => (
            <Grid key={index} item={12} md={6} lg={4}>
              <DescriptionCard cardImage={cardImage} heading={heading} description={desp} linkTo="/" />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <br />
        <div className="hyperlink-section">
          <div className="hyperlink-content">
            <h1 style={{ textAlign: "center", fontSize: "28px" }}> Lorem ipsum dolor sit amet, consectetur</h1>
            <p style={{ fontSize: "16px" }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
              minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur.
            </p>
            <button
              onClick={() => {
                navigate("/Page3");
              }}
              className="call-btn mt-2"
            >
              Lorem ipsum dolor
            </button>
          </div>
          <div className="hyperlink-img">
            <img src={Card1Image.src} alt="img"></img>
          </div>
        </div>
      </Container>
      <div className="hyperlink-section-footer"></div>
    </div>
  );
};

export default LandingPage;
