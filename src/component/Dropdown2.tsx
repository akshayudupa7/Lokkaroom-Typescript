'use client'
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import "./Dropdown.css";

const Dropstyles = {
  backgroundColor: "black",
};
export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseOver={handleClick}
        sx={{display:"flex"}}
      >
        <Link href="/join" className="nav-link">
          Company&nbsp; <AiOutlineDown />
        </Link>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
         width:"100%",
          ".MuiMenu-paper": {
            backgroundColor: "black",
            color: "white",
            border: "4px solid orange",
             width:250,
            display: "flex",
           alignItems: "flex-end",
       
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            width:220,
            fontSize:"14px",
            display: "flex",
          justifyContent:"flex-end",
            "&:hover": { backgroundColor: "#ff9928", margin: "0px 10px" },
          }}
        >
          {" "}
          Contact Us
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            width:220,
            fontSize:"14px",
            display: "flex",
          justifyContent:"flex-end",
            "&:hover": { backgroundColor: "#ff9928", margin: "0px 10px" },
          }}
        >
          About Us
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            width:220,
            fontSize:"14px",
            display: "flex",
          justifyContent:"flex-end",
            "&:hover": { backgroundColor: "#ff9928", margin: "0px 10px" },
          }}
        >
          Water Cooler
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            width:220,
            fontSize:"14px",
            display: "flex",
          justifyContent:"flex-end",
            "&:hover": { backgroundColor: "#ff9928", margin: "0px 10px" },
          }}
        >
          Lokkaroom FAQs
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            width:220,
            fontSize:"14px",
            display: "flex",
          justifyContent:"flex-end",
            "&:hover": { backgroundColor: "#ff9928", margin: "0px 10px" },
          }}
        >
          TMA Sport
        </MenuItem>
      </Menu>
    </div>
  );
}







