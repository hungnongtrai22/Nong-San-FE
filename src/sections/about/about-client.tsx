import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel } from 'src/components/carousel';
import Image from 'src/components/image';


// ----------------------------------------------------------------------



const products = [
    {
      id: 1,
      name: 'Go',
      image: `/assets/go.png`,
    },
    {
      id: 2,
      name: 'Lottle',
      image: `/assets/lotte.png`,
    },
    {
      id: 3,
      name: 'coopmart',
      image: `/assets/coopmart.png`,
    },
    {
      id: 4,
      name: 'aoen mall',
      image: `/assets/aoenmall.png`,
    },
    {
      id: 5,
      name: '7 eleven',
      image: `/assets/7-eleven.png`,
    },
    {
      id: 6,
      name: 'Circle K',
      image: `/assets/circlek.png`,
    },
    {
      id: 7,
      name: 'Bách Hoá Xanh',
      image: `/assets/bhx.webp`,
    },
  ];

export default function AboutClients() {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: 10,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">ĐỐI TÁC</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
        Các đối tác chính của [Tên Thương Hiệu] trong việc sản xuất, phân phối và tiêu thụ hàng hóa. Chúng tôi luôn trân trọng và đề cao sự hợp tác với các đơn vị.
        </Typography>
      </Stack>

      <Carousel {...carousel.carouselSettings}>
        {products.map((brand) => (
          <Image key={brand.id} src={brand.image} sx={{ width: 40,   px: 1.5,
            py: { xs: 8, md: 10 },}}/>
        ))}
      </Carousel>
    </Container>
  );
}
