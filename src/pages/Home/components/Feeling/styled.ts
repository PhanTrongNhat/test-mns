import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
  height: 800px;
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

// export const ContentWrapper = styled.div`
//   width: 100%;
// `;

export const FeelingItemWrapper = styled.div`
  width: 343px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.white};
  gap: 24px;
`;

export const FeelingItemImage = styled.img``;

export const FeelingItemImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(254, 174, 174, 0.4);
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

export const FeelingItemTitle = styled.h5`
  font-size: 24px;
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 30px;
  font-family: ${p => p.theme.font.familyTitle};
`;

export const FeelingItemDescription = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 19px;
  font-size: ${p => p.theme.font.size.sm};
  text-align: center;
`;

export const FeelingItemsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8%;
  z-index: 1;

  div:first-child {
    text-transform: uppercase;
  }
`;
