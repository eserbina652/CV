import styled from 'styled-components';

export const Contact = styled.section`
  cursor: auto;
  align-items: center;
  gap: 3rem;
  width: 100%;
  padding: 100px 10% 0 10%;
  display: flex;
  min-height: 90svh;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  @media (max-width: 768px) {
    min-height: 91svh;
  }
  @media (max-width: 480px) {
    justify-content: center;
    padding-bottom: 20px;
    min-height: 95svh;
  }
`;

export const ContactText = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.fonts.primary};
  cursor: auto;
  font-size: 20px;
  & ::selection {
    background-color: rgba(0, 0, 0, 0);
  }
  & p {
    cursor: auto;
    position: relative;
    z-index: 3;
    transition: 0.1s;
    opacity: 0;
    line-height: 30px;
    margin-bottom: 2rem;
    animation: slideBottom 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
  }
  & h4 {
    cursor: auto;
    position: relative;
    z-index: 3;
    transition: 0.1s;
    opacity: 0;
    animation: slideTop 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
    margin: 15px 0;
    font-weight: 600;
  }
  & li {
    cursor: auto;
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
