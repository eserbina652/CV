import styled from 'styled-components';

export const AStyled = styled.a`
  width: max-content;
  display: inline-block;
  padding: 12px 28px;
  background: #fd40eb;
  border-radius: 40px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.bg.sectionsBg};
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 600;
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: 2s;
  box-shadow: 0 0 25px #fd40eb;
  cursor: pointer;
  &:hover {
    box-shadow:
      0 0 5px #fd40eb,
      0 0 25px #fd40eb,
      0 0 50px #fd40eb,
      0 0 100px #fd40eb,
      0 0 200px #fd40eb;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
`;
