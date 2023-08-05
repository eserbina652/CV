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
  WindowsSvg,
} from '../../assets/image/svg';
import React from 'react';

export const skillsArrayData = [
  'Dynamic & responsive website design.',
  'State management for seamless experiences.',
  'Maintainable UI component crafting.',
  'Effective troubleshooting of complex issues.',
  'Adapting projects to latest standards.',
  'Collaborating within diverse teams.',
  'Version control for efficient code management.',
  'Deploying applications for accessibility.',
  'Proficiency across multiple operating systems.',
  'Visually captivating functional websites.',
  'Smooth navigation implementation.',
  'Prioritizing performance & accessibility.',
  'Secure data handling & API interactions.',
];

export const socialMediaData = [
  {
    svg: (isHovered) => (
      <TelegramSvg color={isHovered ? '#091b2a' : '#00eeff'} />
    ),
    href: 'https://t.me/evserbina',
    id: 1,
  },
  {
    svg: (isHovered) => (
      <LinkedInSvg color={isHovered ? '#091b2a' : '#00eeff'} />
    ),
    href: 'https://www.linkedin.com/in/yevheniia-shcherbina-628517259/',
    id: 2,
  },
  {
    svg: (isHovered) => <GitHubSvg color={isHovered ? '#091b2a' : '#00eeff'} />,
    href: 'https://github.com/eserbina652',
    id: 3,
  },
  {
    svg: (isHovered) => <GMailSvg color={isHovered ? '#091b2a' : '#00eeff'} />,
    href: 'mailto:eserbina652@gmail.com',
    id: 4,
  },
];

export const skillsData = [
  {
    skill: 'HTML',
    additionalClass: 'html',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'CSS/SCSS',
    additionalClass: 'css',
    svgComponent: <CssSvg />,
  },
  {
    skill: 'JavaScript/TypeScript',
    additionalClass: 'js',
    svgComponent: <JsSvg />,
  },
  {
    skill: 'React/ReactNative',
    additionalClass: 'react',
    svgComponent: <ReactSvg />,
  },
  {
    skill: 'React-Router',
    additionalClass: 'rRouter',
    svgComponent: <RoutingSvg />,
  },
  {
    skill: 'Redux/Redux-Toolkit/MobX',
    additionalClass: 'redux',
    svgComponent: <ReduxSvg />,
  },
  {
    skill: 'jQuery/RTK Query/Axios',
    additionalClass: 'query',
    svgComponent: <JQuerySvg />,
  },
  {
    skill: 'Jest/E2e/Integration',
    additionalClass: 'tests',
    svgComponent: <TestSvg />,
  },
  {
    skill: 'Formik',
    additionalClass: 'formik',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Yup',
    additionalClass: 'yup',
    svgComponent: <ErrorsSvg />,
  },
  {
    skill: 'i18n',
    additionalClass: 'i18n',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Styled-components',
    additionalClass: 'styled',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Git',
    additionalClass: 'git',
    svgComponent: <GitSvg />,
  },
  {
    skill: 'GitHub',
    additionalClass: 'gitHub',
    svgComponent: <GitHubSvg />,
  },
  {
    skill: 'Linux',
    additionalClass: 'linux',
    svgComponent: <UndefSvg />,
  },
  {
    skill: 'Windows',
    additionalClass: 'windows',
    svgComponent: <WindowsSvg />,
  },
];

export const servicesData = [
  {
    svg: <School />,
    title: 'Architecture and construction',
    secondTitle: 'Junior Specialist 2017-2021',
    description:
      'Dnipro State College of Construction - Assembly Technologies and Architecture, Ukraine',
    id: 1,
  },
  {
    svg: <CompScienceSvg />,
    title: 'Computer Science',
    secondTitle: 'Will be Bachelor in 2024',
    description:
      'Prydniprovska State Academy of Civil Engineering and Architecture, Ukraine',
    id: 2,
  },
  {
    svg: <BrainSvg />,
    title: 'Mentorship with a Senior Developer',
    secondTitle: 'Frontend developer student since 2021',
    description:
      'I have acquired solid theoretical and hands-on expertise through 1.5 years of education. I am capable of building desktop websites with React and developing applications using React Native.',
    id: 3,
  },
];

export const portfolioData = [
  {
    img: FID,
    title: 'Gatsby/React Developer',
    description:
      'This site was created for the Ukrainian public organization "FID". My role in project was making the component layOut with custom routing/localization for further integration with the backend)',
    technology: 'Gatsby.js/React, JavaScript, react-icon-cloud, i18n',
    id: 1,
    commercial: true,
    hrefToWebSite: 'https://fid-freelance-a7lz7ry6j-eserbina652.vercel.app/',
    hrefToGitHub:
      "It was a commercial project, I don't have right to share the code",
  },
  {
    img: RickAndMorty,
    title: 'Vanilla JavaScript Developer',
    description:
      'In this project you will see the one-page website with two sections, in the first one, there is an interactive table, and in the second a list of characters received from the server against which the Canvas is located.',
    technology: 'HTML, CSS, JavaScript Vanilla',
    id: 2,
    commercial: false,
    hrefToWebSite: 'https://eserbina652.github.io/JS-RickAndMorty-Project/',
    hrefToGitHub: 'https://github.com/eserbina652/JS-RickAndMorty-Project',
  },
  {
    img: ShopPinkStore,
    title: 'React.ts Developer',
    description:
      'In this project, authorization will be required to enter: username: kminchelle / password: 0lelplR. On the sections page, you can enjoy the Canvas, as well as go to the store to buy various goods, and many more interesting things, go and try)',
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
    text: 'Upper-Intermediate',
    presents: 'English',
    id: '5',
  },
  {
    text: 'Intermediate',
    presents: 'Polish',
    id: '6',
  },
  {
    text: 'Native Speaker',
    presents: 'Ukrainian',
    id: '7',
  },
  {
    text: 'Native Speaker',
    presents: 'Russian',
    id: '8',
  },
];

export const professionalSkillsData = [
  {
    presents: '95%',
    text: 'Team Work',
    id: 1,
  },
  {
    presents: '90%',
    text: 'Communication',
    id: 2,
  },
  {
    presents: '95%',
    text: 'Fast learning',
    id: 3,
  },
  {
    presents: '85%',
    text: 'Problem Solving',
    id: 4,
  },
];
