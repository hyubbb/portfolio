import React, { useState } from "react";
import { Aside, List, Main, ProjectBox, ProjectLists } from "./projects.styles";
import {
  boardApp,
  noteApp,
  pokemonApp,
  shopApp,
} from "../../../assets/imgs/logo";
import Lang from "./Lang";
import { projects1, projects2 } from "./projText";

const Projects = () => {
  const [projList, setProjList] = useState([...projects1, ...projects2]);

  const projectHandler = (projects) => {
    setProjList(projects);
  };

  return (
    <>
      <Main>
        <Aside>
          <List
            color='green'
            onClick={() => projectHandler([...projects1, ...projects2])}
          >
            All
          </List>
          <List color='red' onClick={() => projectHandler(projects1)}>
            mini project
          </List>
          <List color='orange' onClick={() => projectHandler(projects2)}>
            클론코딩
          </List>
        </Aside>
        <ProjectLists>
          <h3>Project</h3>
          <div className='mainBox'>
            {projList?.map((project, index) => (
              <ProjectBox key={index}>
                <img src={project.img[Object.keys(project.img)[0]]} />
                <div className='title'>
                  {project.title}
                  <Lang language={project.lang} />
                </div>
                <button className='hoverMenu'>
                  <a href={project.siteUrl} target='__blank'>
                    site
                  </a>
                  <a href={project.gitUrl} target='__blank'>
                    github
                  </a>
                </button>
              </ProjectBox>
            ))}
          </div>
        </ProjectLists>
      </Main>
    </>
  );
};

export default Projects;
