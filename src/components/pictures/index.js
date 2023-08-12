import styled from 'styled-components';

export const AvatarWrap = styled.div`
  padding: 7px;
  height: fit-content;
  width: fit-content;
  border-radius: 50%;
  border: 5px solid white;
  filter: drop-shadow(0 0 10px #fd40eb);
  box-shadow:
    0 0 5px ${(props) => props.theme.colors.fonts.primary},
    0 0 25px ${(props) => props.theme.colors.fonts.primary},
    0 0 50px ${(props) => props.theme.colors.fonts.primary},
    0 0 200px ${(props) => props.theme.colors.fonts.primary};
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;
