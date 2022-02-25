import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/header'
import Posts from '../../components/Posts/Posts'
import Slider from '../../components/Slider/Slider'

const HomePage = () => {
  return (
    <>
        
        <Slider/>
        <Posts title="Latest Posts" name="David Craig" img={process.env.PUBLIC_URL + `/Imgs/bio.jpg`}/>
        
    </>
  )
}

export default HomePage