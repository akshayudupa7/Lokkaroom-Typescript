import { Box, Typography,Stack, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Box sx={{width:{sm:"100%",md:"50%"},display:"flex",flexDirection:"column",margin:"auto",marginTop:4, paddingBottom:10}}>
       <Box position="relative">
        <Image
          src="https://sport.lokkaroom.com/_next/image?url=%2Fimages%2Fabout-us-banner.jpg&w=1920&q=75"
          width={300}
          height={300}
          layout="responsive"
          alt="this is image"
        />
      </Box>
      
      <Box>
        <Container>
        <Typography variant="h6" sx={{color:"#fff",marginTop:4,marginBottom:6,fontWeight:700,fontSize:"1.1rem"}}>
          {" "}
          Unlock more action, more unforgettable moments and more rewards.
        </Typography>
        <Typography variant="body1"  sx={{color:"#fff",fontSize:"1.1rem"}}>
          The world of fan participation is changing. Clubs, athletes and
          organisations on Lokkaroom acknowledge that their fans desire and
          deserve a more meaningful and rewarding digital experience that takes
          participation to a new level. 
        </Typography>
          <Typography variant="body1"  sx={{color:"#fff",marginTop:4,fontSize:"1.1rem"}}>  
          We adopt the best of Web 3.0 technology
          to make the exciting new opportunities it presents accessible to
          everyone, supporting the delivery of entertainment, engagement and
          value to fans and participants of all sports.
          </Typography>
          <Typography variant="body1"  sx={{color:"#fff",marginTop:4,fontSize:"1.1rem"}}>  
           Built on Hedera
          Hashgraph, a carbon negative 3rd generation public ledger, for the
          highest-grade of security possible (ABFT), blazing-fast transaction
          speeds and incredibly low bandwidth consumption.
          </Typography>
          <Typography variant="body1"  sx={{color:"#fff",marginTop:4,fontSize:"1.1rem"}}>
           Partner tokens on
          Lokkaroom are FIAT-backed. They are not a cryptocurrency which means
          the token value does not fluctuate. A token worth 20 pence today, will
          always have a value of 20 pence. We believe this makes participating
          simple, fair and secure so that you can create and collect more
          remarkable moments in sport. 
          </Typography>
          <Typography variant="body1"  sx={{color:"#fff",marginTop:4,fontSize:"1.1rem"}}>
          Build your own <Link href="#" style={{color:"#fff"}}> Lokkaroom</Link>.
        </Typography>
        </Container>
      </Box>
    </Box>
  );
}
