import { Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";

const DescriptionCard = ({ cardImage, heading, description, linkTo }) => {
  return (
    <Card className="description-card">
      <CardMedia component="img" alt={heading} height={140} image={cardImage.src} />
      <CardContent className="description-text">
        <h5>{heading}</h5>
        <p>{description}</p>
        <Link href={linkTo} className="read-more-container">
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default DescriptionCard;
