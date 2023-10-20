import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/common';
import axios from 'axios';

const Volunteersjoin = () => {
    const [sucessmesg, setMessage] = useState(null);
    const [error, setError] = useState(null);
    //error message show when click on submit
    const [mailerror, setMailError] = useState(false);
    const [nameerror, setNameError] = useState(false);
    const history = useNavigate();

    //api call
    const url = "http://127.0.0.1:8000/api/state/list";
    const url2 = "http://127.0.0.1:8000/api/state/list";

    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data.state));
    };
    useEffect(() => {
        fetchInfo();
    }, []);

    console.log(data)
    //console.log(data.state.map((name) => name.id));

    //api call end
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        console.log(name, email)

        if (!email) {
            console.log('enter in email')
            setMailError(true);
        }
        if (!name) {
            console.log('enter in name')
            setNameError(true);
        }

        console.log(mailerror)
        if (name && email) {
            axios.post('http://127.0.0.1:8000/api/contact/store', { name: name, email: email }).then(response => {
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
        console.log(name,value)

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
    }
    return <>

        <div className="contact_section layout_padding">
            <div className="container">
                <div className="contact_section_2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mail_section_1">
                                <h1 className="contact_taital">Register</h1>
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
                                        <input type="text" className="mail_text_1" placeholder="Email" name="email" onChange={handleChange} />
                                        {mailerror && <span style={{ color: "red" }}>
                                            *email* is mandatory </span>}
                                    </div>

                                    <div>
                                        <input type="text" className="mail_text_1" placeholder="Email" name="email" onChange={handleChange} />
                                        {mailerror && <span style={{ color: "red" }}>
                                            *email* is mandatory </span>}

                                    </div>
                                    <select name="cars" id="cars" className="mail_text_1" form="carform" onChange={handleChange}>

                                        {data.map((datao, index) => {
                                            return (
                                                <option value="audi">{datao.name}</option>
                                            );
                                        })}

                                    </select>
                                   <br/>
                                    <button className="btn btn-danger">Register</button>
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