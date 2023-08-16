import React from 'react';
import { Wrapper } from './styled';

interface FreeShippingDesktopProps {
  itemCount: number;
}

const FreeShippingDesktop = ({ itemCount }: FreeShippingDesktopProps) => {
  const [arrayItem, setArrayItem] = React.useState([0]);

  React.useEffect(() => {
    const array = new Array(5);

    setArrayItem([...array]);
  }, [itemCount]);

  return (
    <Wrapper>
      {arrayItem?.map((item, index) => {
        return <p key={index}> FREE SHIPPING FOR ORDER OVER $200</p>;
      })}
    </Wrapper>
  );
};

export default FreeShippingDesktop;
