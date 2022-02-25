import React from "react";
import "./Cards.css";
import Square from "./Cards/Square";
import RightPosts from "./RightPosts";


const Posts = (props) => {
 
  return (
    <>
      <section className="whole-section">
        <h1 className="lp">{props.title}</h1>
        <div className="section">
          <div className="post_container">
            <Square/>
          </div>
         
          <RightPosts name={props.name}img={props.img}/>
        </div>
      </section>
    </>
  );
};

export default Posts;
