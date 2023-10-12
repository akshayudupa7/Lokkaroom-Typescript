'use client'
import React, { useState } from "react";
import "./Carousels.css";
import Link from "next/link";
import {
  Grid,
  Typography,
  Box,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Grid container spacing={8} sx={{ marginTop: 4 }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#FEFEFE",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: 1,
              background: "#1D1D1D",
              textAlign: "center",
              position: "relative",
              left: 0,
              top: 4,
              padding: "4px 4px",
            }}
          >
            Trending on Lokkaroom
          </Typography>
        </Box>
        <div style={{ width: "100%", border: "4px solid #fff" }}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <Box>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-1.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-2.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-3.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-4.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-5.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-6.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ftrending%2Ftrending-banner-7.jpg&w=1920&q=75"
                  layout="responsive"
                  width={800}
                  height={400}
                  alt="this is image"
                />
              </SwiperSlide>
            </Box>
          </Swiper>
        </div>

        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "2px solid grey",
              marginTop: "10px",
            }}
          >
            <IconButton
              type="button"
              sx={{ p: "10px", fontWeight: 700, fontSize: "18px" }}
              aria-label="search"
            >
              <FaSearch
                style={{ fontSize: "23px", fontWeight: 700, color: "black" }}
              />
            </IconButton>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                paddingLeft: "14px",
                paddingRight: "14px",
                fontWeight: 700,
                fontSize: "18px",
              }}
              placeholder="Search Lokkaroom"
              inputProps={{
                "aria-label": "Search Lokkaroom",
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
            />
          </Paper>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", gap: "6%", marginTop: "24px" }}
      >
        <div style={{ flexBasis: "80%" }}>
          <Box
            sx={{
              marginBottom: "20px",
              height: 160,
              backgroundSize: "100% 100%",
              backgroundImage: `linear-gradient(to bottom,rgba(219, 199, 92, 0.83),rgba(219, 199, 92, 0.80)), url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fmarketplace.jpg&w=1920&q=75)`,
            }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  height: "30vh",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                MARKET PLACE
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              height: 160,
              backgroundSize: "100% 100%",
              backgroundImage: `linear-gradient(to bottom,rgba(219, 199, 92, 0.83),rgba(219, 199, 92, 0.80)), url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fwallet.jpg&w=1920&q=75)`,
            }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  height: "30vh",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                MY ACCOUNT
              </Typography>
            </Link>
          </Box>
        </div>
        <div style={{ flexBasis: "80%" }}>
          <Box
            sx={{
              height: 340,
              border: "3px solid #fff",
              backgroundSize: "100% 100%",
              backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.603), rgba(0, 0, 0, 0.639)), url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fcollectibles-2.jpg&w=1920&q=75)`,
            }}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  height: "60vh",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                COLLECTIBLES
              </Typography>
            </Link>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
