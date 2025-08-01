import React from 'react'
import assets from "../../assets/github.jpg"


const Works = () => {
  return (
    <section id="Works">
       <h2 className='worksTitle'>My Portfolio</h2>
          <span className='worksDesc'>
     here are basic projects that i have done so far with the use of HTML,CSS,JAVASCRIPT and REACT and it been a long journey.
     i am still learning and improving my skills.
          </span>
          <section className="worksImages">
        <img src={assets} alt="works1" className="worksImg"/>
        <img src={assets} alt="works2" className="worksImg" />
        <img src={assets} alt="works3" className="worksImg" />
        <img src={assets} alt="works4" className="worksImg" />
        <img src={assets} alt="works5" className="worksImg" />
        <img src={assets} alt="works6" className="worksImg" />
          </section>
      <a href="https://chido2024.github.io/chido-portfolio/" target="_blank" rel="noopener noreferrer">
          <button className="worksBtn">See More</button>
        </a>
    </section>
  )
}

export default Works