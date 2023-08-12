import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  margin-bottom: 70px;
  color: ${(props) => props.theme.colors.fonts.primary};
  position: relative;
  z-index: 20;

  & span {
    color: #fd40eb;
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
