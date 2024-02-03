import React, { useState } from 'react';
import styled from 'styled-components';
import workExperience from '../data/workExperience';
import educationAndSkills from '../data/educationAndSkills';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap to the next line on smaller screens */
`;

const Button = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: ${({ active }) => (active ? '#ECB390' : '#f7d9c6')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InformationContainer = styled.div``;

const CurriculumHighlights = styled.div`
  margin-top: 15px;

  h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`;

const KeySkillsDeveloped = styled.div`
  margin-top: 15px;

  h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`;

function Experience() {
  const [activeWorkSection, setActiveWorkSection] = useState(workExperience[0].section);
  const [activeEducationSection, setActiveEducationSection] = useState(educationAndSkills.education[0].studies);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [skillDescription, setSkillDescription] = useState('');

  const { skills } = educationAndSkills;

  const renderWorkExperience = () => {
    return (
      <Section id="experience">
        <h1>My career path</h1>
        <h2>Work Experience</h2>
        <ButtonContainer>
          {workExperience.map((item, index) => (
            <Button
              key={index}
              active={activeWorkSection === item.section}
              onClick={() => setActiveWorkSection(item.section)}
            >
              {item.section}
            </Button>
          ))}
        </ButtonContainer>
        <InformationContainer>
          {workExperience
            .filter((item) => item.section === activeWorkSection)
            .map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
                <p>{item.startDate} - {item.endDate}</p>
                <p>{item.description}</p>
              </div>
            ))}
        </InformationContainer>
      </Section>
    );
  };

  const renderEducationAndSkills = () => {
    return (
      <Section>
        <h1>My learning path</h1>
        <h2>Education</h2>
        <ButtonContainer>
          {educationAndSkills.education.map((item, index) => (
            <Button
              key={index}
              active={activeEducationSection === item.studies}
              onClick={() => {
                setActiveEducationSection(item.studies);
                setSelectedSkill(null); // Reset selected skill when switching sections
              }}
            >
              {item.studies}
            </Button>
          ))}
        </ButtonContainer>
        <InformationContainer>
          {educationAndSkills.education
            .filter((item) => item.studies === activeEducationSection)
            .map((item, index) => (
              <div key={index}>
                <h3>{item.studies}</h3>
                <p>{item.degree}</p>
                <p>{item.institution}</p>
                <p>{item.location}</p>
                <p>{item.graduationYear}</p>
                <CurriculumHighlights>
                  <h4>Curriculum Highlights:</h4>
                  <ul>
                    {item.curriculumHighlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </CurriculumHighlights>
                <KeySkillsDeveloped>
                  <h4>Key Skills Developed:</h4>
                  <ul>
                    {item.keySkillsDeveloped.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </KeySkillsDeveloped>
              </div>
            ))}
        </InformationContainer>
        <h2>Skills</h2>
        <ButtonContainer>
          {skills.map((skill, i) => (
            <Button
              key={i}
              active={selectedSkill === skill.skill}
              onClick={() => {
                setSelectedSkill(skill.skill);
                setSkillDescription(skill.description); // Set the description when skill button is clicked
              }}
            >
              {skill.skill}
            </Button>
          ))}
        </ButtonContainer>
        <InformationContainer>        
          {selectedSkill && (
            <div>
              <h3>{selectedSkill}</h3>
              <p>{skillDescription}</p> {/* Display the skill description */}
            </div>
          )}
        </InformationContainer>
      </Section>
    );
  };

  return (
    <SectionContainer>
      {renderWorkExperience()}
      {renderEducationAndSkills()}
    </SectionContainer>
  );
}

export default Experience;
