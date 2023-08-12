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
              secondTitle={service.secondTitle}
              href={service.href}
              title={service.title}
              description={service.description}
              key={service.id}
              svgComponent={service.svg}
            />
          ))}
        </ServiceContainer>
      </div>
    </Education>
  );
};

export default EducationComponent;
