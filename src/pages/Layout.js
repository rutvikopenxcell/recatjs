import React, { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import '../css/loader.css';
import logo from '../images/logo.png';
import Spinner from 'react-bootstrap/Spinner';


const Layout = () => {
   const [loading, setLoading] = useState('flex');
   console.log(loading)
   // useEffect(() => {
   //    setLoading('flex');
   //    document.getElementsByClassName("loader-container")[0].style.display = loading;
   //    setTimeout(() => {
   //       setLoading('none');
   //       document.getElementsByClassName("loader-container")[0].style.display = loading;
   //    }, 2000);
   // }, []);
   return (
      <>
         {/* <div className="loader-container">
            <div className="spinner"></div>
         </div> */}
         <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand" /><a href="index.html"><img src={logo} /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/donate">Donate</Link>
                     </li>
                     <li className="nav-item"> 
                        <Link className="nav-link" to="/news">News</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact Us</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/mission">Our Mission</Link>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="search_icon"><a href="#"><img src="images/search-icon.png" /></a></div>
                     <button className="donate_btn" type="submit">Donate Now</button>
                  </form>
               </div>
            </nav>
            <Outlet />
            <div className="footer_section layout_padding">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="footer_logo"><img src="images/footer-logo.png" /></div>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-3">
                        <h4 className="footer_taital">NAVIGATION</h4>
                        <div className="footer_menu_main">
                           <div className="footer_menu_left">
                              <div className="footer_menu">
                                 <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="donate.html">Donate</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div className="footer_menu_right">
                              <div className="footer_menu">
                                 <ul>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="news.html">News</a></li>
                                    <li><a href="mission.html">Our Mission</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-3">
                        <h4 className="footer_taital">NEWS</h4>
                        <p className="footer_text">Generators on the Internet</p>
                        <p className="footer_text">Tend to repeat predefined</p>
                        <p className="footer_text">Chunks as necessary, making</p>
                     </div>
                     <div className="col-sm-6 col-md-6 col-lg-3">
                        <h4 className="footer_taital">address</h4>
                        <p className="footer_text">Ave NW, Washington</p>
                        <p className="footer_text">+01 1234567890</p>
                        <p className="footer_text">demo@gmail.com</p>
                     </div>
                  </div>
                  <div className="footer_section_2">
                     <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-3">
                           <div className="social_icon">
                              <ul>
                                 <li><a href="#"><img src="images/fb-icon.png" /></a></li>
                                 <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
                                 <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
                                 <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-9">
                           <input type="text" className="address_text" placeholder="Enter your Enail" name="text" />
                           <button type="button" className="get_bt">SUBSCRIBE</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default Layout;