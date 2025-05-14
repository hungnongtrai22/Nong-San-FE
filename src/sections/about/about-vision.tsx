import { useState, useRef, useEffect } from 'react';
import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlayVideo = () => {
    setIsPlay(true);
  };

  useEffect(() => {
    if (isPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlay]);

  // const renderImg =
  //   isPlay === true ? (
  //     // eslint-disable-next-line jsx-a11y/media-has-caption
  //     <video controls width="100%" height="100%">
  //       <source src="/assets/videodemo.mp4" type="video/mp4" />
  //     </video>
  //   ) : (
  //     <Image
  //       src="/assets/images/about/vision.jpg"
  //       alt="about-vision"
  //       overlay={alpha(theme.palette.grey[900], 0.48)}
  //     />
  //   );

    const renderImg =
    (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video ref={videoRef} controls style={{aspectRatio: "16/9"}}>
        <source src="/assets/quytrinh.mp4" type="video/mp4" />
      </video>
    );

  const renderLogo = (
    <Stack
      direction="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 1,
        zIndex: 9,
        bottom: 0,
        opacity: 0.48,
        position: 'absolute',
        py: { xs: 1.5, md: 2.5 },
      }}
    >
      {['ibm', 'lya', 'spotify', 'netflix', 'hbo', 'amazon'].map((logo) => (
        <Box
          component={m.img}
          key={logo}
          variants={varFade().in}
          alt={logo}
          src={`/assets/icons/brands/ic_brand_${logo}.svg`}
          sx={{
            m: { xs: 1.5, md: 2.5 },
            height: { xs: 20, md: 32 },
          }}
        />
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        pb: 10,
        position: 'relative',
        bgcolor: 'background.neutral',
        '&:before': {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: 'absolute',
          height: { xs: 80, md: 120 },
          bgcolor: 'background.default',
        },
      }}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: 10,
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderImg}

          {/* {renderLogo} */}

          {!isPlay && (
            <Fab sx={{ position: 'absolute', zIndex: 9 }}>
              <Iconify icon="solar:play-broken" width={24} onClick={handlePlayVideo} />
            </Fab>
          )}
        </Box>

        <m.div variants={varFade().inUp}>
          <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Quy Trình Sản Xuất Hạt Điều
          </Typography>
        </m.div>
      </Container>
    </Box>
  );
}
