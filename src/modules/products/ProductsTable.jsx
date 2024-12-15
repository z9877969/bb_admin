import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Switch,
  Box,
  Typography,
} from '@mui/material';
import ProductTableRow from './ProductTableRow';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { updateVariantPopularity } from '@redux/products/productsOperations';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Link } from 'react-router-dom';

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

const tableHeadStyles = { fontWeight: 'bold', fontSize: '1.2em' };

const ProductsTable = ({ prodList }) => {
  const dispatch = useDispatch();

  const [isVars, setIsVars] = useLocalStorage('isVarsList', false);

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '1em',
        }}
      >
        <Typography variant="h6" fontWeight={!isVars ? 600 : 400}>
          ProductsList
        </Typography>
        <Switch checked={isVars} onChange={() => setIsVars((p) => !p)} />
        <Typography variant="h6" fontWeight={isVars ? 600 : 400}>
          VariantsList
        </Typography>
      </Box>
      {isVars ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...tableHeadStyles }} width={170}>
                Популярні товари
              </TableCell>
              <TableCell sx={{ ...tableHeadStyles }} align="left">
                Назва товару
              </TableCell>
              <TableCell sx={{ ...tableHeadStyles }} align="left">
                Ціна
              </TableCell>
              <TableCell sx={{ ...tableHeadStyles }} align="left">
                Знижка
              </TableCell>
              <TableCell sx={{ ...tableHeadStyles }} align="left">
                К-сть
              </TableCell>
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
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...tableHeadStyles }} align="left">
                Назва товару
              </TableCell>
              <TableCell sx={{ ...tableHeadStyles }}>Категорія</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prodList.map((props) => (
              <TableRow key={props._id}>
                <TableCell>
                  <Link
                    to={`/products/${props._id}`}
                    style={{ color: 'inherit' }}
                  >
                    {props.title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`/products/${props._id}`}
                    style={{ color: 'inherit' }}
                  >
                    {props.category.label}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ProductsTable;
