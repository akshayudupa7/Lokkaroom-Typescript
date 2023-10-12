"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useState } from "react";
import { Box } from "@mui/material";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineMinus } from "react-icons/ai";
import Image from "next/image";
import Accord_A from "@/component/Accord1";
import Accord_B from "@/component/Accord2";
import "./Bar.css";
export default function BasicAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Accordion
        sx={{ color: "#fff", backgroundColor: "black", width: "90vw" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ lineHeight: "3rem" }}>
            <Link href="#" style={{ textDecoration: "none", color: "#fff" }}>
              <Image
                src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                width={140}
                height={70}
                alt="this is image"
              />
            </Link>
          </Typography>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleExpandClick}
            sx={{
              fontSize: 40,
              "&.Mui-expanded": {
                minHeight: 50,
                maxHeight: 50,
                "&:hover": { color: "orange" },
              },
            }}
          >
            {expanded == true ? (
              <CgMenuLeft
                sx={{ minHeight: "0px", "&:hover": { color: "orange" } }}
              />
            ) : (
              <AiOutlineMinus
                sx={{ minHeight: 0, "&:hover": { color: "orange" } }}
              />
            )}
          </AccordionSummary>
        </Box>
        <AccordionDetails sx={{ marginTop: 1 }}>
          <Typography>
            <Link href="#" className="Nav_Data">
              Find a Lokkaroom
            </Link>
          </Typography>
          <Typography>
            <Accord_A />
          </Typography>
          <Typography>
            <Accord_B />
          </Typography>
          <Typography>
            <Link href="#" className="Nav_Data">
              Go App
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}