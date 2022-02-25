import React from 'react'
import "./footer.css"
import Post from '../Posts/Post'

const Footer = () => {
  return (
    <>
<div className="black-section">
    <div className="whole-footer">
        <div className="about-us">
<h3 style={{color:"white"}}>ABOUT US</h3>
<img style={{maxWidth:"350px"}}src={require('./../../assets/about.jpg')} alt="" />
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus cum numquam necessitatibus facere rerum?</p>
        </div>
        <div className="latest-post">
        <h3 style={{color:"white"}}>LATEST POST</h3>

<Post/>
<Post/>
<Post/>
        </div>
        <div className="links">
            <div className='qlink' >
            <h3 style={{color:"white"}}>QUICK LINKS</h3>
<ul >
    <li>
       <a className='ql'  href="">About Us</a> 
    </li>
    <li>
       <a className='ql' href="">Travel</a> 
    </li>
    <li>
       <a  className='ql'href="">Adventure</a> 
    </li>
    <li>
       <a className='ql' href="">Courses</a> 
    </li>
    <li>
       <a  className='ql'href="">Categories</a> 
    </li>
</ul>
            </div>
            <div className="socials-link">
<h3 style={{color:"white"}}>
    SOCIAL   
</h3>
<a   className="sl" href=""><span className=" fab fa-twitter "></span>Twitter</a>
<a  className="sl" href=""><span className=" fab fa-facebook "></span>Facebook</a>
<a className="sl" href=""><span className=" fab fa-instagram "></span>Instagram</a>
<a  className="sl"href=""><span className=" fab fa-vimeo "></span>Vimeo</a>
<a className="sl" href=""><span className=" fab fa-youtube "></span>Youtube</a>
<a className="sl" href=""><span className=" fab fa-snapshot "></span>Snapshot</a>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Footer