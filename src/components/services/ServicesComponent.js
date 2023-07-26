import React from 'react';
import ServicesList from "./ServicesList";
import {CodeSVG} from "../../assets/image";
import './index.css'

const servicesData = [
    {
        svg: <CodeSVG/>,
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum dolore doloribus error facere facilis id iusto molestiae nisi officiis, provident quasi quia quo repellat rerum sequi suscipit! At, corporis necessitatibus. Cupiditate hic impedit ipsa laborum modi molestiae necessitatibus quia reiciendis rerum soluta. Libero maxime porro recusandae suscipit tempora! Distinctio!',
        href: '#',
        id: 1,
    },{
       svg: <CodeSVG/>,
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum dolore doloribus error facere facilis id iusto molestiae nisi officiis, provident quasi quia quo repellat rerum sequi suscipit! At, corporis necessitatibus. Cupiditate hic impedit ipsa laborum modi molestiae necessitatibus quia reiciendis rerum soluta. Libero maxime porro recusandae suscipit tempora! Distinctio!',
        href: '#',
        id: 2,
    },{
        svg: <CodeSVG/>,
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum dolore doloribus error facere facilis id iusto molestiae nisi officiis, provident quasi quia quo repellat rerum sequi suscipit! At, corporis necessitatibus. Cupiditate hic impedit ipsa laborum modi molestiae necessitatibus quia reiciendis rerum soluta. Libero maxime porro recusandae suscipit tempora! Distinctio!',
        href: '#',
        id: 3,
    },
]
const ServicesComponent = () => {
    return (
        <section>
            <div className="services" id='services'>
                <div className="container">
                    <h1 className='sub-title'>
                        My <span>Services</span>
                    </h1>
                    <div className="services-list">
                        {servicesData.map(service => (
                            <ServicesList
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

export default ServicesComponent;
