import { useEffect, useCallback, useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// redux
import { useDispatch } from 'src/redux/store';
import { getProduct } from 'src/redux/slices/product';
// _mock
import { PRODUCT_PUBLISH_OPTIONS } from 'src/_mock';
// routes
import { paths } from 'src/routes/paths';
import { useParams } from 'src/routes/hook';
// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
//
import { useProduct } from '../hooks';
import ProductDetailsReview from '../product-details-review';
import ProductDetailsSummary from '../product-details-summary';
import ProductDetailsToolbar from '../product-details-toolbar';
import ProductDetailsCarousel from '../product-details-carousel';
import ProductDetailsDescription from '../product-details-description';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'solar:verified-check-bold',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'solar:clock-circle-bold',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'solar:shield-check-bold',
  },
];

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

// const product = {
//   "_id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
//   "gender": "Men",
//   "publish": "published",
//   "category": "Shose",
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
//   "inventoryType": "in stock",
//   "images": [
//     "http://localhost:7272/assets/images/m_product/product_1.jpg",
//     "http://localhost:7272/assets/images/m_product/product_2.jpg",
//     "http://localhost:7272/assets/images/m_product/product_3.jpg",
//     "http://localhost:7272/assets/images/m_product/product_4.jpg",
//     "http://localhost:7272/assets/images/m_product/product_5.jpg",
//     "http://localhost:7272/assets/images/m_product/product_6.jpg",
//     "http://localhost:7272/assets/images/m_product/product_7.jpg",
//     "http://localhost:7272/assets/images/m_product/product_8.jpg"
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
//   "description": "\n\u003Ch6\u003ESpecifications\u003C/h6\u003E\n\u003Cbr/\u003E\n\u003Col\u003E\n  \u003Cli\u003ECategory\u003C/li\u003E\n  \u003Cli\u003EShoes\u003C/li\u003E\n\u003C/ol\u003E\n\n\u003Cbr/\u003E\n\u003Col\u003E\n  \u003Cli\u003EManufacturer\u003C/li\u003E\n  \u003Cli\u003ENike\u003C/li\u003E\n\u003C/ol\u003E\n\n\u003Cbr/\u003E\n\u003Col\u003E\n  \u003Cli\u003ESerial Number\u003C/li\u003E\n  \u003Cli\u003E358607726380311\u003C/li\u003E\n\u003C/ol\u003E\n\n\u003Cbr/\u003E\n\u003Col\u003E\n  \u003Cli\u003EShips From\u003C/li\u003E\n  \u003Cli\u003EUnited States\u003C/li\u003E\n\u003C/ol\u003E\n\n\u003Cbr/\u003E\n\u003Cbr/\u003E\n\n\u003Ch6\u003EProduct Details\u003C/h6\u003E\n\u003Cbr/\u003E\n\u003Cul\u003E\n  \u003Cli\u003E\u003Cp\u003EThe foam sockliner feels soft and comfortable\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003EPull tab\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003ENot intended for use as Personal Protective Equipment\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003EColour Shown: White/Black/Oxygen Purple/Action Grape\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003EStyle: 921826-109\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003ECountry/Region of Origin: China\u003C/p\u003E\u003C/li\u003E\n\u003C/ul\u003E\n\n\u003Cbr/\u003E\n\u003Cbr/\u003E\n\n\u003Ch6\u003EBenefits\u003C/h6\u003E\n\u003Cbr/\u003E\n\u003Cul\u003E\n  \u003Cli\u003E\n    \u003Cp\u003EMesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort\u003C/p\u003E\n    and durability.\n  \u003C/li\u003E\n  \u003Cli\u003E\n    \u003Cp\u003EOriginally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio\u003C/p\u003E\n    ning underfoot.\n  \u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003EThe foam midsole feels springy and soft.\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003EThe rubber outsole adds traction and durability.\u003C/p\u003E\u003C/li\u003E\n\u003C/ul\u003E\n\n\u003Cbr/\u003E\n\u003Cbr/\u003E\n\n\u003Ch6\u003EDelivery and Returns\u003C/h6\u003E\n\u003Cbr/\u003E\n\u003Cp\u003EYour order of $200 or more gets free standard delivery.\u003C/p\u003E\n\u003Cbr/\u003E\n\u003Cul\u003E\n  \u003Cli\u003E\u003Cp\u003EStandard delivered 4-5 Business Days\u003C/p\u003E\u003C/li\u003E\n  \u003Cli\u003E\u003Cp\u003EExpress delivered 2-4 Business Days\u003C/p\u003E\u003C/li\u003E\n\u003C/ul\u003E\n\u003Cbr/\u003E\n\u003Cp\u003EOrders are processed and delivered Monday-Friday (excluding public holidays)\u003C/p\u003E\n\n",
//   "newLabel": {
//     "enabled": true,
//     "content": "NEW"
//   },
//   "sku": "WW75K5211YW/SV",
//   "createdAt": "2025-05-05T06:35:02.610Z",
//   "saleLabel": {
//     "enabled": false,
//     "content": "SALE"
//   },
//   "name": "Foundations Matte Flip Flop",
//   "price": 97.14,
//   "coverUrl": "http://localhost:7272/assets/images/m_product/product_2.jpg",
//   "totalRatings": 3.7,
//   "totalSold": 684,
//   "totalReviews": 9124,
//   "subDescription": "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.",
//   "colors": [
//     "#000000",
//     "#FFFFFF"
//   ]
// };

export default function ProductDetailsView() {
  useInitial();

  const settings = useSettingsContext();

  const { product, checkout, onAddCart, onGotoStep, productStatus } = useProduct();
  // const {  checkout, onAddCart, onGotoStep, productStatus } = useProduct();

  const [currentTab, setCurrentTab] = useState('description');

  const [publish, setPublish] = useState('');

  // useEffect(() => {
  //   if (product) {
  //     setPublish(product?.publish);
  //   }
  // }, [product]);

  setPublish(product?.isPublic ? "publish" : "");


  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  // const renderSkeleton = <ProductDetailsSkeleton />;

  // const renderError = (
  //   <EmptyContent
  //     filled
  //     title={`${productStatus.error?.message}`}
  //     action={
  //       <Button
  //         component={RouterLink}
  //         href={paths.dashboard.product.root}
  //         startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
  //         sx={{ mt: 3 }}
  //       >
  //         Back to List
  //       </Button>
  //     }
  //     sx={{ py: 10 }}
  //   />
  // );

  const renderProduct = product && (
    <>
      <ProductDetailsToolbar
        backLink={paths.dashboard.product.root}
        editLink={paths.dashboard.product.edit(`${product?._id}`)}
        liveLink={paths.product.details(`${product?._id}`)}
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={PRODUCT_PUBLISH_OPTIONS}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <ProductDetailsSummary
            disabledActions
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
              label: 'Description',
            },
            {
              value: 'reviews',
              label: `Reviews (${product.reviews.length})`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === 'description' && (
          <ProductDetailsDescription description={product?.description} />
        )}

        {currentTab === 'reviews' && (
          <ProductDetailsReview
            ratings={product.ratings}
            reviews={product.reviews}
            totalRatings={product.totalRatings}
            totalReviews={product.totalReviews}
          />
        )}
      </Card>
    </>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {/* {productStatus.loading ? (
        renderSkeleton
      ) : (
        <>{productStatus.error ? renderError : renderProduct}</>
      )} */}
      {renderProduct}
    </Container>
  );
}
