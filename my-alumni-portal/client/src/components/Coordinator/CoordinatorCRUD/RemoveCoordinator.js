import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RemoveCoordinator() {

    const [username, setUsername] = useState("");
    let navigate = useNavigate();

    const removeCoordinator = (e) => {
        e.preventDefault();
        let toReq = 'http://localhost:3001/removeCoordinator/' + username;

        Axios.delete(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Deleted Coordinator";
            document.getElementById('resultdiv').style.color = "red";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }

    return (
        <>
            <h2>Remove Coordinator</h2>
            <br />
            <button onClick={goToDashboard}>Go To Dashboard</button>
            <br />
            <form onSubmit={removeCoordinator}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </label>

                <div>
                    <button className='submitbtn' type="submit">Remove Coordinator</button>
                </div>

                <div id='resultdiv'></div>
            </form>
        </>
    )
}

export default RemoveCoordinator