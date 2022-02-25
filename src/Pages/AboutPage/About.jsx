import React from 'react'

import AboutPost from './AboutPost'

const About = () => {
  return (
      <>
         
         <AboutPost name="Meagan Smith" img={process.env.PUBLIC_URL + `/Imgs/bio.jpg`} title="My Latest Posts" />
       
     
      </>
   
  )
}

export default About