import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import Banner1Desktop from './Banner1Desktop';
import Banner1Mobile from './Banner1Mobile';

const Banner1 = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <Banner1Desktop></Banner1Desktop>,
    [DEVICES.TABLET]: <Banner1Mobile></Banner1Mobile>,
    [DEVICES.MOBILE]: <Banner1Mobile></Banner1Mobile>,
  };
  return renderElement[appDevice.device];
};

export default Banner1;
