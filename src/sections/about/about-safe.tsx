import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

// _mock
// import { _carouselsMembers, _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AboutSafe() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.24
  )}`;

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          [Tên thương hiệu]
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ my: 3 }}>
          Đảm Bảo An Toàn Vệ Sinh Thực Phẩm
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            mx: 'auto',
            maxWidth: 640,
            color: 'text.secondary',
          }}
        >
          Chúng tôi kiểm soát chặt chẽ từng khâu từ lựa chọn nguyên liệu, sơ chế, rang sấy đến đóng
          gói để đảm bảo sản phẩm luôn tươi ngon và an toàn vệ sinh thực phẩm.
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 10, md: 15 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
         <Grid container spacing={3} alignItems="center">
  {[
    { src: '/assets/antoan1.jpg', alt: 'our office 1' },
    { src: '/assets/antoan2.jpg', alt: 'our office 2' },
    { src: '/assets/antoan3.jpg', alt: 'our office 3' },
    { src: '/assets/antoan4.jpg', alt: 'our office 4' },
  ].map((item, index) => (
    <Grid key={index} xs={6} md={3}>
      <m.div variants={varFade().inUp}>
        <Image
          alt={item.alt}
          src={item.src}
          ratio={index % 2 === 0 ? "1/1" : "3/4"}
          sx={{ borderRadius: 3, boxShadow: shadow }}
        />
      </m.div>
    </Grid>
  ))}
</Grid>

        </Container>
      </Box>

      
    </Container>
  );
}

// ----------------------------------------------------------------------
