import { React, useState} from 'react';
import './Login.css';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [PRN, setPRN] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/loginDetails/' + PRN;

    Axios.get(toReq).then((response) => {
      const name = response.data[0].name;
      const type = response.data[0].type;
      if(password == response.data[0].password) {
        console.log("Correct PRN and password");
        localStorage.setItem("PRN", PRN);
        localStorage.setItem("Name", name);
        localStorage.setItem("Type", type);
        navigate('/');
        
      } else {
        document.getElementById("wrongIDorPass").innerHTML = "Wrong PRN or Password. Please Try Again!";
        document.getElementById("wrongIDorPass").style.color = "red";
      }
    });
  }

  return (
    <>
    <div className='loginForm'>
    <h2>Login Form</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <p>PRN</p>
        <input type="text" onChange={e => setPRN(e.target.value)}/>
      </label>
      <br></br>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <div id='wrongIDorPass'></div>
        <button className='submitbtn' type="submit">Submit</button>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login