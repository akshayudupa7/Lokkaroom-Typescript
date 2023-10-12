import {
    Grid,
    Box,
    Card,
    Paper,
    InputBase,
    Divider,
    IconButton,

    Hidden,
    Container,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import React from "react";
  import Image from "next/image";
  import DirectionsIcon from "@mui/icons-material/Directions";
  import "./ScrollAboutCarousel.css";
  import { FaSearch } from "react-icons/fa";
  
  const data = [
    {
      src: "https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Flogo-square.png&w=96&q=75",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/ldpp91682003842603.jpg",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/dc1457c4-7c9b-41c3-8b8c-f15559cc6153.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/k5v8n1686644567737.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/84bde9e0-295d-4369-853e-2ce09f93fb51.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/gt4lr1678900881232.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/4jnph1687190012574.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/do7731665942336493.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/pekrl1677078153351.png",
    },
    {
      src: "https://storage.googleapis.com/prod-lokkaroom/lfi2y1679871885417.png",
    },
  ];
  
  export default function ScrollCarousel() {
    return (
      <>
        <Hidden mdDown>
          <Container>
            <div
              style={{ backgroundColor: "#fff", paddingTop: 4 }}
            >
              <Grid container spacing={8} sx={{ height: "auto", paddingLeft: 2 }}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      py: 1,
                      overflow: "auto",
                      width: "100%",
                      scrollSnapType: "none",
                      "& > *": {
                        scrollSnapAlign: "center",
                      },
                    }}
                  >
                    {data.map((item,index) => (
                      <Box key={index} >
                        <Image src={item.src} width={70} height={70} alt="this is image" />
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      paddingBottom: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <Paper
                      component="form"
                      sx={{
                        width: "100%",
                        border: "3px solid #B1B1B1",
                        boxShadow: "none !important",
                      }}
                    >
                      <IconButton
                        type="button"
                        sx={{ p: "10px", fontWeight: 700, fontSize: "18px" }}
                        aria-label="search"
                      >
                        <FaSearch
                          style={{
                            fontSize: "23px",
                            fontWeight: 700,
                            color: "black",
                          }}
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
                        placeholder="Find a Club or Athlete"
                        inputProps={{
                          "aria-label": "Search Lokkaroom",
                          sx: {
                            "&::placeholder": {
                              color: "red",
                              opacity: 1,
                            },
                          },
                        }}
                      />
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Hidden>
        <Hidden mdUp>
          <div style={{ backgroundColor: "rgb(18, 18, 18)" }}>
            <Grid container spacing={8} sx={{ height: "auto" }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                  
                    py: 1,
                    
                    overflow: "auto",
                    width: "100%",
                    backgroundColor: "#fff",
                    scrollSnapType: "none",
                    "& > *": {
                      scrollSnapAlign: "center",
                    },
                  }}
                >
                  
                  {data.map((item,index) => (
                    <Box key={index} sx={{paddingLeft:4}}>
                      <Image src={item.src} width={60} height={60} alt='this is image' />
                    </Box>
                  ))}
                </Box>
              </Grid>
          
            </Grid>
          </div>
        </Hidden>
      </>
    );
  }