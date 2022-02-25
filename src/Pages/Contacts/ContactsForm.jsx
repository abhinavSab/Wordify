import React from 'react'
import RightPosts from '../../components/Posts/RightPosts'
import "./contacts.css"

const ContactsForm = () => {
  return (
      <>
  <div className="container ">
    <div className='contact-me'>
        <div className="heading">
            <h1>Contact Me</h1>
        </div>
        <div className="Forms">
            <form action="">
                <div className="form1">
                    <label className="label" htmlFor="">Name</label>
                    <input className='input-form' type="text" />
                </div>
                <div className="form1">
                    <label className="label" htmlFor="">Phone</label>
                    <input  className='input-form'type="text" />
                </div>
                <div className="form1">
                    <label  className="label"htmlFor="">Email</label>
                    <input className='input-form' type="text" />
                </div>
                <div className="form1">
                    <label className="label" htmlFor="">Write Message</label>
                    <input  className='input-form message'type="text" />
                </div>
                <input type="submit" value="Send Message" class="readbio "></input>
            </form>
        </div>
    </div>
    <RightPosts name="David Craig" img={process.env.PUBLIC_URL + `/Imgs/bio.jpg`}/>
      
    </div>
      </>
  
  )
}

export default ContactsForm
