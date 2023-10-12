import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Hidden, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown1 from './Dropdown1'
import Dropdown2 from './Dropdown2'
import Bar from "./Bar"
import './Header.css';

// Define the type for the props, if needed
interface HeaderProps {
  // You can specify the props here
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" sx={{ paddingTop: 4, backgroundColor: 'black' }}>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Hidden mdDown>
                <Box sx={{ paddingBottom: 2 }}>
                  <Link href="/">
                    <Image
                      src="https://lokkaroom.com/hs-fs/hubfs/Landscape%20White150px-2.png?width=225&height=330&name=Landscape%20White150px-2.png"
                      width={140}
                      height={70}
                      alt="this is image"
                    />
                  </Link>
                </Box>
              </Hidden>
              <Box>
                <Hidden mdUp>
                  {/* Assuming <Bar /> is a valid component */}
                 <Bar/>
                </Hidden>
                <Stack direction="row" spacing={4}>
                  <Hidden mdDown>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ marginTop: '7px !important' }}
                    >
                      <Link href="/find-a-lokkaroom" className="nav-link">
                        Find a Lokkaroom
                      </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                      {/* Assuming <Dropdown1 /> is a valid component */}
                    <Dropdown1/>
                    </Typography>
                    <Typography variant="h6" component="div">
                      {/* Assuming <Dropdown2 /> is a valid component */}
                     <Dropdown2/>
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{ marginTop: '2px !important' }}
                    >
                      <Link href="/goapp" className="nav-link">
                        GO TO APP
                      </Link>
                    </Typography>
                  </Hidden>
                </Stack>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box></Box>
    </>
  );
};

export default Header;
