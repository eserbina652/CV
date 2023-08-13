import styled from 'styled-components';

export const About = styled.section`
  padding: 200px 10% 0 10%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  @media (max-width: 1200px) {
    padding-top: 100px;
  }
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    gap: 70px;
    flex-direction: column-reverse;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
`;

export const TextContainer = styled.div`
  line-height: 1.75;
  color: ${(props) => props.theme.colors.fonts.primary};
  & h4 {
    font-size: 29px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.fonts.primary};
    line-height: 1.7;
    margin: 15px 0 30px;
    transition: 0.1s;
    opacity: 0;
    animation: slideBottom 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
  }
  & ul li:nth-child(even) {
    transition: 1.5s;
    opacity: 0;
    animation: slideLeft 2s cubic-bezier(0.18, 1.5, 0.32, 1.28) forwards;
  }
  & ul li:nth-child(odd) {
    transition: 1.5s;
    opacity: 0;
    animation: slideRight 2s cubic-bezier(0.18, 1.5, 0.32, 1.28) forwards;
  }
  & ul {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.fonts.primary};
  }
  & li:last-child {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 1024px) {
    & h4 {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    & h4 {
      text-align: center;
    }
  }
`;

export const Home = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 70px 10% 0 10%;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  @media (max-width: 1024px) {
    padding-top: 7rem;
    height: auto;
  }
`;

export const HomeDescription = styled.div`
  width: 50%;
  color: ${(props) => props.theme.colors.fonts.primary};

  & h3 span {
    color: #fd40eb;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
