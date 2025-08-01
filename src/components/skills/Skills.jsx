import React from 'react'
import uiDesign from "../../assets/ui design.jpg"


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">What i do</span>
      <span className="skillDesc">I am a front end developer that specializes in UI/UX design and development</span>
      <div className="skillsBars">
        <img src={uiDesign} alt="uiDesign" className="skillsBarimg" width={70} />
        <div className="skillsBarText">
          <h2>UI/UX Design</h2>
          <p>Designing user interfaces and user experiences</p>
        </div>
        </div>
    </section>
   );
}

export default Skills