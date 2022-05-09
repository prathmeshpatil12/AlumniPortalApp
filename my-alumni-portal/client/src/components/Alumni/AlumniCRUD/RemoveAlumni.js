import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RemoveAlumni() {

    const [PRN, setPRN] = useState("");
    let navigate = useNavigate();

    const removeAlumni = (e) => {
        e.preventDefault();
        let toReq = 'http://localhost:3001/removeAlumni/' + PRN;

        Axios.delete(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Deleted Alumni";
            document.getElementById('resultdiv').style.color = "red";
        });
    }

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }

    return (
        <>
            <h2>Remove Alumni</h2>
            <br />
            <button onClick={goToDashboard}>Go To Dashboard</button>
            <br />
            <form onSubmit={removeAlumni}>
                <label>
                    <p>PRN</p>
                    <input type="text" onChange={e => setPRN(e.target.value)}/>
                </label>

                <div>
                    <button className='submitbtn' type="submit">Remove Alumni</button>
                </div>

                <div id='resultdiv'></div>
            </form>
        </>
    )
}

export default RemoveAlumni