import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// _mock
import { _carouselsMembers, _socials } from 'src/_mock';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------
const products = [
  {
    id: 1,
    name: 'Go',
    avatarUrl: `/assets/go.png`,
  },
  {
    id: 2,
    name: 'Lottle',
    avatarUrl: `/assets/lotte.png`,
  },
  {
    id: 3,
    name: 'coopmart',
    avatarUrl: `/assets/coopmart.png`,
  },
  {
    id: 4,
    name: 'aoen mall',
    avatarUrl: `/assets/aoenmall.png`,
  },
  {
    id: 5,
    name: '7 eleven',
    avatarUrl: `/assets/7-eleven.png`,
  },
  {
    id: 6,
    name: 'Circle K',
    avatarUrl: `/assets/circlek.png`,
  },
  {
    id: 7,
    name: 'Bách Hoá Xanh',
    avatarUrl: `/assets/bhx.webp`,
  },
];
export default function AboutPartner() {
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          [Tên thương hiệu]
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h3" sx={{ my: 3 }}>
          ĐỐI TÁC
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
          Các đối tác chính của [Tên thương hiệu] trong việc sản xuất, phân phối và tiêu thụ hàng
          hóa. Chúng tôi luôn trân trọng và đề cao sự hợp tác với các đơn vị.
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          filled
          shape="rounded"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              left: 24,
              ...(_carouselsMembers.length < 5 && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: 24,
              ...(_carouselsMembers.length < 5 && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {products.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade().in}
                sx={{
                  px: 1.5,
                  py: { xs: 8, md: 10 },
                }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>

      <Button
        size="large"
        color="inherit"
        variant="outlined"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={24} />}
        sx={{ mx: 'auto' }}
      >
        Xem Tất Cả Sản Phẩm
      </Button>
    </Container>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: {
    name: string;
    avatarUrl: string;
  };
};

function MemberCard({ member }: MemberCardProps) {
  const { name, avatarUrl } = member;
  return (
    <Card key={name}>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {name}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={name} src={avatarUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        {_socials.map((social) => (
          <IconButton
            key={social.name}
            sx={{
              color: social.color,
              '&:hover': {
                bgcolor: alpha(social.color, 0.08),
              },
            }}
          >
            <Iconify icon={social.icon} />
          </IconButton>
        ))}
      </Stack>
    </Card>
  );
}
