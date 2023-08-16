import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 708px;
  background-color: ${p => p.theme.colors.yellowLight};
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SmallTitle = styled.p`
  font-family: ${p => p.theme.font.familyTitle};
  font-size: ${p => p.theme.font.size.sm};
  line-height: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const HeaderTitle = styled.h2`
  font-size: 36px;
  line-height: 32px;
  font-weight: ${p => p.theme.font.weight.bold};
  font-family: ${p => p.theme.font.familyTitle};
`;

export const HeaderContent = styled.p`
  font-size: ${p => p.theme.font.size.sm};
  line-height: 19px;
  font-weight: ${p => p.theme.font.weight.regular};
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 112px;
  flex-grow: 1;
`;

export const RightWrapper = styled.div`
  flex: 5;
`;

export const RightContentWrapper = styled.div`
  width: 559px;
`;

export const RightDescription = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 26px;
  text-transform: uppercase;
  font-style: italic;
`;

export const ListWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  width: 206px;
`;

export const ListItem = styled.li`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: 15px;
  line-height: 26px;
  text-transform: uppercase;

  &:first-child {
    font-weight: ${p => p.theme.font.weight.semiBold};
    color: ${p => p.theme.colors.text.red};
    margin-bottom: 8px;
  }
`;

export const RightTitle = styled.h2`
  font-weight: ${p => p.theme.font.weight.medium};
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 16px;
`;

export const LeftWrapper = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 40px;
  bottom: 80px;
`;

export const ImageCarousel = styled.img`
  width: 265px;
  height: 296px;
`;

export const CarouselWrapper = styled.div`
  position: relative;

  div:nth-child(2) {
    position: relative;
  }

  div:first-child,
  div:nth-child(3) {
    position: absolute;

    img {
      position: relative;
    }

    //&:before {
    //  content: '';
    //  position: absolute;
    //  background-color: rgba(100, 97, 97, 0.35);
    //  z-index: 1;
    //  width: 100%;
    //  height: 100%;
    //}
  }

  div:first-child {
    transform: rotate(-20deg);
    bottom: 90px;
    right: 140px;
    img {
      width: 265px;
      height: 242px;
      object-fit: cover;
      position: center;
    }
  }

  div:nth-child(3) {
    transform: rotate(30deg);
    bottom: -120px;
    right: -160px;

    img {
      width: 265px;
      height: 280px;
      object-fit: cover;
      position: center;
    }
  }
`;

export const ImageCarouselWrapper = styled.div<{ active: boolean }>`
  opacity: 0.4;
  transition: opacity ease-in-out 1s;

  ${p =>
    p.active
      ? `  opacity: 1;
    z-index: 10;`
      : `   opacity: 0.4;
    z-index: 0;`}
`;
// animation: ${p =>
//     p.active ? CarouselActiveAnimation : CarouselDeActiveAnimation}
//   ease-in-out 2s;
export const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  left: -95px;
  bottom: 5px;
  gap: 20px;
  z-index: 100;

  svg {
    cursor: pointer;
  }

  div:first-child {
    position: unset;
    transform: unset;
  }
`;

export const CarouselIconWrapper = styled.div``;
