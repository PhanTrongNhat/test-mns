import {
  BottomContentWrapper,
  BottomWrapper,
  CenterContentWrapper,
  ListItem,
  ListItemTitle,
  ListItemWrapper,
  ListWrapper,
  MainImage,
  MainImageWrapper,
  SignUpOption,
  SignUpOptionWrapper,
  SignUpTitle,
  SignUpWrapper,
  SubImage,
  TextSide,
  TopContentWrapper,
  TopTitle,
  TopWrapper,
  Wrapper,
} from './styled';
import backgroundImage from 'assets/images/BackgroundFooter.png';
import { ArrowRightIcon } from 'components';
import mainImage from 'assets/images/FoooterMainImage.png';
import subImage from 'assets/images/FooterSubImage.png';

const FooterDesktop = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopContentWrapper>
          <SubImage src={subImage} alt={'sub image'}></SubImage>
          <CenterContentWrapper>
            <TopTitle>Follow the feed</TopTitle>
            <MainImageWrapper>
              <MainImage src={mainImage} alt={'main image footer'}></MainImage>
              <TextSide>@thebeautynature</TextSide>
            </MainImageWrapper>
          </CenterContentWrapper>
        </TopContentWrapper>
      </TopWrapper>
      <BottomWrapper background={backgroundImage}>
        <BottomContentWrapper>
          <ListWrapper>
            <ListItemTitle>Cosmetics</ListItemTitle>
            <ListItemWrapper style={{ height: '68px' }}>
              <ListItem>@Cosmetics</ListItem>
              <ListItem>@Cosmetics@gmail.com</ListItem>
            </ListItemWrapper>
          </ListWrapper>
          <ListWrapper>
            <ListItemTitle>Product</ListItemTitle>
            <ListItemWrapper>
              <ListItem>Tonner</ListItem>
              <ListItem>Mask</ListItem>
              <ListItem>Shopall</ListItem>
            </ListItemWrapper>
          </ListWrapper>
          <ListWrapper>
            <ListItemTitle>Company</ListItemTitle>
            <ListItemWrapper>
              <ListItem>Our purpose</ListItem>
              <ListItem>FAQs</ListItem>
              <ListItem>Account</ListItem>
            </ListItemWrapper>
          </ListWrapper>
          <SignUpWrapper>
            <SignUpTitle>
              we ran out of time but you can sign up for more
            </SignUpTitle>
            <SignUpOptionWrapper>
              <SignUpOption id="sign-up">
                <option>EMAIL</option>
                <option>PHONE NUMBER</option>
              </SignUpOption>
              <ArrowRightIcon
                height={16}
                width={8}
                color={'none'}
              ></ArrowRightIcon>
            </SignUpOptionWrapper>
          </SignUpWrapper>
        </BottomContentWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

export default FooterDesktop;
