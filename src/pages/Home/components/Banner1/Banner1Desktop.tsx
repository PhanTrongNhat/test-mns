import {
  Button,
  ContentWrapper,
  Description,
  DescriptionWrapper,
  Title,
  Wrapper,
} from './styled';
import Background from 'assets/images/HomeBanner1.png';

const Banner1Desktop = () => {
  return (
    <Wrapper background={Background}>
      <ContentWrapper>
        <Title>
          "Take another step towards beauty with high quality cosmetics from our
          shop!"
        </Title>
        <DescriptionWrapper>
          {' '}
          <Description>
            "Discover your natural beauty today! Shop now for quality cosmetic
            products in our shop and experience an amazing transformation in
            your skin. Click here to buy now!"
          </Description>
        </DescriptionWrapper>

        <Button>Shop now</Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Banner1Desktop;
