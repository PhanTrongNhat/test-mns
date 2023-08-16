import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.creamLight};
`;

export const TopWrapper = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomWrapper = styled.div<{ background: string }>`
  background-image: url(${p => p.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 482px;
`;

export const BottomContentWrapper = styled.div`
  gap: 7%;
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ListWrapper = styled.div``;

export const ListItemTitle = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: ${p => p.theme.font.weight.medium};
`;

export const ListItem = styled.p`
  text-transform: uppercase;
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 26px;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8px;
`;

export const SignUpWrapper = styled.div`
  min-width: 328px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignUpTitle = styled.p`
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 26px;
  text-transform: uppercase;
`;

export const SignUpOption = styled.select`
  width: 328px;
  height: 56px;
  border: 1px solid #121212;
  padding: 17px 24px;
  background: none;
  -webkit-appearance: none;

  option {
    font-size: ${p => p.theme.font.size.sm};
    font-weight: ${p => p.theme.font.weight.regular};
    line-height: 19px;
    text-transform: uppercase;
  }
`;

export const SignUpOptionWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;

export const TopContentWrapper = styled.div`
  width: 642px;
  display: flex;
  justify-content: end;
  position: relative;
`;

export const SubImage = styled.img`
  width: 169px;
  height: 200px;
  position: absolute;
  left: 0px;
  top: -26px;
`;

export const CenterContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const MainImage = styled.img`
  width: 349px;
  height: 195px;
`;

export const TopTitle = styled.h2`
  text-transform: uppercase;
  font-size: ${p => p.theme.font.size.lg};
  font-weight: ${p => p.theme.font.weight.medium};
  line-height: 26px;
  margin-bottom: 24px;
  margin-left: 30px;
`;

export const TextSide = styled.p`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: ${p => p.theme.font.weight.medium};
  line-height: 26px;
`;

export const MainImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`;
