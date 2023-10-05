import React, { useState } from "react";

const Join = () => {
   
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(e.target.name.value)
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
                     <input type="text" class="mail_text_1" placeholder="Email" name="email"/>
                     <input type="text" class="mail_text_1" placeholder="Phone Number" name="phone"/>
                     <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="message"></textarea>
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