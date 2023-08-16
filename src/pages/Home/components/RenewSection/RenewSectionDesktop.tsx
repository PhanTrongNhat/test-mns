import React from 'react';
import {
  ArrowWrapper,
  CarouselIconWrapper,
  CarouselWrapper,
  ContentWrapper,
  HeaderContent,
  HeaderTitle,
  HeaderTitleWrapper,
  ImageCarousel,
  ImageCarouselWrapper,
  LeftWrapper,
  List,
  ListItem,
  ListWrapper,
  RightContentWrapper,
  RightDescription,
  RightTitle,
  RightWrapper,
  SmallTitle,
  Wrapper,
} from './styled';
import girlImage from 'assets/images/GirlImage.png';
import { CarouselArrowLeftIcon, CarouselArrowRightIcon } from 'components';

const RenewSectionDesktop = () => {
  const [listImage, setListImage] = React.useState([1, 2, 3]);
  const [activeCarousel, setActiveCarousel] = React.useState(2);

  const handleNextCarousel = () => {
    setActiveCarousel((activeCarousel + 1) % 3);
  };

  const handleNextPreview = () => {
    if (activeCarousel == 0) {
      setActiveCarousel(2);
    } else {
      setActiveCarousel((activeCarousel - 1) % 3);
    }
  };

  return (
    <Wrapper>
      <HeaderTitleWrapper>
        <SmallTitle>The reviews</SmallTitle>
        <HeaderTitle>Healthy skin wasn’t built in a day.</HeaderTitle>
        <HeaderContent>
          Message our care team anytime - they have your back throught all the
          ups and downs
        </HeaderContent>
      </HeaderTitleWrapper>
      <ContentWrapper>
        <LeftWrapper>
          <CarouselWrapper>
            {listImage.map((item, index) => (
              <ImageCarouselWrapper active={index == activeCarousel}>
                <ImageCarousel
                  src={girlImage}
                  alt={'Image carousel'}
                ></ImageCarousel>
              </ImageCarouselWrapper>
            ))}

            {/*</ImageCarouselWrapper>*/}
            {/*<ImageCarouselWrapper>*/}
            {/*  <ImageCarousel*/}
            {/*    src={girlImage}*/}
            {/*    alt={'Image carousel'}*/}
            {/*  ></ImageCarousel>*/}
            {/*</ImageCarouselWrapper>*/}
            {/*<ImageCarouselWrapper>*/}
            {/*  <ImageCarousel*/}
            {/*    src={girlImage}*/}
            {/*    alt={'Image carousel'}*/}
            {/*  ></ImageCarousel>*/}
            {/*</ImageCarouselWrapper>*/}
            <ArrowWrapper>
              <CarouselIconWrapper onClick={() => handleNextPreview()}>
                <CarouselArrowLeftIcon
                  width={30}
                  height={30}
                ></CarouselArrowLeftIcon>
              </CarouselIconWrapper>
              <CarouselIconWrapper onClick={() => handleNextCarousel()}>
                <CarouselArrowRightIcon
                  width={24}
                  height={24}
                  styles={{ marginBottom: '6px' }}
                ></CarouselArrowRightIcon>
              </CarouselIconWrapper>
            </ArrowWrapper>
          </CarouselWrapper>
        </LeftWrapper>
        <RightWrapper>
          <RightContentWrapper>
            <RightTitle>JANNE</RightTitle>
            <ListWrapper>
              <List>
                <ListItem>CONCERN</ListItem>
                <ListItem>acne</ListItem>
                <ListItem>malasma</ListItem>
              </List>
              <List>
                <ListItem>PRODUCTS</ListItem>
                <ListItem>tretinoin formula 0,05%</ListItem>
                <ListItem>hydroquinone 4%</ListItem>
              </List>
            </ListWrapper>
            <RightDescription>
              “I have been using this product for a short time and I am really
              impressed. My skin is softer and looks healthier. I also love how
              this product doesn't irritate my skin and has a light scent. I
              will continue to use it and recommend it to friends..”
            </RightDescription>
          </RightContentWrapper>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default RenewSectionDesktop;
