import {
  Price,
  PriceWrapper,
  ProductImage,
  ProductTitle,
  ProductWrapper,
  Unit,
} from './styled';
import productImage from 'assets/images/productItem.png';

const ProductItem = () => {
  return (
    <ProductWrapper>
      <ProductImage src={productImage} alt={'product image'}></ProductImage>
      <ProductTitle>
        Moisturizer Candle - 6 oz (Balance Collection) for Skin Care- Ultra
      </ProductTitle>
      <PriceWrapper>
        <Price>$28</Price>
        <Unit>USD</Unit>
      </PriceWrapper>
    </ProductWrapper>
  );
};

export default ProductItem;
