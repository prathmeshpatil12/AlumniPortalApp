import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function ViewStudent() {
    const[studentList, setStudentList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/getStudents').then((response) => {
            const someList = response.data;
            setStudentList(someList);
            console.log(studentList);
        });
    }, []);

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }
  

    return (
        <>
        <h2>Student List</h2>
        <br />
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        <br />
        <br />
        <br />
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>PRN</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Year of Admission</th>
                <th>Department</th>
                <th>Current Year</th>
                <th>Expected Passing Year</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>LinkedIn</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentList.map((val, key) => {
                        return(
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{val.PRN}</td>
                                <td>{val.name}</td>
                                <td>{val.date_of_birth}</td>
                                <td>{val.gender}</td>
                                <td>{val.yar_of_admission}</td>
                                <td>{val.department}</td>
                                <td>{val.current_study_year}</td>
                                <td>{val.passout_year}</td>
                                <td>{val.contact_number}</td>
                                <td>{val.email_id}</td>
                                <td>{val.linkdin_profile}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>  
        </>
    )
}


export default ViewStudent