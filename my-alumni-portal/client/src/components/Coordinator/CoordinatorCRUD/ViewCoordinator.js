import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function ViewCoordinator() {
    const[coordinatorList, setCoordinatorList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/getCoordinator').then((response) => {
            const someList = response.data;
            setCoordinatorList(someList);
            console.log(coordinatorList);
        });
    }, []);

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }
  

    return (
        <>
        <h2>Coordinator List</h2>
        <br />
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        <br />
        <br />
        <br />
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Username</th>
                <th>Name</th>
                <th>Department</th>
                <th>Contact Number</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    coordinatorList.map((val, key) => {
                        return(
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{val.username}</td>
                                <td>{val.name}</td>
                                <td>{val.department}</td>
                                <td>{val.contact_number}</td>
                                <td>{val.email_id}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>  
        </>
    )
}


export default ViewCoordinator