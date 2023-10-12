import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";
import { Stack, Hidden } from "@mui/material";
import SideDraw from "./SideDraw";

import BottomDraw from "./BottomDraw";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "rgb(18, 18, 18)", zIndex: 1999 }}
      >
        <Toolbar>
          <Hidden mdUp>
            <SideDraw />
          </Hidden>
          <Hidden mdDown>
            <BottomDraw />
          </Hidden>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "20px",
            }}
          >
            <div>
              <Link href="/">
                <Hidden mdUp>
                  <Image
                    src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                    width={120}
                    height={50}
                    className="logo"
                    alt="this is image"
                  />
                </Hidden>
                <Hidden mdDown>
                  <Image
                    src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                    width={180}
                    height={80}
                    className="logo"
                    alt="this is image"
                  />
                </Hidden>
              </Link>
            </div>
            <Hidden mdDown>
              <Stack direction="row" spacing={1} sx={{ marginTop: 4 }}>
                <Box>
                  <Button
                    sx={{
                      color: "rgb(254, 254, 254)",
                      border: "2px solid rgb(254, 254, 254)",
                      minWidth: "126px",
                      height: "36px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      background: "transperent",
                      marginRight: "10px",
                      textTransform: "none",
                      "&:hover": {
                        color: "rgb(248, 187, 90)",
                        border: "2px solid rgb(248, 187, 90)",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                      backgroundColor: "rgb(248, 187, 90)",
                      minWidth: "126px",
                      height: "36px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginRight: "10px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgb(243, 153, 10)",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Stack>
            </Hidden>
            <Hidden mdUp>
              <Stack direction="row" sx={{ marginTop: 3 }}>
                <Box>
                  <Button
                    sx={{
                      color: "rgb(254, 254, 254)",
                      border: "2px solid rgb(254, 254, 254)",
                      minWidth: "86px",
                      height: "26px",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      background: "transperent",
                      marginRight: "10px",
                      textTransform: "none",
                      "&:hover": {
                        color: "rgb(248, 187, 90)",
                        border: "2px solid rgb(248, 187, 90)",
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "rgba(0, 0, 0, 0.87)",
                      backgroundColor: "rgb(248, 187, 90)",
                      minWidth: "86px",
                      height: "26px",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      marginRight: "10px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgb(243, 153, 10)",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Stack>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
