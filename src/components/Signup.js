import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "",cpassword: ""}) ; 
    let history = useHistory();
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // page shouldnt reload. So we use this. 
        const {name,email,password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken) // once we have logged in then it will show our homepage. 
           history.push("/")
            // navigate("/"); // we will get the auth token and then we will be directed to the homepage.
        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (
    <div className="container">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
    </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="email" onChange={onChange} aria-describedby="emailHelp"/>
     </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" minLength={5} required onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" minLength={5} required onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup