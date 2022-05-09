import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function ViewAlumni() {
    const[alumniList, setAlumniList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/getAlumni').then((response) => {
            const someList = response.data;
            setAlumniList(someList);
            console.log(alumniList);
        });
    }, []);

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }
  

    return (
        <>
        <h2>Alumni List</h2>
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
                <th>Current Company</th>
                <th>Passing Year</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>LinkedIn</th>
                </tr>
            </thead>
            <tbody>
                {
                    alumniList.map((val, key) => {
                        return(
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{val.PRN}</td>
                                <td>{val.name}</td>
                                <td>{val.current_company}</td>
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


export default ViewAlumni