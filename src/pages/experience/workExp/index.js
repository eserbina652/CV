import styled from 'styled-components';

export const WorkSection = styled.section`
  background-color: ${(props) => props.theme.colors.bg.sectionsBg};
  padding: 140px 10%;
  @media (max-width: 1024px) {
    padding-bottom: 100px;
  }
`;
export const WorkExpList = styled.ul`
  list-style: none;
  gap: 30px;
  display: flex;
  max-height: min-content;
  width: 100%;
  justify-content: space-around;
  font-size: 22px;
  & .main-li-title {
    font-size: 24px;
    font-family: 'LobsterRegular', sans-serif;
  }
  & li:nth-child(odd) {
    animation: slide-in-left 1s ease-in-out forwards;
  }

  & li:nth-child(even) {
    animation: slide-in-right 1s ease-in-out forwards;
  }
  & li {
    position: relative;
    padding: 20px 0 20px 40px;
    color: ${(props) => props.theme.colors.fonts.primary};
  }

  & a {
    font-weight: bold;
    color: #fd40eb;
    cursor: pointer;
  }

  & a:hover {
    transition: 0.5s ease-in-out;
    color: white;
  }

  & li:before {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.bg.headerBg};
    content: '';
    left: 0;
    transition: 0.3s ease-in-out;
    top: 27px;
  }

  & li:after {
    position: absolute;
    border-left: 1px dotted ${(props) => props.theme.colors.fonts.primary};
    width: 1px;
    bottom: -12px;
    content: '';
    left: 3px;
    top: 48px;
  }

  & .hovered-li:hover:before {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.2);
  }

  & li:last-child:after {
    content: none;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
    & .main-li-title {
      font-size: 22px;
    }
  }
  @media (max-width: 1024px) {
    font-size: 18px;
    & li {
      padding-left: 25px;
    }
    & .main-li-title {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    font-size: 16px;
    max-height: fit-content;
    justify-content: flex-start;
    margin: 0 auto;
    & li {
      padding-bottom: 10px;
    }
    & .main-li-title {
      font-size: 18px;
    }
  }
`;
