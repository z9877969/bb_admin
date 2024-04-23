import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { selectProdList } from '@redux/products/productsSelectors';
import VariantsList from 'modules/products/VariantsList';
import ProductForm from 'modules/products/ProductForm';
import { getProducts } from '@redux/products/productsOperations';
// import StarterKit from '@tiptap/starter-kit';
// import {
//   MenuButtonBold,
//   MenuButtonItalic,
//   MenuControlsContainer,
//   MenuDivider,
//   MenuBar,
//   MenuSelectHeading,
//   RichTextEditor,
//   ColorPicker,
// } from 'mui-tiptap';
// import { useRef } from 'react';

// function RichInput() {
//   const rteRef = useRef(null);

//   const [color, setColor] = useState(0);

//   return (
//     <div>
//       <ColorPicker onChange={(v) => setColor(v)} value={color} />
//       <RichTextEditor
//         ref={rteRef}
//         extensions={[StarterKit]} // Or any Tiptap extensions you wish!
//         content="<p>Hello world</p>" // Initial content for the editor
//         // Optionally include `renderControls` for a menu-bar atop the editor:
//         renderControls={() => (
//           <MenuControlsContainer>
//             <MenuSelectHeading />
//             <MenuDivider />
//             <MenuButtonBold />
//             <MenuButtonItalic />
//             <MenuBar />
//             {/* Add more controls of your choosing here */}
//           </MenuControlsContainer>
//         )}
//       />

//       <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
//         Log HTML
//       </Button>
//     </div>
//   );
// }

const newProduct = {
  age: [],
  category: '',
  description: [],
  maker: '',
  recomendation: '',
  subtitle: '',
  title: '',
  userType: [],
};

const OneProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { prodId, varId } = useParams();

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
          sx={{ mb: 2, p: 1 }}
          onClick={() => navigateToNewVariant()}
          disabled={varId === 'new'}
        >
          Add new variant
        </Button>
      )}
      {(variants?.length > 0 || varId === 'new') && (
        <VariantsList variants={variants} />
      )}
    </Box>
  );
};

export default OneProductPage;

/* const p = {
  // title: 'Дитяча зубна паста ПОЛУНИЦЯ Brush baby STRAWBERRY !!!TEST!!!',
  // subtitle:
  //   'Дитяча зубна паста для щоденного використання (від 3 років з високим ризиком розвитку карієсу або з появою 1 постійного зуба).',
  // recomendation:
  //   'Склад цієї пасти дуже добре видно на фото її зворотньої сторони.',
  description: [
    {
      paragraph:
        'Ця зубна паста має унікальне поєднання ксилітолу і…Допомагає відновити рН в роті до здорового рівня.',
    },
    {
      title: 'Основні характеристики:',
      items: [
        '10% ксиліту;',

        '1350 ppmF натрію монофторфосфату;',

        'не містить лаурилсульфат натрію (SLS) та парабенів;',

        'не містить також пальмової олії, молочних продуктів та сої;',

        'має низьке піноутворення.',
      ],
    },
  ],
  // userType: ['child'],
  // age: ['0to3', '4to6', '6to12'],
  category: {
    _id: '66196c344359dc726e3f8824',
    label: 'Зубна паста',
    value: 'toothpastes',
  },
  maker: {
    _id: '66196d5e4359dc726e3f8830',
    label: 'Brush-baby',
    value: 'brushbaby',
  },
  variants: [
    {
      color: null,
      flavor: 'Полуниця',
      marker: 'pink',
      price: 230,
      quantity: 10,
      salePrice: 0,
      volume: '50мл',
      watermark: null,
      _id: '661ce908673498c3793bb3de',
    },
  ],
}; */
