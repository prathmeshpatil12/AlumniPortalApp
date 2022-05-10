import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddInternship() {
    
    const [company_name, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [eligible_batches, setEligibleBatches] = useState("");
    const [eligible_branches, setEligibleBrances] = useState("");
    const [experience_required, setExperienceRequired] = useState("");
    const [date_posted, setDatePosted] = useState("");
    const [registration_link, setRegistrationLink] = useState("");

    let navigate = useNavigate();

    const addInternship = (e) => {
        e.preventDefault();

        let date = new Date();
        date = date.toISOString().slice(0, 19).replace('T', ' ');
        setDatePosted(date)
        
        let obj = {
            company_name : company_name,
            position: position,
            eligible_batches: eligible_batches,
            eligible_branches: eligible_branches,
            experience_required: experience_required,
            date_posted: date_posted,
            registration_link: registration_link
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addInternship', obj, {
            headers : headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Internship";
            document.getElementById('result').style.color = "green";
        });
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
            <h2>Add Internship</h2>
            <form onSubmit={addInternship}>
                <label>
                    <p>Company Name</p>
                    <input type="text" onChange={e => setCompanyName(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Position</p>
                    <input type="text" onChange={e => setPosition(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Eligible Batches</p>
                    <input type="text" onChange={e => setEligibleBatches(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Eligible Branches</p>
                    <input type="text" onChange={e => setEligibleBrances(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Experience Required</p>
                    <input type="text" onChange={e => setExperienceRequired(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Registration Link</p>
                    <input type="text" onChange={e => setRegistrationLink(e.target.value)}/>
                </label>

                <div>
                    <button className='submitbtn' type="submit">Add Internship</button>
                </div>
            </form>

            <h3 id='result'></h3>
            <button onClick={goToDashboard}>Go back to Dashboard</button>
        </>
    );
}

export default AddInternship