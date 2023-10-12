import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import "./card.css";
import Link from "next/link";
import Image from "next/image";

// Define the type for 'val' prop
interface CardData {
  images: string;
  title: string;
  sports: string;
}

interface ActionAreaCardProps {
  val: CardData;
  key: Number; // Change the type if 'key' is of a different type
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({ val }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Link href="#" className="cardactions">
        <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            src={val.images}
            layout="responsive"
            width={100}
            height={100}
            alt="This is an image"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            gap: "10px",
            height: "100%",
            width: "100%",
            background: "rgb(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "&:hover": {
              background: "rgb(0,0,0,0.3)",
            },
          }}
        >
          <Box
            sx={{
              width: "96%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              "&:hover": {
                border: "7px solid #fff",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}
            >
              /Live/
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "1.2em",
              }}
            >
              {val.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 700 }}
            >
              {val.sports}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
};

export default ActionAreaCard;
