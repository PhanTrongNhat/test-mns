import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 603px;
  position: relative;
  background-color: ${p => p.theme.colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

export const ContentWrapper = styled.div`
  width: 493px;
  left: 235px;
`;

export const SmallTitle = styled.h5`
  font-size: ${p => p.theme.font.size.sm};
  line-height: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.regular};
  font-family: ${p => p.theme.font.familyTitle};
`;

export const Title = styled.h2`
  margin-top: 8px;
  font-size: 48px;
  line-height: 60px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-family: ${p => p.theme.font.familyTitle};
`;

export const DescriptionWrapper = styled.div`
  margin-top: 8px;
`;

export const Description = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 21px;
  font-size: ${p => p.theme.font.size.md};
`;

export const CreamWrapper = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImageBanner = styled.img`
  height: 522px;
  width: 348px;
`;

export const ImageCircle = styled.img`
  height: 180px;
  width: 180px;
  position: absolute;
  top: -10px;
  right: 0px;
`;

export const Button = styled.button`
  padding: 17px 47px;
  background-color: ${p => p.theme.colors.primary.main};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 19px;
  font-size: ${p => p.theme.font.size.sm};
  margin-top: 8px;
  border: none;
  cursor: pointer;
`;
