import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import RenewSectionDesktop from './RenewSectionDesktop';
import RenewSectionMobile from './RenewSectionMobile';

const RenewSection = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <RenewSectionDesktop></RenewSectionDesktop>,
    [DEVICES.TABLET]: <RenewSectionMobile></RenewSectionMobile>,
    [DEVICES.MOBILE]: <RenewSectionMobile></RenewSectionMobile>,
  };
  return renderElement[appDevice.device];
};

export default RenewSection;
