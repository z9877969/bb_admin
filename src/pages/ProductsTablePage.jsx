import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import ProductsTable from 'modules/products/ProductsTable';
import { getProducts } from '@redux/products/productsOperations';
import { selectProdList } from '@redux/products/productsSelectors';

const ProductsListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prodList = useSelector(selectProdList);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Box sx={{ pb: 2 }}>
      <ProductsTable prodList={prodList} />
      <Button
        sx={{ mt: 2 }}
        color="primary"
        variant="outlined"
        onClick={() => navigate('/products/new')}
      >
        Add new product
      </Button>
    </Box>
  );
};

export default ProductsListPage;
