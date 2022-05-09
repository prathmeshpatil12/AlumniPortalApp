import { React, useState, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';




function TransferStudentToAlumni() {

    const [PRN, setPRN] = useState("");
    const [name, setName] = useState("");
    let navigate = useNavigate();
    

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }


    const transferStud = (e) => {
        e.preventDefault();
        let toReq1 = 'http://localhost:3001/loginDetails/' + PRN;
        Axios.get(toReq1).then((response) => {
            console.log(response.data[0].name);
            setName(response.data[0].name);
        });
        console.log(name);

        let toReq = 'http://localhost:3001/transferStudent/' + PRN;

        Axios.put(toReq).then((response) => {
            document.getElementById('resultdiv').innerHTML = "Student transferred";
            document.getElementById('resultdiv').style.color = "red";
        });

        let toReqdel = 'http://localhost:3001/removeStudent/' + PRN;

        Axios.delete(toReqdel).then((response) => {
        });

        let obj = {
            name: name,
            PRN: PRN
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addAlumni', obj, {
            headers : headers
        }).then(() => {
        });

    }

    return (
            <>
            <h2>Transfer Student to Alumni</h2>
            <br />
            <button onClick={goToDashboard}>Go To Dashboard</button>
            <br />
            <form onSubmit={transferStud}>
                <label>
                    <p>PRN</p>
                    <input type="text" onChange={e => setPRN(e.target.value)}/>
                </label>

                <div>
                    <button className='submitbtn' type="submit">Transfer Student to Alumni</button>
                </div>

                <div id='resultdiv'></div>
            </form>
            </>
    )
}

export default TransferStudentToAlumni