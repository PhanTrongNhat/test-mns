import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ProductDesktop from './ProductDesktop';
import ProductMobile from './ProductMobile';

const Products = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ProductDesktop></ProductDesktop>,
    [DEVICES.TABLET]: <ProductMobile></ProductMobile>,
    [DEVICES.MOBILE]: <ProductMobile></ProductMobile>,
  };
  return renderElement[appDevice.device];
};

export default Products;
