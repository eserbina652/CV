import styled from 'styled-components';

export const Portfolio = styled.section`
  width: 100%;
  min-height: 90svh;
  height: fit-content;
  padding: 130px 10% 0 10%;
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const Row = styled.div`
  color: white;
  display: flex;
  height: fit-content;
  max-height: 565px;
  overflow: hidden;
  gap: 40px;
  position: relative;
  border-radius: 58px;
  cursor: pointer;
  box-shadow:
    1px 1px 20px ${(props) => props.theme.colors.fonts.primary},
    1px 1px 40px ${(props) => props.theme.colors.bg.headerBg};

  & img {
    width: 100%;
    border-radius: 8px;
    display: block;
    transition: transform 0.5s;
  }
  &:hover img {
    transform: scale(1.1);
  }

  &:hover .layer {
    height: 100%;
  }
  @media (max-width: 1024px) {
    max-width: 45%;
  }
  @media (max-width: 768px) {
    max-width: 440px;
  }
`;
