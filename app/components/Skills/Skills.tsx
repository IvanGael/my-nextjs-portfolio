// Skills.tsx
import React from 'react';
import './skills_style.css';
import ProfessionalSkills from './ProfessionalSkills';


interface SkillsProps {
  skills: ProfessionalSkills[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {

    const getLevel = (level: string) => {
        const levelFloat = parseFloat(level);
        if(levelFloat < 0.25){
            return "Beginner";
        } else if(levelFloat < 0.5){
            return "Intermediate";
        } else if(levelFloat < 0.75){
            return "Advanced";
        } else if(levelFloat <= 1){
            return "Expert";
        }
    }

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{skill.skill}</span>
            {/* <span className="text-black">{getLevel(skill.level)}</span> */}
          </div>
          <div className="skill-bar">
            <div className={`skill-level bg-purple w-${getLevel(skill.level)?.toLocaleLowerCase()}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
