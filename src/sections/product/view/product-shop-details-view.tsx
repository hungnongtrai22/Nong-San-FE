import { useEffect, useCallback, useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// redux
import { useDispatch } from 'src/redux/store';
import { getProduct } from 'src/redux/slices/product';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { CartIcon } from '../_common';
import { useProduct } from '../hooks';
import ProductDetailsReview from '../product-details-review';
import { ProductDetailsSkeleton } from '../product-skeleton';
import ProductDetailsSummary from '../product-details-summary';
import ProductDetailsCarousel from '../product-details-carousel';
import ProductDetailsDescription from '../product-details-description';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: '100% Nguyên Chất',
    description: 'Hạt điều rang muối vỏ lụa nguyên chất, giữ nguyên hương vị tự nhiên, thơm ngon, bùi béo đặc trưng.',
    icon: 'solar:verified-check-bold',
  },
  {
    title: 'Đổi Trả Trong 10 Ngày',
    description: 'Hỗ trợ đổi trả trong vòng 10 ngày nếu sản phẩm gặp lỗi do nhà sản xuất hoặc không đúng mô tả.',
    icon: 'solar:clock-circle-bold',
  },
  {
    title: 'Bảo Hành 1 Năm',
    description: 'Sản phẩm được bảo hành lên đến 1 năm – cam kết chất lượng, an tâm khi sử dụng.',
    icon: 'solar:shield-check-bold',
  },
];

// const product = {
//   "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
//   "gender": "Men",
//   "publish": "published",
//   "category": "Hạt Dạng Hũ",
//   "available": 72,
//   "priceSale": null,
//   "taxes": 10,
//   "quantity": 80,
//   "sizes": [
//     "6",
//     "7",
//     "8",
//     "8.5",
//     "9",
//     "9.5",
//     "10",
//     "10.5",
//     "11",
//     "11.5",
//     "12",
//     "13"
//   ],
//   "inventoryType": "còn hàng",
//   "images": [
//     "/assets/dieu1.png",
//     "/assets/dieu2.png",
//     "/assets/dieu3.png",
//     "/assets/dieu4.png",
//     "/assets/demo1.png",
//     "/assets/demo2.png",
//     "/assets/demo3.jpg",
//     "/assets/demo4.jpeg"
//   ],
//   "ratings": [
//     {
//       "name": "1 Star",
//       "starCount": 9911,
//       "reviewCount": 1947
//     },
//     {
//       "name": "2 Star",
//       "starCount": 1947,
//       "reviewCount": 9124
//     },
//     {
//       "name": "3 Star",
//       "starCount": 9124,
//       "reviewCount": 6984
//     },
//     {
//       "name": "4 Star",
//       "starCount": 6984,
//       "reviewCount": 8488
//     },
//     {
//       "name": "5 Star",
//       "starCount": 8488,
//       "reviewCount": 2034
//     }
//   ],
//   "reviews": [
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
//       "name": "Jayvion Simon",
//       "postedAt": "2025-05-06T07:35:02.609Z",
//       "comment": "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
//       "isPurchased": true,
//       "rating": 4.2,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_1.jpg",
//       "helpful": 9911,
//       "attachments": []
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
//       "name": "Lucian Obrien",
//       "postedAt": "2025-05-05T06:35:02.609Z",
//       "comment": "She eagerly opened the gift, her eyes sparkling with excitement.",
//       "isPurchased": true,
//       "rating": 3.7,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_2.jpg",
//       "helpful": 1947,
//       "attachments": [
//         "http://localhost:7272/assets/images/m_product/product_1.jpg"
//       ]
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
//       "name": "Deja Brady",
//       "postedAt": "2025-05-04T05:35:02.609Z",
//       "comment": "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
//       "isPurchased": true,
//       "rating": 4.5,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_3.jpg",
//       "helpful": 9124,
//       "attachments": []
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
//       "name": "Harrison Stein",
//       "postedAt": "2025-05-03T04:35:02.609Z",
//       "comment": "The aroma of freshly brewed coffee filled the air, awakening my senses.",
//       "isPurchased": false,
//       "rating": 3.5,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_4.jpg",
//       "helpful": 6984,
//       "attachments": [
//         "http://localhost:7272/assets/images/m_product/product_3.jpg",
//         "http://localhost:7272/assets/images/m_product/product_4.jpg"
//       ]
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
//       "name": "Reece Chung",
//       "postedAt": "2025-05-02T03:35:02.609Z",
//       "comment": "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
//       "isPurchased": false,
//       "rating": 0.5,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_5.jpg",
//       "helpful": 8488,
//       "attachments": []
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
//       "name": "Lainey Davidson",
//       "postedAt": "2025-05-01T02:35:02.609Z",
//       "comment": "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
//       "isPurchased": true,
//       "rating": 3,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_6.jpg",
//       "helpful": 2034,
//       "attachments": [
//         "http://localhost:7272/assets/images/m_product/product_6.jpg",
//         "http://localhost:7272/assets/images/m_product/product_7.jpg",
//         "http://localhost:7272/assets/images/m_product/product_8.jpg"
//       ]
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
//       "name": "Cristopher Cardenas",
//       "postedAt": "2025-04-30T01:35:02.609Z",
//       "comment": "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
//       "isPurchased": false,
//       "rating": 2.5,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_7.jpg",
//       "helpful": 3364,
//       "attachments": []
//     },
//     {
//       "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
//       "name": "Melanie Noble",
//       "postedAt": "2025-04-29T00:35:02.609Z",
//       "comment": "The waves crashed against the shore, creating a soothing symphony of sound.",
//       "isPurchased": false,
//       "rating": 2.8,
//       "avatarUrl": "http://localhost:7272/assets/images/avatar/avatar_8.jpg",
//       "helpful": 8401,
//       "attachments": []
//     }
//   ],
//   "tags": [
//     "Technology",
//     "Marketing",
//     "Design",
//     "Photography",
//     "Art"
//   ],
//   "code": "38BEE271",
// "description": "\n<h6>Thông số kỹ thuật</h6>\n<br/>\n<ol>\n  <li>Danh mục</li>\n  <li>Thực phẩm</li>\n</ol>\n<br/>\n<ol>\n  <li>Thương hiệu</li>\n  <li>Hạt Việt</li>\n</ol>\n<br/>\n<ol>\n  <li>Mã sản phẩm</li>\n  <li>HD-RMVL-250</li>\n</ol>\n<br/>\n<ol>\n  <li>Xuất xứ</li>\n  <li>Việt Nam</li>\n</ol>\n<br/>\n<br/>\n<h6>Chi tiết sản phẩm</h6>\n<br/>\n<ul>\n  <li><p>Hạt điều được rang bằng muối tinh khiết, giữ nguyên lớp vỏ lụa tự nhiên.</p></li>\n  <li><p>Hương vị bùi béo, giòn thơm, không sử dụng chất bảo quản.</p></li>\n  <li><p>Đóng gói tiện lợi, phù hợp làm quà tặng hoặc sử dụng hàng ngày.</p></li>\n  <li><p>Khối lượng tịnh: 250g</p></li>\n  <li><p>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.</p></li>\n</ul>\n<br/>\n<br/>\n<h6>Lợi ích</h6>\n<br/>\n<ul>\n  <li><p>Giàu protein, chất xơ và các loại vitamin B1, B6.</p></li>\n  <li><p>Hỗ trợ tăng cường năng lượng và tốt cho hệ tim mạch.</p></li>\n  <li><p>Lớp vỏ lụa giúp giữ hương vị tự nhiên và tăng giá trị dinh dưỡng.</p></li>\n  <li><p>Thích hợp làm món ăn vặt lành mạnh cho cả gia đình.</p></li>\n</ul>\n<br/>\n<br/>\n<h6>Giao hàng và đổi trả</h6>\n<br/>\n<p>Miễn phí giao hàng với đơn từ 300.000đ trở lên.</p>\n<br/>\n<ul>\n  <li><p>Giao tiêu chuẩn: 3-5 ngày làm việc</p></li>\n  <li><p>Giao nhanh: 1-2 ngày làm việc</p></li>\n</ul>\n<br/>\n<p>Xử lý và giao hàng từ thứ Hai đến thứ Sáu (trừ ngày lễ)</p>\n",
//   "newLabel": {
//     "enabled": true,
//     "content": "MỚI"
//   },
//   "sku": "WW75K5211YW/SV",
//   "createdAt": "2025-05-05T06:35:02.610Z",
//   "saleLabel": {
//     "enabled": false,
//     "content": "SALE"
//   },
//   "name": "Hạt điều rang muối vỏ lụa",
//   "price": 100000,
//   "coverUrl": "http://localhost:7272/assets/images/m_product/product_2.jpg",
//   "totalRatings": 3.7,
//   "totalSold": 684,
//   "totalReviews": 9124,
//   "subDescription": "Hạt điều rang muối là sản phẩm được chế biến từ hạt điều nguyên chất, rang chín vàng giòn cùng muối tinh, giữ nguyên hương vị béo bùi đặc trưng và độ giòn thơm hấp dẫn. Đây là món ăn vặt bổ dưỡng, giàu protein, vitamin và khoáng chất, phù hợp cho mọi lứa tuổi.",
//   "colors": [
//     "#000000",
//     "#FFFFFF"
//   ]
// };

// ----------------------------------------------------------------------

function useInitial() {
  const dispatch = useDispatch();

  const params = useParams();

  const { id } = params;

  const getProductCallback = useCallback(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    getProductCallback();
  }, [getProductCallback]);

  return null;
}

export default function ProductShopDetailsView() {
  useInitial();

  const settings = useSettingsContext();

  // const { product, checkout, onAddCart, onGotoStep, productStatus } = useProduct();
  const {product, checkout, onAddCart, onGotoStep, productStatus } = useProduct();
  console.log(product);
  const [currentTab, setCurrentTab] = useState('description');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const renderSkeleton = <ProductDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${productStatus.error?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.product.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  const renderProduct = product && (
    <>
      <CustomBreadcrumbs
        links={[
          { name: 'Trang chủ', href: '/' },
          {
            name: 'Sản phẩm',
            href: paths.product.root,
          },
          { name: product?.name },
        ]}
        sx={{ mb: 5 }}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsSummary
            product={product}
            cart={checkout.cart}
            onAddCart={onAddCart}
            onGotoStep={onGotoStep}
          />
        </Grid>
      </Grid>

      <Box
        gap={5}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{ my: 10 }}
      >
        {SUMMARY.map((item) => (
          <Box key={item.title} sx={{ textAlign: 'center', px: 5 }}>
            <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />

            <Typography variant="subtitle1" sx={{ mb: 1, mt: 2 }}>
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Card>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            px: 3,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {[
            {
              value: 'description',
              label: 'Mô Tả',
            },
            {
              value: 'reviews',
              label: `Đánh Giá (${product?.reviews?.length || 0})`,
            },
          ]?.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === 'description' && (
          <ProductDetailsDescription description={product?.description} />
        )}

        {currentTab === 'reviews' && (
          <ProductDetailsReview
            ratings={product?.ratings || 0}
            reviews={product?.reviews || 0}
            totalRatings={product?.totalRatings || 0}
            totalReviews={product?.totalReviews || 0}
          />
        )}
      </Card>
    </>
  );

  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{
        mt: 5,
        mb: 15,
      }}
    >
      <CartIcon totalItems={checkout.totalItems} />

      {/* {productStatus.loading ? (
        renderSkeleton
      ) : (
        <>{productStatus.error ? renderError : renderProduct}</>
      )} */}
      {renderProduct}
    </Container>
  );
}
