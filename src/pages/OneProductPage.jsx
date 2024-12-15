import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { selectProdList } from '@redux/products/productsSelectors';
import VariantsList from 'modules/products/VariantsList';
import ProductForm from 'modules/products/ProductForm';
import { getProducts } from '@redux/products/productsOperations';

const newProduct = {
  age: [],
  category: '',
  description: [],
  maker: '',
  title: '',
  userType: [],
};

const OneProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { prodId } = useParams();
  const {
    params: { '*': varId },
  } = useMatch('products/:prodId/*');

  const products = useSelector(selectProdList);

  const oneProduct = useMemo(() => {
    const product = products.find((el) => el._id === prodId);

    return product
      ? {
          ...product,
          maker: product.maker._id,
          category: product.category._id,
        }
      : prodId === 'new'
        ? newProduct
        : null;
  }, [products, prodId]);

  const navigateToNewProduct = () => {
    navigate('/products/new');
  };

  const navigateToNewVariant = () => {
    navigate(`/products/${prodId}/new`);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, prodId]);

  if (!oneProduct) return null;
  const { variants, ...product } = oneProduct;
  return (
    <Box sx={{ p: 2 }}>
      <Button
        sx={{ mb: 2 }}
        color="primary"
        variant="outlined"
        onClick={navigateToNewProduct}
      >
        Add new product
      </Button>
      <ProductForm product={product} />
      {prodId !== 'new' && (
        <Button
          variant="outlined"
          color="success"
          sx={{ mb: 2, p: 1 }}
          onClick={() => navigateToNewVariant()}
          disabled={varId === 'new'}
        >
          Add new variant
        </Button>
      )}
      {(variants?.length > 0 || varId === 'new') && (
        <VariantsList variants={variants} varId={varId} />
      )}
    </Box>
  );
};

export default OneProductPage;
