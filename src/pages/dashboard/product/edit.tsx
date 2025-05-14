import { Helmet } from 'react-helmet-async';
// sections
import { ProductEditView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductEditPage() {
  return (
    <>
      <Helmet>
        <title> Bảng điều khiển: Chỉnh sửa sản phẩm</title>
      </Helmet>

      <ProductEditView />
    </>
  );
}
