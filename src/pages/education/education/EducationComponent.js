import React from 'react';
import EducationList from './EducationList';
import './index.css';
import MainTitle from '../../../components/title/MainTitle';
import { servicesData } from '../../../API/data';

const EducationComponent = () => {
  return (
    <section className="education" id="education">
      <div>
        <MainTitle simpleText="simpleMy" colorText="colorEducation" />
        <div className="services-list">
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
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
