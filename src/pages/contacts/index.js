import styled from 'styled-components';

export const Contact = styled.section`
  align-items: center;
  gap: 3rem;
  width: 100%;
  padding: 100px 10% 0 10%;
  display: flex;
  min-height: 90svh;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  & ::selection {
    background-color: rgba(0, 0, 0, 0);
  }
  & h6 {
    margin: 0;
    font-size: 20px;
    color: #fd40eb;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 3;
    font-weight: lighter;
  }
  @media (max-width: 768px) {
    min-height: 91svh;
    & h6 {
      font-size: 18px;
    }
  }
  @media (max-width: 480px) {
    justify-content: center;
    padding-bottom: 20px;
    min-height: 95svh;
    & h6 {
      font-size: 14px;
    }
  }
`;

export const ContactText = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.fonts.primary};
  font-size: 20px;
  & ::selection {
    background-color: rgba(0, 0, 0, 0);
  }
  & p {
    position: relative;
    z-index: 3;
    transition: 0.1s;
    opacity: 0;
    line-height: 30px;
    margin-bottom: 2rem;
    animation: slideBottom 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
  }
  & h4 {
    position: relative;
    z-index: 3;
    transition: 0.1s;
    opacity: 0;
    animation: slideTop 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
    margin: 15px 0;
    font-weight: 600;
  }
  & li {
    color: ${(props) => props.theme.colors.fonts.primary};
    font-weight: 400;
  }
  @media (max-width: 768px) {
    & p {
      font-size: 16px;
    }
  }
  @media (max-width: 480px) {
    & h4 {
      font-size: 16px;
    }
    & p {
      font-size: 14px;
      line-height: 20px;
    }
    & li {
      font-size: 14px;
    }
  }
`;
