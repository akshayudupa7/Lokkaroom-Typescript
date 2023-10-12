import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

interface ClubProps {
  val: {
    images: string;
    title: string;
    para: string;
  };
}


const ClubButton = {
  fontWeight: "bolder !important",
  background: "rgb(255,153,40) !important",
  border: "4px solid #fff !important",
  color: "rgba(20, 18, 18, 1) !important",
  padding: "10px 36px !important",
  width: "70% !important",
  fontSize: "16px !important",
};

export default function Club( {val} : ClubProps) {
  return (
    <>
      <Grid item xs={12} md={4} sx={{ marginTop: 10 }}>
        <Container>
          <Box sx={{ position: "relative" }}>
            <Image src={val.images} layout="responsive" width={350} height={350} alt="this is image" />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#ff9928",
              marginTop: 10,
              marginBottom: 4,
              fontWeight: "bold",
            }}
          >
            {val.title}
          </Typography>
          <Typography sx={{ color: "#fff", marginBottom: 4 }}>
            {val.para}
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            <Button sx={ClubButton}>Join Lokkaroom</Button>
          </Box>
        </Container>
      </Grid>
    </>
  );
}
