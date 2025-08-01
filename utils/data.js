import React from 'react'
import './index.css'
import { works } from './utils/data'
import WorkCard from './components/WorkCard'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motion'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const 
 = () => {
  return (
    <div>
      <Helmet>
        <title>Godswill Portfolio</title>
        <meta name="description" content="Portfolio of Godswill showcasing works and projects." />
      </Helmet>
      <section className='works'>
        <div className='worksImgs'>
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <WorkCard work={work} />
            </motion.div>
          ))}
        </div>
      </section>
      <div className='worksBtn'>
        <a href="https://chido2024.github.io/chido-portfolio/" target="_blank" rel="noopener noreferrer">
          <button className="worksBtn">See More</button>
        </a>
        <a href="https://chido2024.github.io/chido-portfolio/" target="_blank" rel="noopener noreferrer">
          <button className="worksBtn">See More</button>
        </a>
      </div>
      <div className='worksBtn'>
        <a href="https://chido2024.github.io/chido-portfolio/" target="_blank" rel="noopener noreferrer">
          <button className="worksBtn">See More</button>
        </a>
        <a href="https://chido2024.github.io/chido-portfolio/" target="_blank" rel="noopener noreferrer">
          <button className="worksBtn">See More</button>
        </a>
      </div>
    </div>
  )
}

export default 
