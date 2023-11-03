import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import axios from 'axios';
import { Statelist, Citylist,Volunteerjoin } from '../Api'

const Volunteersjoin = () => {
    const [sucessmesg, setMessage] = useState(null);
    const [error, setError] = useState(null);

    //error message show when click on submit
    const [mailerror, setMailError] = useState(false);
    const [nameerror, setNameError] = useState(false);
    const [cityStatus, setCityStatus] = useState(false);
    const [cityerror, setCityError] = useState(null);
    const [stateerror, setStateError] = useState(null);
    const [cityid, setCityId] = useState(1);
    //city and state value 
    const [cityvalue, setCityvalue] = useState(1);
    const [statevalue, serStatevalue] = useState(null);

    //const history = useNavigate();

    //api call
    const state = Statelist;
    const city = Citylist + cityid;

    const [data, setData] = useState([]);
    const [datacity, setCityData] = useState([]);
    const fetchInfo = async () => {
        return axios.get(state).then((res) => setData(res.data.state));
    };
    const fetchCity = () => {
        return axios.get(city).
            then((res) => setCityData(res.data.city));
    };
    useEffect(() => {
        fetchInfo();
        if (cityStatus) {
            fetchCity();
        }
    }, [cityid, cityvalue, statevalue]);


    //city api calling


    //end api

    //api call end
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const mobile = e.target.mobile.value
        
        const address1 = e.target.address1.value
        const address2 = e.target.address2.value
        const gender = e.target.gender.value
        const pincode = e.target.pincode.value

        console.log(address1,address2,gender)

        if (!email) {
            setMailError(true);
        }
        if (!name) {
            setNameError(true);
        }
        if (!statevalue) {
            setStateError(true);
        }
        // if (!statevalue) {
        //     setStateError(true);
        // }
        if (!mobile) {
            setNameError(true);
        }

        if (name && email) {
            axios.post(Volunteerjoin, { name: name, email: email, state: statevalue, city: cityvalue, mobile: mobile , pincode :pincode ,address2:address2,address1:address1}).then(response => {
                // setUserSession(response.data.token, response.data.user);
                setMessage('store');
                console.log('fdff')
                //history('/dashboard');
            }).catch(error => {
                console.log(error.response.data)
                if (error.response.status === 401) setError(error.response.data.message);
                else if (error.response.status === 422) setError(error.response.data);
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
        if (name == 'statename' && value == "0") {
            setCityStatus(false);
            serStatevalue(value)
            setStateError(true)
        }

        if (name == 'statename' && value != "0") {
            setCityId(value)
            setCityStatus(true);
            serStatevalue(value);
            setStateError(false)
        }
        if (name == 'city' && value != "") {
            setCityvalue(value);
        }

    }
    return <>

        <div className="contact_section layout_padding">
            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <h1 className="contact_taital">Register</h1>
                                <div className="errorform" style={{ color: "red" }}>{error}</div>
                                <div className="susscess" style={{ color: "green" }}>{sucessmesg}</div>
                                <form onSubmit={handleSubmit} method="post">
                                    <div>
                                        <input type="text" className="mail_text_1" placeholder="Name" name="name" onChange={handleChange} />
                                        {nameerror && <span style={{ color: "red" }}>
                                            *name* is mandatory </span>}
                                    </div>

                                    <div>
                                        <input type="text" className="mail_text_1" placeholder="Email" name="email" onChange={handleChange} />
                                        {mailerror && <span style={{ color: "red" }}>
                                            *email* is mandatory </span>}
                                    </div>
                                    <div>
                                        <input type="text" className="mail_text_1" placeholder="Address" name="address" onChange={handleChange} />
                                        {mailerror && <span style={{ color: "red" }}>
                                            *address* is mandatory </span>}
                                    </div>

                                    <div>
                                        <input type="number" className="mail_text_1" placeholder="Mobile" name="mobile" onChange={handleChange} />
                                        {mailerror && <span style={{ color: "red" }}>
                                            *mobile* is mandatory </span>}

                                    </div>

                                    <div>
                                        <input type="text" className="mail_text_1" placeholder="address" name="address1" onChange={handleChange} />
                                        {nameerror && <span style={{ color: "red" }}>
                                            *address* is mandatory </span>}
                                    </div>

                                    <div>
                                        <input type="text" className="mail_text_1" placeholder="address" name="address2" onChange={handleChange} />
                                    </div>

                                    <div>
                                        <input type="number" className="mail_text_1" placeholder="pincode" name="pincode" onChange={handleChange} />
                                        {nameerror && <span style={{ color: "red" }}>
                                            *pincode* is mandatory </span>}
                                    </div>
                                     
                                    <div>
                                    <input type="radio" id="male" name="gender" value="0" checked/>
                                    <label htmlFor="male">male</label>
                                    <input type="radio" id="female" name="gender" value="1" />
                                    <label htmlFor="female">female</label>
                                    </div>

                                    <select name="statename" id="statename" className="mail_text_1" form="carform" onChange={handleChange}>
                                        <option value="0">select state</option>

                                        {data.map((datao, index) => {
                                            return (
                                                <option value={datao.id}>{datao.name}</option>
                                            );
                                        })}

                                    </select>
                                    {stateerror && <span style={{ color: "red" }}>
                                        *state* is mandatory </span>}

                                    {cityStatus &&
                                        <select name="city" id="city" className="mail_text_1" form="carform" onChange={handleChange}>
                                            <option value="0">select city</option>
                                            {datacity.map((datao, index) => {
                                                return (
                                                    <option value={datao.id}>{datao.name}</option>
                                                );
                                            })}
                                        </select>}

                                    <br />
                                    <button style={{ marginTop: "20px" }} className="btn btn-danger">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Volunteersjoin;