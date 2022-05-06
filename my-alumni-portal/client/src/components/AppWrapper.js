import { React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './AppWrapper.css';


export const AppWrapper = () => {
    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("PRN")==null) {
            console.log("Checked1");
            navigate('/login');
        }
    });

    const logout = () => {
        localStorage.removeItem("PRN");
        localStorage.removeItem("Name");
        localStorage.removeItem("Type");
        navigate('/login');
    }


    return (
        <>
        <button className='logoutbtn' onClick={logout}>Logout</button>
        <div className='Welcome'>Welcome, {localStorage.getItem("Name")}</div>
        
        </>
    )
}
