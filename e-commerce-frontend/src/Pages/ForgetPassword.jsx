import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const ForgetPassword = () => {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleForget = async (e) => {
        try {

            e.preventDefault();
            let uppercase = 0;
            let lowercase = 0;
            let number = 0;
            if (details.password.length >= 8) {
                console.log(typeof details.password);


                for (let char of details.password) {
                    if (char === char.toLocaleLowerCase() && char != char.toLocaleUpperCase()) {
                        lowercase++;
                    } else if (char === char.toLocaleUpperCase() && char != char.toLocaleLowerCase()) {
                        uppercase++;
                    } else {
                        number++
                    }
                }

                if (uppercase >= 1 && lowercase >= 3 && number >= 1) {
                    const response = await axios.patch("http://localhost:5000/user/forget-password", details)
                    console.log(response);
                    console.log(number);
                    console.log(uppercase);
                    console.log(lowercase);

                    toast.success("password reset successfull")
                } else {
                    toast.warn("password contains min 1 uppercase ,min 3 lowercase ,min 1 number")
                }
            } else {
                toast.warn("password contains min 8 char")
            }

        } catch (error) {
            console.log(error);
            toast.error("failed to reset password")
        }

    }


    return (
        <div id='forget-form-container'>
            <form action="" onSubmit={handleForget}>
                <div className="row mx-3">
                    <div className="col-7">
                        <label htmlFor="">Enter Your Registered Email:</label>
                    </div>
                    <div className="col">
                        <input type="email" name='email' value={details.email} onChange={handleChange} required placeholder='Enter Email' />
                    </div>
                </div>
                <div className="row mx-3 my-2">
                    <div className="col-7">
                        <label htmlFor="">New Password :</label>
                    </div>
                    <div className="col">
                        <input type="password" name='password' value={details.password} onChange={handleChange} placeholder='Enter New password' />
                    </div>
                </div>

                <div className="row my-2 mx-3">
                    <button className='btn btn-warning'>Reset password</button>
                </div>
                <div className="row  mx-3">
                    <button className='btn btn-secondary'>
                        <Link to="/login" style={{ color: "aliceblue", textDecoration: "none", fontWeight: "bold" }}>back</Link>
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ForgetPassword