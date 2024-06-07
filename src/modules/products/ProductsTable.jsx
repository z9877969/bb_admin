import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import ProductTableRow from './ProductTableRow';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { updateVariantPopularity } from '@redux/products/productsOperations';

const updateTitle = ({ title, flavor, color, volume }) => {
  let newTitle = title;
  if (color) {
    newTitle = newTitle + ' ' + color.toUpperCase();
  }
  if (flavor) {
    newTitle = newTitle + ' ' + flavor.toUpperCase();
  }
  if (volume) {
    newTitle = newTitle + ' ' + volume.toUpperCase();
  }
  return newTitle;
};

const ProductsTable = ({ prodList }) => {
  const dispatch = useDispatch();

  const displayingProducts = useMemo(() => {
    return prodList.reduce((acc, { variants, title, _id }) => {
      const prods =
        variants.length > 0
          ? variants.map(({ color, flavor, product, volume, _id, ...rest }) => {
              const newTitle = updateTitle({ title, color, flavor, volume });

              return {
                title: newTitle,
                productId: product,
                varId: _id,
                ...rest,
              };
            })
          : [{ title, productId: _id }];
      acc.push(...prods);
      return acc;
    }, []);
  }, [prodList]);

  const updateIsPopular = ({ varId, isPopular }) => {
    dispatch(updateVariantPopularity({ varId, isPopular }));
  };

  return (
    <div style={{ width: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={170}>Популярні товари</TableCell>
            <TableCell align="left">Назва товару</TableCell>
            <TableCell align="left">Ціна</TableCell>
            <TableCell align="left">Знижка</TableCell>
            <TableCell align="left">К-сть</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayingProducts.map((props) => (
            <ProductTableRow
              key={props.varId}
              {...props}
              updateIsPopular={updateIsPopular}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
