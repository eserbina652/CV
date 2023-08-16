import React from 'react';
import EducationList from './EducationList';
import MainTitle from '../../../components/title/MainTitle';
import { servicesData } from '../../../API/data';
import { Education, ServiceContainer } from '../index';

const EducationComponent = () => {
  return (
    <Education>
      <div>
        <MainTitle simpleText="simpleMy" colorText="colorEducation" />
        <ServiceContainer>
          {servicesData.map((service) => (
            <EducationList
              mentor={service.mentor}
              secondTitle={service.secondTitle}
              title={service.title}
              description={service.description}
              key={service.id}
            />
          ))}
        </ServiceContainer>
      </div>
    </Education>
  );
};

export default EducationComponent;
