import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  backdrop-filter: blur(50px);
  background-color: ${(props) => props.theme.colors.bg.headerBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;
