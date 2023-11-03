import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Image1 from '../images/icon-1.png';
import Image2 from '../images/icon-2.png';
import Image3 from '../images/icon-3.png';
import axios from 'axios';
import { Statelist, Citylist,Volunteerjoin } from '../Api'

const Home = () => {

    const [sucessmesg, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const [mailerror, setMailError] = useState(false);
    const [nameerror, setNameError] = useState(false);
    const [mobileerror, setMobileError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const mobile = e.target.mobile.value
        if (!email) {
            setMailError(true);
        }
        if (!name) {
            setNameError(true);
        }
        if (!mobile) {
            setNameError(true);
        }

        if (name && email) {
            axios.post(Volunteerjoin, { name: name, email: email, mobile: mobile }).then(response => {
                // setUserSession(response.data.token, response.data.user);
                setMessage('store');
                console.log('njhkj')
                //history('/dashboard');
            }).catch(error => {
                console.log(error.response.status)
                if (error.response.status === 401) setError(error.response.data.message);
                else if(error.response.status === 422) setError(error.response.data.message);
                else setError("Something went wrong. Please try again later.");
            });
        }
    }
    return <>
        <div className="banner_section layout_padding">
            <div className="container">
              
            </div>
            <div className="donation_box">
                <h4 className="donation_taital">Contact For Donation</h4>
                <form onSubmit={handleSubmit} method="post">
                <div className="mail_box">
                    <input type="" className="mail_text" placeholder="Your Name" name="Your Name" />
                    <input type="" className="mail_text" placeholder="Email" name="Email" />
                    <input type="" className="mail_text" placeholder="Phone" name="Phone" />
                </div>
                <div className="send_bt"><a href="#">Send</a></div>
                </form>
            </div>
            <div className="fundraise_section">
                <div className="fundraise_section_main">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box_main">
                                <div className="icon_1"><img src={Image1} /></div>
                                <h4 className="volunteer_text">VOLUNTEERS</h4>
                                <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                <div className="join_bt"> <Link to="/volunteer/join">Join Now</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_main active">
                                <div className="icon_1"><img src={Image2} /></div>
                                <h4 className="volunteer_text">FUNDRAISE</h4>
                                <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                <div className="join_bt"><a href="#">Join Now</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_main">
                                <div className="icon_1"><img src={Image3} /></div>
                                <h4 className="volunteer_text">DONATION</h4>
                                <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                <div className="join_bt"><a href="#">Join Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};
export default Home;