'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { AiOutlineDown } from 'react-icons/ai';
import Link from 'next/link';
import './Dropdown.css';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
      >
        <Link href="/join" className="nav-link">
          Create Your Lokkaroom&nbsp;
          <AiOutlineDown />
        </Link>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          '.MuiMenu-paper': {
            backgroundColor: 'black',
            color: 'white',
            border: '4px solid orange',
            width: 250,
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ '&:hover': { backgroundColor: 'orange', margin: '0px 10px' } }}
        >
          Athletes
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ '&:hover': { backgroundColor: 'orange', margin: '0px 10px' } }}
        >
          Clubs/Organizations
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ '&:hover': { backgroundColor: 'orange', margin: '0px 10px' } }}
        >
          Agents/Affiliates
        </MenuItem>
      </Menu>
    </div>
  );
}
