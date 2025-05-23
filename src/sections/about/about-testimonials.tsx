import { m } from 'framer-motion';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Stack, { StackProps } from '@mui/material/Stack';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fDate } from 'src/utils/format-time';
// _mock
// theme
import { bgBlur, bgGradient, hideScroll } from 'src/theme/css';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------


const reviews = [
  {
    name: "Vũ Quốc Hùng",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Dịch vụ tuyệt vời, nhân viên nhiệt tình và chu đáo!`,
  },
  {
    name: "Nguyễn Thị Lan",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Hạt điều rất ngon, giòn và béo. Đóng gói cẩn thận.`,
  },
  {
    name: "Trần Minh Tú",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Sản phẩm chất lượng, ăn là ghiền. Sẽ mua lại lần sau.`,
  },
  {
    name: "Lê Hoàng Nam",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Hạt điều rang muối vừa ăn, không quá mặn. Rất hài lòng.`,
  },
  {
    name: "Phạm Huyền My",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Mùi vị thơm ngon, đóng gói đẹp. Tặng làm quà rất hợp lý.`,
  },
  {
    name: "Đinh Gia Bảo",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Ăn thử rồi ghiền luôn! Hạt to, vị đậm đà.`,
  },
  {
    name: "Bùi Thanh Hương",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Hạt điều giòn tan, giữ được vị tự nhiên. Giao hàng nhanh.`,
  },
  {
    name: "Lâm Anh Tuấn",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Sản phẩm ngon đúng như mô tả. Mình rất hài lòng.`,
  },
  {
    name: "Hoàng Ngọc Mai",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Hộp hạt điều đẹp, sang trọng. Vị ngon không chê vào đâu được.`,
  },
  {
    name: "Ngô Văn Khánh",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Ăn một lần là muốn mua tiếp. Rất đáng đồng tiền.`,
  },
  {
    name: "Tạ Minh Châu",
    postedDate: new Date(),
    ratingNumber: 5,
    avatarUrl: "",
    content: `Hạt điều chất lượng, giá hợp lý. Dùng làm quà tặng cũng rất phù hợp.`,
  }
];

export default function AboutTestimonials() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderLink = (
    <Button color="primary" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
      Đọc thêm nhận xét từ khách hàng khác
    </Button>
  );

  const renderDescription = (
    <Box
      sx={{
        maxWidth: { md: 360 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.48 }}>
          [Tên thương hiệu]
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          Các đánh giá <br />
          từ khách hàng
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          Chúng tôi luôn không ngừng nỗ lực để mang đến cho khách hàng những sản phẩm chất lượng cao
          cùng dịch vụ chuyên nghiệp, tận tâm nhất. Dưới đây là một số phản hồi chân thật từ những
          khách hàng đã tin tưởng và đồng hành cùng chúng tôi.
        </Typography>
      </m.div>

      {!mdUp && (
        <Box
          component={m.div}
          variants={varFade().inUp}
          sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
        >
          {renderLink}
        </Box>
      )}
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        py: { md: 10 },
        height: { md: 1 },
        ...(mdUp && {
          ...hideScroll.y,
        }),
      }}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {reviews.map((testimonial) => (
          <m.div key={testimonial.name} variants={varFade().inUp}>
            <TestimonialCard testimonial={testimonial} />
          </m.div>
        ))}
      </Masonry>
    </Box>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.9),
          imgUrl: '/assets/images/about/testimonials.jpg',
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
      }}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid
            xs={12}
            md={7}
            lg={6}
            alignItems="center"
            sx={{
              height: 1,
            }}
          >
            {renderContent}
          </Grid>
        </Grid>

        {mdUp && (
          <Box
            component={m.div}
            variants={varFade().inUp}
            sx={{ bottom: 60, position: 'absolute' }}
          >
            {renderLink}
          </Box>
        )}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialCardProps = StackProps & {
  testimonial: {
    name: string;
    content: string;
    postedDate: Date;
    avatarUrl: string;
    ratingNumber: number;
  };
};

function TestimonialCard({ testimonial, sx, ...other }: TestimonialCardProps) {
  const theme = useTheme();

  const { name, ratingNumber, postedDate, content, avatarUrl } = testimonial;

  return (
    <Stack
      spacing={3}
      sx={{
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.08,
        }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{content}</Typography>

      <Rating value={ratingNumber} readOnly size="small" />

      <Stack direction="row">
        <Avatar alt={name} src={avatarUrl} sx={{ mr: 2 }} />

        <ListItemText
          primary={name}
          secondary={fDate(postedDate)}
          primaryTypographyProps={{
            typography: 'subtitle2',
            mb: 0.5,
          }}
          secondaryTypographyProps={{
            typography: 'caption',
            color: 'inherit',
            sx: { opacity: 0.64 },
          }}
        />
      </Stack>
    </Stack>
  );
}
