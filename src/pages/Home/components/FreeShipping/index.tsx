import { useAppSelector } from 'app/hooks';
import React from 'react';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import FreeShippingDesktop from './FreeShippingDesktop';
import FreeShippingMobile from './FreeShippingMobile';

const FreeShipping = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const [itemCount, setItemCount] = React.useState(5);

  const handleWindowResize = () => {
    setItemCount(Math.ceil(window.innerWidth / 376));
  };

  React.useLayoutEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <FreeShippingDesktop itemCount={itemCount}></FreeShippingDesktop>
    ),
    [DEVICES.TABLET]: <FreeShippingMobile></FreeShippingMobile>,
    [DEVICES.MOBILE]: <FreeShippingMobile></FreeShippingMobile>,
  };

  return renderElement[appDevice.device];
};

export default FreeShipping;
