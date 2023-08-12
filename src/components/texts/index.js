import styled from 'styled-components';

export const LatestText = styled.div`
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  width: 100%;
  position: static;
  bottom: 10px;
  padding: 50px 0 20px 0;
  color: ${(props) => props.theme.colors.fonts.primary};
  @media (max-width: 480px) {
    padding: 20px 10% 10px 10%;
  }
`;
