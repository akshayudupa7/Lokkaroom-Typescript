import { Container, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
export default function Gofooter() {
  return (
    <div
      style={{
        backgroundColor: "rgba(18, 18, 18, 1) !important",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <Container>
        <div style={{ marginBottom: "40px" }}>
          <Link href="/">
            <Image
              src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
              width={140}
              height={60}
              alt='this is image'
            />
          </Link>
        </div>
        <Stack spacing={4}>
          <Typography variant="h4" sx={{ color: "orange" }}>
            Lokkaroom®, A TMA Sport product
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            Unlock more action, more unforgettable moments and more rewards.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            The world of fan participation is changing. Sport organisations,
            clubs and athletes on Lokkaroom acknowledge that their fans desire
            and deserve a more meaningful and rewarding digital experience that
            takes participation to a new level.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            By using Lokkaroom, you agree to collect, trade and play responsibly
            and respectfully towards all other users, clubs and athletes. View
            our <Link href="#" style={{color:"#F8BB5A"}}>full Terms and Conditions </Link>, our <Link  href="#" style={{color:"#F8BB5A"}}>Cookie Policy </Link>  and  <Link href="#"  style={{color:"#F8BB5A"}}> Privacy Policy</Link>.
          </Typography>
        </Stack> 
        <Stack direction="row" spacing={4} sx={{ marginTop: 4 }}>
          <Image
            src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
            width={140}
            height={60}
            alt="this is image"
          />
          <Typography variant="h5" style={{ color: "#fff" }}>
            Lokkaroom® <br />
            powered by Hedera
          </Typography>
        </Stack>
      </Container>
    </div>
  );
}
