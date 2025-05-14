import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useResponsive } from 'src/hooks/use-responsive';

// _mock
import { _carouselsMembers, _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutCatelog() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

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
