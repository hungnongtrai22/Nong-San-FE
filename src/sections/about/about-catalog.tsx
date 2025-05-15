// @mui
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';


// _mock
// import { _carouselsMembers, _socials } from 'src/_mock';
// components

import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutCatelog() {



  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <Box sx={{ position: 'relative' }}>
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 10, md: 15 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          {/* eslint-disable react/self-closing-comp, react/no-unknown-property */}
          <div
            style={{
              position: 'relative',
              paddingTop: 'max(60%, 324px)',
              width: '100%',
              height: 0,
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                border: 'none',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
              }}
              src="https://online.fliphtml5.com/lswss/hetx/"
              seamless
              scrolling="no"
              frameBorder="0"
              allowTransparency
              allowFullScreen
              title="Flipbook Viewer"
            ></iframe>
          </div>
        </Container>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------
