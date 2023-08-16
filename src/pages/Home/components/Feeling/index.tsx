import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import FeelingDesktop from './FeelingDesktop';
import FeelingMobile from './FeelingMobile';

const Feeling = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <FeelingDesktop></FeelingDesktop>,
    [DEVICES.TABLET]: <FeelingMobile></FeelingMobile>,
    [DEVICES.MOBILE]: <FeelingMobile></FeelingMobile>,
  };

  return renderElement[appDevice.device];
};

export default Feeling;
