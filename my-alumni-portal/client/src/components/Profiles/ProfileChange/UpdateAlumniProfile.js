import { React, useState} from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function UpdateAlumniProfile() {

  const [name, setName] = useState("");
  const [current_company, setCurrentCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [passout_year, setPassoutYear] = useState();
  const [contact_number, setContactNumber] = useState(""); 
  const [email_id, setEmailId] = useState("");
  const [linkdin_profile, setLinkdinProfile] = useState("");
  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let toReq = 'http://localhost:3001/updateAlumniDetail/';
    let obj = {
        PRN: localStorage.getItem("PRN"),
        name: name,
        current_company: current_company,
        department: department,
        passout_year: passout_year,
        contact_number: contact_number,
        email_id: email_id,
        linkdin_profile: linkdin_profile
    }

    console.log(obj);

    const headers = {
        'Content-Type':'application/json'
    }

    Axios.put(toReq, obj, {
        headers:headers
    }).then(() => {
        document.getElementById("updatedDetails").innerHTML = "Updated Details Sucessfully";
        document.getElementById("updatedDetails").style.color = "green";
    })
  }

  const handleDepartmentChange = (event) => {
      setDepartment(event.target.value);
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
    <div className='updateProfileForm'>
    <h2>Update Profile</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <p>PRN</p>
        <input type="text" placeholder={localStorage.getItem("PRN")} disabled={true}/>
      </label>
      <br />
      <br />
      <label>
        <p>Name</p>
        <input type="text" placeholder={localStorage.getItem("Name")} onChange={e => setName(e.target.value)}/>
      </label>
      <br />
      <br />
      <label>
        <p>Current Company</p>
        <input type="text" onChange={e => setCurrentCompany(e.target.value)}/>
      </label>
      <br />
      <br />
      <label>
        <p>Passing Year</p>
        <input type="text" onChange={e => setPassoutYear(e.target.value)}/>
      </label>
      <br />
      <br />

      <label>
        <p>Department</p>
        <select onChange={handleDepartmentChange}>
            <option value="NULL">Select Option</option>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="ENTC">Electronics and Telecommunication</option>
            <option value="MECH">Mechanical Engineering</option>
            <option value="ELE">Electrical Engineering</option>
            <option value="BIO">Biotech</option>
            <option value="CIVIL">Civil Engineering</option>
            <option value="ENV">Environment Engineering</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="DS">Data Science</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        <p>Contact Number</p>
        <input type="text" onChange={e => setContactNumber(e.target.value)}/>
      </label>
      <br />
      <br />
      <label>
        <p>Email ID</p>
        <input type="text" onChange={e => setEmailId(e.target.value)}/>
      </label>
      <br />
      <br />
      <label>
        <p>LinkedIn Profile Link</p>
        <input type="text" onChange={e => setLinkdinProfile(e.target.value)}/>
      </label>
      <div>
        <div id='updatedDetails'></div>
        <button className='submitbtn' type="submit">Submit</button>
      </div>
    </form>
    </div>
    <br />
    <button onClick={goToDashboard}>Go back to Dashboard</button>
    </>
  )
}

export default UpdateAlumniProfile