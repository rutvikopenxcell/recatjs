import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import axios from 'axios';

const Join = () => {
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);
     const history = useNavigate();
     const handleSubmit=(e)=>{
     e.preventDefault();
     const name = e.target.name.value
     const email = e.target.email.value
     const text = e.target.message.value
     console.log(name)
     axios.post('http://localhost:4000/users/signin', { name: name, email: email}).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      history('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
    }
    const handleChange=(e)=>{
      e.preventDefault();
      const name=e.target.name;
      const value=e.target.value;
      console.log(value)
      
      // let error='',errors='';
      // if (name==="name" && value.trim()===''){
      //   error=<strong style={{color:'red'}}>*{name} is required</strong>;
      // }
      // if(name==="age" && this.state.name.trim()===''){
      //   error=<strong style={{color:'red'}}>*Name is required</strong>;
      // }
      // if (value<=0){
      //   errors=<strong style={{color:'red'}}>*Age should be greater than 0</strong>;
      // }
      // this.setState({errorName:error,errorAge:errors});
      // this.setState({
      //   [name]:value
      // });
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
                     <input type="text" class="mail_text_1" placeholder="Name" name="name" onChange={handleChange}/>
                     <input type="text" class="mail_text_1" placeholder="Email" name="email" onChange={handleChange}/>
                     <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="message" onChange={handleChange}></textarea>
                     <button>Submit</button>
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