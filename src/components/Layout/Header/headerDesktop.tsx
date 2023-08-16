import {
  ActionWrapper,
  DotLogo,
  LogoTile,
  LogoWrapper,
  MenuItem,
  MenuList,
  MenuWrapper,
  Wrapper,
} from './styled';
import { BagIcon, ProfileIcon, SearchIcon } from 'components';
import React from 'react';

const HeaderDesktop = () => {
  const [isBackground, setIsBackground] = React.useState(false);

  const controlTabBar = () => {
    if (typeof window !== 'undefined') {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > 100) {
        setIsBackground(true);
      } else {
        setIsBackground(false);
      }
    }
  };

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlTabBar);

      return () => {
        window.removeEventListener('scroll', controlTabBar);
      };
    }
  }, []);

  return (
    <Wrapper isBackground={isBackground}>
      <LogoWrapper>
        <DotLogo></DotLogo>
        <LogoTile>Cosmetics Store</LogoTile>
      </LogoWrapper>
      <MenuWrapper>
        <MenuList>
          <MenuItem>PRODUCTS</MenuItem>
          <MenuItem>ABOUT</MenuItem>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>
            <ActionWrapper>
              <SearchIcon width={24} height={24} color={'none'}></SearchIcon>
              <BagIcon width={24} height={24} color={'none'}></BagIcon>
              <ProfileIcon width={24} height={24} color={'none'}></ProfileIcon>
            </ActionWrapper>
          </MenuItem>
        </MenuList>
      </MenuWrapper>
    </Wrapper>
  );
};

export default HeaderDesktop;
