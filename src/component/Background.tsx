import { Box, Typography, Stack, Container, Hidden } from "@mui/material";
import React from "react";

export default function Background() {
  return (
    <Box
      sx={{
        background: `url("https://lokkaroom.com/hubfs/Find%20a%20Lokkaroom%20Banner%20Image.png")`,
        height: "60vh",
        backgroundSize: "cover !important",
        backgroundPosition: "center center !important",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          <Hidden smUp>
            <Typography
              variant="h1"
              component="h2"
              sx={{ color: "#fff", fontWeight: "bold", fontSize: "38px" }}
            >
              Join a Lokkaroom
            </Typography>
          </Hidden>
          <Hidden smDown>
            <Typography
              variant="h1"
              component="h2"
              sx={{ color: "#fff", fontWeight: "bold", fontSize: "96px" }}
            >
              Join a Lokkaroom
            </Typography>
          </Hidden>

          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Get closer to the action with BTS content, merchandise, and rewards
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
