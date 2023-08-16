import { createGlobalStyle } from 'styled-components';
import {
  LobsterRegularWoff,
  LobsterRegularWoff2,
  NutinoSansWoff,
  NutinoSansWoff2,
} from './assets/fonts';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NutinoSans', sans-serif;
    //font-family: 'LobsterRegular', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #adadad;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
  @font-face {
    font-family: 'LobsterRegular';
    src: url(${LobsterRegularWoff}) format('woff2'),
    url(${LobsterRegularWoff2}) format('woff');
  }
  @font-face {
    font-family: 'NutinoSans';
    src: url(${NutinoSansWoff2}) format('woff2'),
    url(${NutinoSansWoff}) format('woff');
  }
`;
