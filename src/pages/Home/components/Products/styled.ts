import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0px;
  background-color: ${p => p.theme.colors.creamLight};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 779px;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 48px;
  line-height: 60px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-family: ${p => p.theme.font.familyTitle};
`;

export const SmallTitle = styled.h5`
  font-family: ${p => p.theme.font.familyTitle};
  font-size: ${p => p.theme.font.size.sm};
  color: ${p => p.theme.colors.warningOrange};
  text-transform: uppercase;
`;

export const Description = styled.p`
  text-align: center;
  font-size: ${p => p.theme.font.size.md};
  line-height: 21px;
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  gap: 8px;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductTitle = styled.h5`
  font-size: ${p => p.theme.font.size.sm};
  line-height: 19px;
  font-weight: ${p => p.theme.font.weight.bold};
  text-align: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Price = styled.p`
  color: ${p => p.theme.colors.warningOrange};
  font-size: ${p => p.theme.font.size.md};
  line-height: 21px;
  font-weight: ${p => p.theme.font.weight.bold};
`;

export const Unit = styled.p`
  font-size: ${p => p.theme.font.size.md};
  line-height: 21px;
  font-weight: ${p => p.theme.font.weight.bold};
`;
