import {
  BrainSvg,
  CompScienceSvg,
  CssSvg,
  ErrorsSvg,
  FID,
  GitHubSvg,
  GitSvg,
  GMailSvg,
  JQuerySvg,
  JsSvg,
  LinkedInSvg,
  ReactSvg,
  ReduxSvg,
  RickAndMorty,
  RoutingSvg,
  School,
  ShopPinkStore,
  SkillsHTMLSvg,
  TelegramSvg,
  TestSvg,
  UndefSvg,
  VercelSvg,
  WindowsSvg,
} from '../../assets/image/svg';
import React from 'react';
import HomePage from '../../pages/home/HomePage';
import EducationPage from '../../pages/education/EducationPage';
import PortfolioPage from '../../pages/portfolio/PortfolioPage';
import ContactSection from '../../pages/contacts/ContactSection';

export const skillsArrayData = [
  'skill1',
  'skill2',
  'skill3',
  'skill4',
  'skill5',
  'skill6',
  'skill7',
  'skill8',
  'skill9',
  'skill10',
  'skill11',
];

export const socialMediaData = [
  {
    svg: (isHovered) => (
      <TelegramSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />
    ),
    href: 'https://t.me/evserbina',
    id: 1,
  },
  {
    svg: (isHovered) => (
      <LinkedInSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />
    ),
    href: 'https://www.linkedin.com/in/yevheniia-shcherbina-628517259/',
    id: 2,
  },
  {
    svg: (isHovered) => <GitHubSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />,
    href: 'https://github.com/eserbina652',
    id: 3,
  },
  {
    svg: (isHovered) => <GMailSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />,
    href: 'mailto:eserbina652@gmail.com',
    id: 4,
  },
];

export const skillsData = [
  {
    skill: 'HTML',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'CSS/SCSS',
    svgComponent: <CssSvg />,
  },
  {
    skill: 'JavaScript/TypeScript',
    svgComponent: <JsSvg />,
  },
  {
    skill: 'React/ReactNative',
    svgComponent: <ReactSvg />,
  },
  {
    skill: 'React-Router',
    svgComponent: <RoutingSvg />,
  },
  {
    skill: 'Redux/Redux-Toolkit/MobX',
    svgComponent: <ReduxSvg />,
  },
  {
    skill: 'jQuery/RTK Query/Axios',
    svgComponent: <JQuerySvg />,
  },
  {
    skill: 'Jest/E2e/Integration',
    svgComponent: <TestSvg />,
  },
  {
    skill: 'Formik',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Yup',
    svgComponent: <ErrorsSvg />,
  },
  {
    skill: 'i18n',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Styled-components',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Git',
    svgComponent: <GitSvg />,
  },
  {
    skill: 'GitHub',
    svgComponent: <GitHubSvg />,
  },
  {
    skill: 'Vercel',
    svgComponent: <VercelSvg />,
  },
  {
    skill: 'npm/yarn',
    svgComponent: <GitSvg />,
  },
  {
    skill: 'ESLint/Prettier/Husky',
    svgComponent: <GitSvg />,
  },
  {
    skill: 'Linux',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Windows',
    svgComponent: <WindowsSvg />,
  },
];

export const servicesData = [
  {
    svg: <School />,
    title: 'educationTitle1',
    secondTitle: 'education1Title2',
    description: 'educationDescription1',
    id: 1,
  },
  {
    svg: <CompScienceSvg />,
    title: 'educationTitle2',
    secondTitle: 'education2Title2',
    description: 'educationDescription2',
    id: 2,
  },
  {
    svg: <BrainSvg />,
    title: 'educationTitle3',
    secondTitle: 'education3Title2',
    description: 'educationDescription3',
    id: 3,
  },
];

export const portfolioData = [
  {
    img: FID,
    title: 'Gatsby/React Developer',
    description: 'portfolioDescription1',
    technology: 'Gatsby.js/React, JavaScript, react-icon-cloud, i18n',
    id: 1,
    commercial: true,
    hrefToWebSite: 'https://fid-freelance-a7lz7ry6j-eserbina652.vercel.app/',
    hrefToGitHub: 'href1',
  },
  {
    img: RickAndMorty,
    title: 'Vanilla JavaScript Developer',
    description: 'portfolioDescription2',
    technology: 'HTML, CSS, JavaScript Vanilla',
    id: 2,
    commercial: false,
    hrefToWebSite: 'https://eserbina652.github.io/JS-RickAndMorty-Project/',
    hrefToGitHub: 'https://github.com/eserbina652/JS-RickAndMorty-Project',
  },
  {
    img: ShopPinkStore,
    title: 'React.ts Developer',
    description: 'portfolioDescription3',
    technology:
      'TypeScript, React(hooks)/React-Router, Redux-Toolkit, Yup, Styled-components, Formik',
    id: 3,
    commercial: false,
    hrefToWebSite: 'https://shop-pink-store.vercel.app/',
    hrefToGitHub: 'https://github.com/eserbina652/shopPink_Store/tree/master',
  },
];

export const languagesData = [
  {
    presents: 'B2+',
    text: 'lang1',
    id: 1,
  },
  {
    presents: 'B1',
    text: 'lang2',
    id: 2,
  },
  {
    presents: 'C2',
    text: 'lang3',
    id: 3,
  },
  {
    presents: 'C2',
    text: 'lang4',
    id: 4,
  },
];

export const routesData = [
  { path: '/', Component: <HomePage /> },
  { path: '/education', Component: <EducationPage /> },
  { path: '/portfolio', Component: <PortfolioPage /> },
  { path: '/contact', Component: <ContactSection /> },
];
