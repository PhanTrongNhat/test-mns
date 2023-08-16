import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import MissionBannerDesktop from './MissionBannerDesktop';
import MissionBannerMobile from './MissionBannerMobile';

interface MissionBannerProps {
  title: string;
  smallTitle: string;
  description: string;
  bannerImage: string;
  bannerImageCircle?: string;
  buttonTitle?: string;
}

const MissionBanner = ({
  title,
  smallTitle,
  description,
  bannerImage,
  bannerImageCircle,
  buttonTitle,
}: MissionBannerDesktop) => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <MissionBannerDesktop
        title={title}
        smallTitle={smallTitle}
        description={description}
        bannerImage={bannerImage}
        bannerImageCircle={bannerImageCircle}
        buttonTitle={buttonTitle}
      ></MissionBannerDesktop>
    ),
    [DEVICES.TABLET]: <MissionBannerMobile></MissionBannerMobile>,
    [DEVICES.MOBILE]: <MissionBannerMobile></MissionBannerMobile>,
  };
  return renderElement[appDevice.device];
};

export default MissionBanner;
