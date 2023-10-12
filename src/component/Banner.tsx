import React from 'react';
import './Banner.css';
import {
  Container,
  Typography,
  Stack,
  Button,
  Hidden,
} from '@mui/material';

export default function Banner() {
  return (
    <div className="cover">
      <Container>
        <Stack
          direction="column"
          spacing={4}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            height: '100vh',
            paddingBottom: '100px',
          }}
        >
          <Hidden mdUp>
            <Typography
              variant="h1"
              sx={{ fontSize: '48px' }}
              className="banner_heading"
            >
              UNLOCK THE ACTION
            </Typography>
          </Hidden>
          <Hidden mdDown>
            <Typography
              variant="h1"
              sx={{ fontSize: '96px' }}
              className="banner_heading"
            >
              UNLOCK THE ACTION
            </Typography>
          </Hidden>

          <Typography variant="h5" className="banner_para">
            Premium BTS Content, mobile tickets, exclusive <br />{' '}
            merchandise, rewards, and more all in one place
          </Typography>

          <Button
            sx={{
              backgroundColor: 'orange',
              '&:hover': { backgroundColor: '#000' },
              color: '#fff',
            }}
            className="Banner_Button"
          >
            Go To App
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
