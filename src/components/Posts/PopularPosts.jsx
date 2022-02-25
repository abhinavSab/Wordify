import React from 'react'
import Post from './Post'

const PopularPosts = () => {
  return (
    <>
        <h3 className='pp'>Popular Posts</h3>
        <hr />
        <div className="posts">
<Post/>
<Post/>
<Post/>
        </div>
        <div className="categories">
            <h3 className="pp">Categories</h3>
            <hr />

            <ul className='ul-category'>
                <li  className='list-style'>
                    <a href="">Food  <span className='num1'>(15)</span></a>
                </li>
                <li className='list-style'>
                    <a href="">Travel <span className='num2'>(133)</span></a>
                </li>
                <li className='list-style'>
                    <a href="">Lifestyle <span className='num3'>(45)</span></a>
                </li>
                <li className='list-style'>
                    <a href="">Buisness <span className='num4'>(55)</span></a>
                </li>
                <li className='list-style'>
                    <a href="">Adventure <span className='num5'>(45)</span></a>
                </li>
            </ul>
        </div>
        <div className="Tags">
            <h3 className="pp">Tags</h3>
            <hr />
<div className="btn-cat">
    <button className='btn-tags'>Travel</button>
    <button className='btn-tags'>Adventure</button>
    <button className='btn-tags'>Food</button>
    <button className='btn-tags'>Lifestyle</button>
    <button className='btn-tags'>Buisness</button>
    <button className='btn-tags'>Freelancing</button>
    <button className='btn-tags'>Travel</button>
    <button className='btn-tags'>Adventure</button>
    <button className='btn-tags'>Food</button>
    <button className='btn-tags'>Lifestyle</button>
    <button className='btn-tags'>Buisness</button>
    <button className='btn-tags'>Freelancing</button>
</div>
        </div>
    </>
  )
}

export default PopularPosts