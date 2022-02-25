import React from 'react'
import "./../../components/Posts/Cards.css";
import { useSelector } from "react-redux";
import PopularPosts from '../../components/Posts/PopularPosts';
import "./about.css"
import Rectangle from '../../components/Posts/Cards/Rectangle';



const AboutPost = (props) => {
 const ans = useSelector((state) => state.posts);
  return (
    <>
     <section className="whole-section">
     <div className="big-section">

    
     <div className="top-head">
      <h2>Hi! There! I'm Craig David</h2>
        <img src="https://preview.colorlib.com/theme/wordify/images/ximg_6.jpg.pagespeed.ic.TdhDDzcn7N.webp" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ad veniam fuga consequatur omnis. Temporibus accusantium quo nulla tempora reprehenderit itaque officia optio ducimus molestias.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ad veniam fuga consequatur omnis. Temporibus accusantium quo nulla tempora reprehenderit itaque officia optio ducimus molestias.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ad veniam fuga consequatur omnis. Temporibus accusantium quo nulla tempora reprehenderit itaque officia optio ducimus molestias.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ad veniam fuga consequatur omnis. Temporibus accusantium quo nulla tempora reprehenderit itaque officia optio ducimus molestias.</p>
      </div>
        <h1 className="lp">{props.title}</h1>
        <div className="section">
          <div className="post_container">
            <Rectangle/>
          
          </div>
          <div className="section2">
            <form action="#" className="search2">
              <input
                type="text"
                id="sec_search"
                placeholder="Type keyword and hit enter"/>
              <span className=" searchicon fa fa-search"></span>
            </form>

           {/* <div className="img-bio"></div> */}
           <img className="img-bio" src={ props.img} alt="" />
            <div className="bio">
            
              <h2 className="name">{props.name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                dolorem nemo magnam asperiores consequuntur aspernatur!
              </p>
              <button className="readbio">Read my Bio</button>
              <div className="so-btn">
                <a href="#!" className="btn">
                  <span className="s fab fa-twitter "></span>
                </a>
                <a href="#!" className="btn">
                  <span className="s fab fa-facebook "></span>
                </a>
                <a href="#!" className="btn">
                  <span className="s fab fa-instagram "></span>
                </a>
                <a href="#!" className="btn">
                  <span className="s fab fa-youtube "></span>
                </a>
              </div>
            </div>
            <PopularPosts/>
          </div>
        </div>
        </div>
      </section>
    
      
    </>
  );
};

export default AboutPost
