import styled from 'styled-components';

export const Wrapper = styled.div<{ isBackground: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 32px;
  position: fixed;
  width: 100%;
  z-index: 1000;

  ${p =>
    p.isBackground
      ? `
  background-color:${p.theme.colors.creamLight};
  border-bottom: 1px solid #8c8c8c;
  `
      : ''};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DotLogo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #0000001a;
  border-radius: 50%;
`;

export const LogoTile = styled.h1`
  font-size: ${p => p.theme.font.size.xl};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 45px;
  font-family: ${p => p.theme.font.familyTitle};
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const MenuItem = styled.li`
  font-size: 15px;
  font-weight: ${p => p.theme.font.weight.medium};
  cursor: pointer;
  line-height: 26px;

  &:nth-child(4) {
    cursor: unset;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 24px;

  svg {
    cursor: pointer;
  }
`;
