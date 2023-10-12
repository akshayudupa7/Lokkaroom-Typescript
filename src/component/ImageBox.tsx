import React from 'react';
import { Grid, Box, Typography, Stack } from "@mui/material";
import Link from 'next/link';

export default function ImageBox() {
  return (
    <Grid container spacing={12}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: 180,
            maxHeight: "100%",
            minHeight: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: `url('https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fads%2Fadvert.jpg&w=1920&q=75')`,
          }}
        >
          <Link href="#" style={{ textDecoration: "none" }}>
            {/* Add content or further components here */}
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: 180,
            maxHeight: "100%",
            minHeight: "100%",
            backgroundSize: "100% 100%",
            backgroundImage: `url(https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fbanners%2Fad-2.png&w=1920&q=75)`,
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
                paddingTop: "50px",
                color: "#fff",
              }}
            >
              {/* Add text content here */}
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
