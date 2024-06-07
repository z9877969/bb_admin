import { Checkbox, TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductTableRow = ({
  isPopular,
  //   marker,
  price,
  productId,
  quantity,
  salePrice,
  title,
  varId,
  //   watermark,
  updateIsPopular,
}) => {
  return (
    <TableRow>
      <TableCell align="center">
        <Checkbox
          name={varId}
          checked={isPopular}
          onChange={(e) => {
            updateIsPopular({ varId, isPopular: e.target.checked });
          }}
        />
      </TableCell>
      <TableCell>
        <Link
          to={
            varId ? `/products/${productId}/${varId}` : `/products/${productId}`
          }
          style={{ color: 'inherit' }}
        >
          {title}
        </Link>
      </TableCell>
      <TableCell>{price ? price : 0}</TableCell>
      <TableCell>{salePrice > 0 ? salePrice : '-'}</TableCell>
      <TableCell>{quantity ? quantity : 0}</TableCell>
    </TableRow>
  );
};

export default ProductTableRow;
