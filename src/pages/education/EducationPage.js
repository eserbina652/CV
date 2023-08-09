import React from 'react';
import EducationComponent from './education/EducationComponent';
import SkillsComponent from './skills/SkillsComponent';
import TopBtn from '../../components/buttons/goToTop/TopBtn';

const EducationPage = () => {
  return (
    <div>
      <EducationComponent />
      <SkillsComponent />
      <TopBtn />
    </div>
  );
};

export default EducationPage;
