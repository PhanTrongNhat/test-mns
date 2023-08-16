import {
  Content,
  ContentWrapper,
  Description,
  ProductsWrapper,
  ProductWrapper,
  SmallTitle,
  Title,
  Wrapper,
} from './styled';
import ProductItem from './ProductItem';

const ProductsDesktop = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <SmallTitle>Best picks</SmallTitle>
          <Title>Our products</Title>
          <Description>
            Cosmetics store moisturizer is rich blend of Soy Oil, Shea Butter,
            and Coconut Oil which the skin requires. The candle flickers
            beautifully as it melts into sensual natural oils. It’s exactly what
            you need, what you’ve been yearning for all day. Our product are
            made from food-grade Soy and Coconut wax sourced in the USA.
          </Description>
        </Content>
      </ContentWrapper>
      <ProductsWrapper>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </ProductsWrapper>
    </Wrapper>
  );
};

export default ProductsDesktop;
