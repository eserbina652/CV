import React from 'react';
import EducationComponent from './education/EducationComponent';
import SkillsComponent from './skills/SkillsComponent';
import TopBtn from '../../components/buttons/goToTop/TopBtn';

const EducationPage = () => {
  return (
    <>
      <SkillsComponent />
      <EducationComponent />
      <TopBtn />
    </>
  );
};

export default EducationPage;
