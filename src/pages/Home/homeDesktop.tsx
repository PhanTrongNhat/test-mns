import { Header } from 'components';
import { Banner1, Feeling, MissionBanner, Products } from './components';
import FreeShipping from './components/FreeShipping';
import MissionBannerImage from 'assets/images/MissionBannerImage.png';
import MissionBannerImageCircle from 'assets/images/MissionBannerImageCircle.png';
import OurStoryImage from 'assets/images/OurStoryImage.png';
import RenewSection from './components/RenewSection';

const HomeDesktop = () => {
  return (
    <>
      <Header></Header>
      <Banner1></Banner1>
      <MissionBanner
        title={'Our Mission'}
        smallTitle={'PURIFY & MOISTURIZE'}
        description={
          ' Cosmetics Store committed to quality products. Our mission is to\n' +
          '            provide rich moisturizer for your skin care needs such as cracked\n' +
          '            skin, cracked heels, skins need more extensive care.'
        }
        bannerImage={MissionBannerImage}
        bannerImageCircle={MissionBannerImageCircle}
      ></MissionBanner>
      <FreeShipping></FreeShipping>
      <Products></Products>
      <Feeling></Feeling>
      <MissionBanner
        title={'Our Story'}
        smallTitle={'ABOUT US'}
        description={
          'Cosmetics is an innovative skin care product company dedicated to providing superior products that can be used in beauty salons and at home. Thank you for visiting our online store and we hope you enjoy our products.'
        }
        bannerImage={OurStoryImage}
        buttonTitle={'Learn More'}
      ></MissionBanner>
      <RenewSection></RenewSection>
    </>
  );
};

export default HomeDesktop;
