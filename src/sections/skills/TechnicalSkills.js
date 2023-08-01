import React from 'react';
import SkillsBar from './SkillsBar';
import {
  CssSvg,
  ErrorsSvg,
  GitHubSvg,
  GitSvg,
  JQuerySvg,
  JsSvg,
  ReactSvg,
  ReduxSvg,
  RoutingSvg,
  SkillsHTMLSvg,
  TestSvg,
  UndefSvg,
  WindowsSvg,
} from '../../assets/image';
import './index.css';

const skillsData = [
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
const TechnicalSkills = () => {
  return (
    <div className="container" id="skills">
      <h1 className="heading1">Technical Skills</h1>
      <div className="Technical-bars">
        {skillsData.map((skillEl, i) => (
          <SkillsBar
            svgComponent={skillEl.svgComponent}
            additionalClass={skillEl.additionalClass}
            skill={skillEl.skill}
            key={i.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
