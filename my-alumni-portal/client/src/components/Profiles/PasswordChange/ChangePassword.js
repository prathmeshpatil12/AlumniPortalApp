import { React, useState} from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function ChangePassword() {

  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/updateLoginDetails/';
    let obj = {
        PRN: localStorage.getItem("PRN"),
        password: password
    }

    const headers = {
        'Content-Type':'application/json'
    }

    Axios.put(toReq, obj, {
        headers:headers
    }).then(() => {
        document.getElementById("changedPasswd").innerHTML = "Changed Password Sucessfully";
        document.getElementById("changedPasswd").style.color = "green";
    })
  }

  const goToDashboard = () => {
    if(localStorage.getItem("Type")=="Admin") {
        navigate('/adminDashboard');
    } else if (localStorage.getItem("Type")=="Student") {
        navigate('/studentDashboard');
    } else if (localStorage.getItem("Type")=="Alumni") {
        navigate("/alumniDashboard");
    } else {
        navigate("/coordinatorDashboard");
    }
}

  return (
    <>
    <div className='changePasswdForm'>
    <h2>Change Password</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <p>PRN</p>
        <input type="text" placeholder={localStorage.getItem("PRN")} disabled={true}/>
      </label>
      <br></br>
      <label>
        <p>Enter New Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <div id='changedPasswd'></div>
        <button className='submitbtn' type="submit">Submit</button>
      </div>
    </form>
    </div>
    <br />
    <button onClick={goToDashboard}>Go back to Dashboard</button>
    </>
  )
}

export default ChangePassword