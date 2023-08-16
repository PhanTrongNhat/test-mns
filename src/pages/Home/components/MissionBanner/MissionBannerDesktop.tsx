import {
  Button,
  ContentWrapper,
  CreamWrapper,
  Description,
  DescriptionWrapper,
  ImageBanner,
  ImageCircle,
  ImageWrapper,
  SmallTitle,
  Title,
  Wrapper,
} from './styled';

interface MissionBannerDesktop {
  title: string;
  smallTitle: string;
  description: string;
  bannerImage: string;
  bannerImageCircle?: string;
  buttonTitle?: string;
}

const MissionBannerDesktop = ({
  title,
  smallTitle,
  description,
  bannerImage,
  bannerImageCircle,
  buttonTitle,
}: MissionBannerDesktop) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SmallTitle>{smallTitle}</SmallTitle>
        <Title>{title}</Title>
        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
        {buttonTitle ? <Button>{buttonTitle}</Button> : <></>}
      </ContentWrapper>
      <CreamWrapper>
        <ImageWrapper>
          <ImageBanner src={bannerImage} alt={'banner image'}></ImageBanner>
          {bannerImageCircle ? (
            <ImageCircle
              src={bannerImageCircle}
              alt={'banner circle image'}
            ></ImageCircle>
          ) : (
            <></>
          )}
        </ImageWrapper>
      </CreamWrapper>
    </Wrapper>
  );
};

export default MissionBannerDesktop;
