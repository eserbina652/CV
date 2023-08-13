import styled from 'styled-components';

export const Education = styled.section`
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  align-items: center;
  height: fit-content;
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

export const ServiceContainer = styled.div`
  justify-content: space-between;
  display: flex;
  grid-gap: 40px;
  flex-wrap: wrap;

  & div {
    background-color: transparent;
    padding: 40px;
    font-size: 13px;
    font-weight: 13;
    border-radius: 20px;
    transition:
      background-color 0.5s,
      transform 0.5s;
    box-shadow:
      1px 1px 20px ${(props) => props.theme.colors.fonts.primary},
      1px 1px 40px ${(props) => props.theme.colors.bg.headerBg};
  }

  & div i {
    font-size: 50px;
    margin-bottom: 30px;
  }

  & div h2 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  &div a {
    text-decoration: none;
    color: #000;
    font-size: 12px;
    margin-top: 20px;
    display: inline-block;
  }

  & div:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 1200px) {
    & div h2 {
      font-size: 24px;
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
    & div {
      max-width: 680px;
      justify-content: center;
    }
    & div h2 {
      font-size: 22px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 30px;
    &div h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    & div h2 {
      font-size: 16px;
    }
  }
`;

export const Service = styled.div`
  color: ${(props) => props.theme.colors.fonts.primary};
  max-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p {
    font-size: 18px;
  }
  & h2 {
    font-size: 24px;
  }
  & h4 {
    margin-bottom: 1rem;
    color: #fd40eb;
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    & p {
      font-size: 16px;
    }
    & h2 {
      font-size: 22px;
    }
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    & p {
      font-size: 14px;
    }
    & h2 {
      font-size: 20px;
    }
    & h4 {
      font-size: 12px;
    }
  }
`;

export const ProfSkillsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 40px;
  padding: 40px 0 0 0;
  box-shadow:
    1px 1px 20px ${(props) => props.theme.colors.fonts.primary},
    1px 1px 40px ${(props) => props.theme.colors.bg.headerBg};
  @media (max-width: 768px) {
    padding: 20px;
    flex-wrap: wrap;
    height: 66vw;
  }
  @media (max-width: 480px) {
    height: 70vw;
  }
`;

export const SVGText = styled.text`
  fill: ${(props) => props.theme.colors.fonts.primary};
  font-size: 30px;
  @media (max-width: 1200px) {
    font-size: 27px;
  }
  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const Text = styled.div`
  text-shadow: 0 0 15px #fd40eb;
  color: ${(props) => props.theme.colors.fonts.primary};
  font-size: 24px;
  width: max-content;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Skills = styled.section`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 130px 10%;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
`;

export const TechnicalBar = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  list-style: none;
  counter-reset: li;
  & li:nth-child(odd) {
    animation: slide-in-left 1s ease-in-out forwards;
  }

  & li:nth-child(even) {
    animation: slide-in-right 1s ease-in-out forwards;
  }

  & li {
    align-items: center;
    border-radius: 10px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.bg.sectionsBg};
    box-shadow:
      1px 1px 20px ${(props) => props.theme.colors.fonts.primary},
      1px 1px 40px ${(props) => props.theme.colors.bg.headerBg};
    position: relative;
    margin-bottom: 1.5em;
    font-size: 24px;
    border: 3px solid #fd40eb;
    padding: 0.6em;
    color: ${(props) => props.theme.colors.fonts.primary};
  }
  & li:before {
    position: absolute;
    top: -0.7em;
    padding-left: 0.6em;
    padding-right: 0.6em;
    font-size: 18px;
    font-weight: bold;
    color: #fd40eb;
    background: ${(props) => props.theme.colors.fonts.primary};
    border-radius: 50%;
    counter-increment: li;
    content: counter(li);
  }
  @media (max-width: 1200px) {
    & li {
      font-size: 22px;
    }
  }
  @media (max-width: 1024px) {
    & li:before {
      font-size: 14px;
    }
    & li {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    & li {
      font-size: 18px;
      margin-bottom: 0;
    }
  }
  @media (max-width: 480px) {
    & li:before {
      font-size: 12px;
    }
  }
  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  //@keyframes rotate {
  //  0% {
  //    transform: rotate(0deg);
  //  }
  //  100% {
  //    transform: rotate(360deg);
  //  }
  //}
`;
