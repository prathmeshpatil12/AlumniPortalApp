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

    const changePasswd = () => {
        navigate('/changePassword');
    }

    const goDashboard = () => {
        document.getElementById('goToDashboard').style.visibility='hidden';
        document.getElementById('completeProfile').style.visibility='hidden';
        document.getElementById('changePassword').style.visibility='hidden';
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

    const updateProfile = () => {
        document.getElementById('goToDashboard').style.visibility='hidden';
        document.getElementById('completeProfile').style.visibility='hidden';
        document.getElementById('changePassword').style.visibility='hidden';
        if(localStorage.getItem("Type")=="Admin") {
            navigate('/adminDashboard');
        } else if (localStorage.getItem("Type")=="Student") {
            navigate('/updateStudentProfile');
        } else if (localStorage.getItem("Type")=="Alumni") {
            navigate("/updateAlumniProfile");
        } else {
            navigate("/updateCoordinatorProfile");
        }
    }

    return (
        <>  
        <button id='goToDashboard' onClick={goDashboard}>Go to Dashboard</button>
        <button id='completeProfile' onClick={updateProfile}>Complete your profile</button>
        <button id='changePassword' onClick={changePasswd}>Change your password</button>
        </>
    )
}
