import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  overflow: hidden;
  width: 100%;
  padding: 12px 0px;

  p {
    min-width: 376px;
    font-size: 20px;
    line-height: 26px;
    font-weight: ${p => p.theme.font.weight.bold};
  }
`;

export const TextWrapper = styled.div``;
