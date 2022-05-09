import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    
    const [name, setName] = useState("");
    const [PRN, setPRN] = useState("");
    let navigate = useNavigate();

    const addStud = (e) => {
        e.preventDefault();
        
        let obj = {
            name: name,
            PRN: PRN
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addStudent', obj, {
            headers : headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Student";
            document.getElementById('result').style.color = "green";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard')
    }
  

    return (
        <>
            <h2>Add Student</h2>
            <form onSubmit={addStud}>
                <label>
                    <p>PRN</p>
                    <input type="text" onChange={e => setPRN(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setName(e.target.value)}/>
                </label>
                <div>
                    <button className='submitbtn' type="submit">Add Student</button>
                </div>
            </form>

            <h3 id='result'></h3>
            <button onClick={goToDashboard}>Go back to Dashboard</button>
        </>
    );
}

export default AddStudent