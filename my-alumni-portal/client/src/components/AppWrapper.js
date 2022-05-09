import { React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export const AppWrapper = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("PRN")==null) {
            console.log("Checked1");
            navigate('/login');
        }
    });

    const goDashboard = () => {
        document.getElementById('goToDashboard').style.visibility='hidden';
        document.getElementById('completeProfile').style.visibility='hidden';
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
        <button id='goToDashboard' onClick={goDashboard}>Go to Dashboard</button>
        <button id='completeProfile'>Complete your profile</button>
        </>
    )
}
