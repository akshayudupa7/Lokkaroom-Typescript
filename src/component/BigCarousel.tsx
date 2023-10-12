import * as React from "react";
import Box from "@mui/joy/Box";
import Image from "next/image";

const data = [
  {
    src: "https://sport.lokkaroom.com/images/trending/banner-1.png",
  },
  {
    src: "https://sport.lokkaroom.com/images/trending/banner-2.png",
  },
  {
    src: "https://sport.lokkaroom.com/images/trending/banner-3.png",
  },
  {
    src: "https://sport.lokkaroom.com/images/trending/banner-4.png",
  },
  {
    src: "https://sport.lokkaroom.com/images/giants.jpg",
  },
  {
    src: "https://sport.lokkaroom.com/images/skouted.jpg",
  },
];

export default function BigCarousel() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Box
        sx={{
          display: "flex",
          py: 1,
          overflow: "auto",
          width: "100%",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item,index) => (
          <Box  key={index}>
            <Image src={item.src} width={500} height={300}  alt="this is image"/>
          </Box>
        ))}
      </Box>
    </div>
  );
}
