import styled from 'styled-components';

export const Title = styled.div`
  & h2 {
    font-family: 'LobsterRegular', sans-serif;!important;
  }
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin-bottom: 70px;
  color: ${(props) => props.theme.colors.fonts.primary};
  position: relative;
  z-index: 20;
  opacity: 0;
  animation: slideTop 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
  transition: 2.5s ease;
  & span {
    color: #fd40eb;
    font-family: 'LobsterRegular', sans-serif;
  }

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
