import React from 'react';
import EducationList from './EducationList';
import { School, BrainSvg, CompScienceSvg } from '../../../assets/image';
import './index.css';

const servicesData = [
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
    secondTitle: 'Will be Bachelor in 2021-2024',
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
const EducationComponent = () => {
  return (
    <section className="education">
      <div className="services" id="education">
        <div className="container">
          <h1 className="sub-title">
            My <span>Education</span>
          </h1>
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
      </div>
    </section>
  );
};

export default EducationComponent;
