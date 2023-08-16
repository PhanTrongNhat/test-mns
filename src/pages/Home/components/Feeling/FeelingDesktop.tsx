import { FeelingItemsWrapper, Wrapper } from './styled';
import background from 'assets/images/FeelingBackground.png';
import FeelingItem from './FeelingItem';
import { DeStressorIcon, NourishingIcon, ReliefIcon } from 'components';

const FeelingDesktop = () => {
  return (
    <Wrapper background={background}>
      <FeelingItemsWrapper>
        <FeelingItem
          title={'Relief'}
          icon={
            <ReliefIcon width={120} height={130} color={'none'}></ReliefIcon>
          }
          description={
            'Helps to relieve dry and cracked skin, psoriasis, eczema, cracked heels and rough cuticle.'
          }
        ></FeelingItem>{' '}
        <FeelingItem
          title={'Nourishing'}
          icon={
            <NourishingIcon
              width={120}
              height={130}
              color={'none'}
            ></NourishingIcon>
          }
          description={
            'Your skin is left feeling nourished, hydrated, soft and rejuvenated after application.'
          }
        ></FeelingItem>
        <FeelingItem
          title={'De-stressor'}
          icon={
            <DeStressorIcon
              width={120}
              height={130}
              color={'none'}
            ></DeStressorIcon>
          }
          description={
            'Helpful in relieving stress from the body and gives a soothing feeling.'
          }
        ></FeelingItem>
      </FeelingItemsWrapper>
    </Wrapper>
  );
};

export default FeelingDesktop;
