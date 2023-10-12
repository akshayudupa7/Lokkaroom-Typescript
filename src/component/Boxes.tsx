import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import Link from "next/link";

export default function Boxes() {
  return (
    <div style={{ marginTop: 80, marginBottom: 80 }}>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                width: "50%",
                height: 180,
                backgroundSize: "100% 100%",
                backgroundImage:
                  'linear-gradient(to bottom, rgba(219, 199, 92, 0.83), rgba(219, 199, 92, 0.80)), url("https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fvotes-mk-breakers.jpg&w=1920&q=75")',
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
                    height: 180,
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  VOTES
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: 180,
                backgroundSize: "100% 100%",
                backgroundImage:
                  'linear-gradient(to bottom, rgba(219, 199, 92, 0.83), rgba(219, 199, 92, 0.80)), url("https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fcontact-us-v2.jpg&w=1920&q=75")',
              }}
            >
              <Link href="/goapp/contact" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    height: 180,
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  CONTACT US
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                width: "50%",
                height: 180,
                backgroundSize: "100% 100%",
                backgroundImage:
                  'linear-gradient(to bottom, rgba(219, 199, 92, 0.83), rgba(219, 199, 92, 0.80)), url("https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fabout-us.jpg&w=1920&q=75")',
              }}
            >
              <Link href="/goapp/about" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    height: 180,
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  ABOUT US
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: 180,
                backgroundSize: "100% 100%",
                border: "3px solid #fff",
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.603), rgba(0, 0, 0, 0.639)), url("https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Ffaq.jpg&w=1920&q=75")',
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
                    height: 180,
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  FAQ
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
