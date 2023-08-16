import styled from 'styled-components';

export const LatestText = styled.div`
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  width: 100%;
  bottom: 0;
  min-height: 5vh;
  padding: 50px 0 20px 0;
  color: ${(props) => props.theme.colors.fonts.primary};
  & p {
    font-family: 'LobsterRegular', sans-serif;
    position: relative;
    z-index: 3;
    width: 100%;
    text-align: center;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    & p {
      font-size: 12px;
    }
  }
  @media (max-width: 480px) {
    padding: 20px 10% 10px 10%;
  }
`;
