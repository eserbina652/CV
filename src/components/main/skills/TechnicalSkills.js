import React from 'react';
import SkillsBar from './SkillsBar';
import { CssSvg, SkillsHTMLSvg } from '../../../assets/image';
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
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'React',
    additionalClass: 'react',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'ReactNative',
    additionalClass: 'rNative',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'React-Router',
    additionalClass: 'rRouter',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Redux/Redux-Toolkit/MobX',
    additionalClass: 'redux',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'RTK Query/Axios',
    additionalClass: 'query',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Jest/E2e/Integration',
    additionalClass: 'tests',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Formik',
    additionalClass: 'formik',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Yup',
    additionalClass: 'yup',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'i18n',
    additionalClass: 'i18n',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Styled-components',
    additionalClass: 'styled',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Git',
    additionalClass: 'git',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Linux',
    additionalClass: 'linux',
    svgComponent: <SkillsHTMLSvg />,
  },
  {
    skill: 'Windows',
    additionalClass: 'windows',
    svgComponent: <SkillsHTMLSvg />,
  },
];
const TechnicalSkills = () => {
  return (
    <div className="container" id="skills">
      <h1 className="heading1">Technical TechnicalSkills</h1>
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
