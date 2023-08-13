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

export const BurgerWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  animation: slideLeft 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
`;
