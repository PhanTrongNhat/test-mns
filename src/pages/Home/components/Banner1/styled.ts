import styled from 'styled-components';
import Background from 'assets/images/HomeBanner1.png';

export const Wrapper = styled.div<{ background: string }>`
  background-color: ${p => p.theme.colors.secondary.light};
  height: 700px;
  position: relative;
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-position: right;
`;

export const ContentWrapper = styled.div`
  width: 534px;
  position: absolute;
  left: 148px;
  bottom: 109px;
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.font.weight.bold};
  font-size: 32px;
  line-height: 45px;
  font-family: ${p => p.theme.font.familyTitle};
`;

export const DescriptionWrapper = styled.div`
  width: 389px;
  margin-top: 16px;
`;

export const Description = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.md};
  line-height: 21px;
`;

export const Button = styled.button`
  margin-top: 16px;
  background-color: ${p => p.theme.colors.primary.main};
  width: 175px;
  height: 56px;
  border: none;
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.md};
  cursor: pointer;
`;
