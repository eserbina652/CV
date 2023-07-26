import React from 'react';
import './index.css'
import Project from "./Project";
import {FID} from "../../../assets/image";

const portfolioData = [
    {
        img: FID,
        title: 'React Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aperiam consequatur cupiditate ea est, eum exercitationem labore minus quisquam repellat! At distinctio explicabo odio officiis placeat quos, ratione repellendus velit?',
        id: 1
    },
    {
        img: FID,
        title: 'React Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aperiam consequatur cupiditate ea est, eum exercitationem labore minus quisquam repellat! At distinctio explicabo odio officiis placeat quos, ratione repellendus velit?',
        id: 2
    },
    {
        img: FID,
        title: 'React Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aperiam consequatur cupiditate ea est, eum exercitationem labore minus quisquam repellat! At distinctio explicabo odio officiis placeat quos, ratione repellendus velit?',
        id: 3
    }
]
const PortfolioSection = () => {
    return (
        <section>
            <div id='portfolio'>
                <div className="main-text" id='project'>
                    <h2>Latest<span>Project</span></h2>

                    <div className="portfolio-content">
                        {portfolioData.map(project => (
                            <Project key={project.id}
                                     img={project.img}
                                     title={project.title}
                                     description={project.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
