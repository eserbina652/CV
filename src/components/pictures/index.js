import styled from 'styled-components';

export const AvatarWrap = styled.div`
  padding: 7px;
  height: fit-content;
  width: fit-content;
  border-radius: 50%;
  border: 5px solid white;
  filter: drop-shadow(0 0 10px #fd40eb);
  transition: 0.1s;
  opacity: 0;
  animation: slideTop 1s cubic-bezier(0.18, 0.09, 0.32, 1.28) forwards;
  box-shadow:
    0 0 5px ${(props) => props.theme.colors.fonts.primary},
    0 0 25px ${(props) => props.theme.colors.fonts.primary},
    0 0 50px ${(props) => props.theme.colors.fonts.primary},
    0 0 200px ${(props) => props.theme.colors.fonts.primary};
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;
