import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import axios from 'axios';

const Join = () => {
   const [sucessmesg, setMessage] = useState(null);
   const [error, setError] = useState(null);
   //error message show when click on submit
   const [mailerror, setMailError] = useState(false);
   const [nameerror, setNameError] = useState(false);
   const [texterror, setTextError] = useState(false);
   const history = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value
      const email = e.target.email.value
      const message = e.target.message.value
      console.log(name, email, message)

      if (!email) {
         console.log('enter in email')
         setMailError(true);
      }
      if (!name) {
         console.log('enter in name')
         setNameError(true);
      }
      if (!message) {
         console.log('enter in text')
         setTextError(true);
      }
      console.log(mailerror)
      if (message && name && email) {
         axios.post('http://127.0.0.1:8000/api/contact/store', { name: name, email: email, message: message }).then(response => {
            console.log(response)
            // setUserSession(response.data.token, response.data.user);
            setMessage('store');
            //history('/dashboard');
         }).catch(error => {
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
         });
      }
   }
   const handleChange = (e) => {
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;
      if (name === "name" && value === "") {
         setNameError(true);
      } else {
         setNameError(false);
      }

      if (name === "email" && value === "") {
         setMailError(true);
      } else {
         setMailError(false);
      }

      if (name === "message" && value === "") {
         setTextError(true);
      } else {
         setTextError(false);
      }
   }
   return <>
      <div class="contact_section layout_padding">
         <div class="container">
            <div class="contact_section_2">
               <div class="row">
                  <div class="col-md-12">
                     <div class="mail_section_1">
                        <h1 class="contact_taital">Contact Us</h1>
                        <form onSubmit={handleSubmit} method="post">
                           <div>
                              <input type="text" class="mail_text_1" placeholder="Name" name="name" onChange={handleChange} />
                              {nameerror && <span style={{ color: "red" }}>
                                 *name* is mandatory </span>}
                           </div>
                           <input type="text" class="mail_text_1" placeholder="Email" name="email" onChange={handleChange} />
                           {mailerror && <span style={{ color: "red" }}>
                              *email* is mandatory </span>}
                           <div>
                           <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="message" onChange={handleChange}></textarea>
                           {texterror && <span style={{ color: "red" }}>
                              *message* is mandatory </span>}
                              </div>
                           <button className="btn btn-danger">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>;
};

export default Join;