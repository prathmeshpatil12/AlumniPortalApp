import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RemoveStudent() {

    const [PRN, setPRN] = useState("");
    let navigate = useNavigate();

    const removeStud = (e) => {
        e.preventDefault();
        let toReq = 'http://localhost:3001/removeStudent/' + PRN;

        Axios.delete(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Deleted Student";
            document.getElementById('resultdiv').style.color = "red";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }

    return (
        <>
            <h2>RemoveStudent</h2>
            <br />
            <button onClick={goToDashboard}>Go To Dashboard</button>
            <br />
            <form onSubmit={removeStud}>
                <label>
                    <p>PRN</p>
                    <input type="text" onChange={e => setPRN(e.target.value)}/>
                </label>

                <div>
                    <button className='submitbtn' type="submit">Remove Student</button>
                </div>

                <div id='resultdiv'></div>
            </form>
        </>
    )
}

export default RemoveStudent