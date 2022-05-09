import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddCoordinator() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    let navigate = useNavigate();

    const addCoordinator = (e) => {
        e.preventDefault();
        
        let obj = {
            name: name,
            username: username
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addCoordinator', obj, {
            headers : headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Coordinator";
            document.getElementById('result').style.color = "green";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard')
    }

    return (
        <>
        <h2>AddCoordinator</h2>
        <form onSubmit={addCoordinator}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <br></br>
            <label>
                <p>Name</p>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </label>
            <div>
                <button className='submitbtn' type="submit">Add Coordinator</button>
            </div>
        </form>

        <h3 id='result'></h3>
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        </>
    )
}

export default AddCoordinator