import React from 'react';
import styled from 'styled-components';
import projects from '../data/projects';


const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f1e4b8;
`;

const ProjectItem = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  background-color: #fffbf5b8;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const ProjectTitle = styled.h2`
  color: #333333;
`;

const Description = styled.p`

`;

const Technologies = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TechnologyItem = styled.li`
  margin-right: 10px;

`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

function Projects() {
  return (
    <ProjectsContainer id='projects'><h1>My projects</h1>
      {projects.map((project, index) => (
        <ProjectItem key={index}>
          {index % 2 === 0 ? (
            <>
              <ImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
              </ImageContainer>
              <TextContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
                <Technologies>
                  {project.technologies.map((tech, index) => (
                    <TechnologyItem key={index}>{tech}</TechnologyItem>
                  ))}
                </Technologies>
                <div>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</Link>
                  <span> | </span>
                  <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</Link>
                </div>
              </TextContainer>
            </>
          ) : (
            <>
              <TextContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
                <Technologies>
                  {project.technologies.map((tech, index) => (
                    <TechnologyItem key={index}>{tech}</TechnologyItem>
                  ))}
                </Technologies>
                <div>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</Link>
                  <span> | </span>
                  <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</Link>
                </div>
              </TextContainer>
              <ImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
              </ImageContainer>
            </>
          )}
        </ProjectItem>
      ))}
    </ProjectsContainer>

  );
}

export default Projects;

