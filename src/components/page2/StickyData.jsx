import Image from "next/image";
import { useRouter } from "next/router";

const StickyData = ({ images, headings, links }) => {
  const router = useRouter();
  return (
    <div className="stickyData">
      <div className="dataHeading" style={{ borderBottom: "1px solid #ccc" }}>
        You Might Be Interested
      </div>

      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="articleCard"
          onClick={() => {
            router.push(links[index]);
          }}
          style={{ textDecoration: "none", cursor: "pointer", borderBottom: "1px solid #ccc" }}
        >
          <Image src={images[index]} alt={headings[index]} height="100" width="100" sizes="100%" />
          <span style={{ marginLeft: "10px", color: "black" }}>{headings[index]}</span>
        </div>
      ))}
    </div>
  );
};

export default StickyData;
