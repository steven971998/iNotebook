import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);//our token is getting stored in the local storage.
            props.showAlert("Logged in Successfully", "success")
            history.push("/"); // it will navigate us to homepage.
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (

        <div className="iNotebook">
            <h4 id='iNotebook-text'>iNotebook</h4>
            <p id='iNotebook-description'>iNotebook is a website where you can add, edit and delete your Notes. All your Notes are fully safe and private. So Sign-Up your account and start adding...</p>
            <div className="login-box">
                <div className="mt-3" id='login'>
                    {/* // mt-3 is margin from the top// */}
                    <h2 id='login-text'>Login to continue to iNotebook.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
