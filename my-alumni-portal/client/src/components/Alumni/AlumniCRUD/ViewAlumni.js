import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';



function ViewAlumni() {
    const[alumniList, setAlumniList] = useState([]);
    const [filter, setFilter] = useState("");
    const [value, setValue] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/getAlumni/all/all').then((response) => {
            const someList = response.data;
            setAlumniList(someList);
            console.log(alumniList);
        });
    }, []);

    const goToDashboard = () => {
        navigate('/adminDashboard');
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const applyFilter = (e) => {
        e.preventDefault();

        let toReq = 'http://localhost:3001/getAlumni/' + filter + '/' + value;
        console.log(toReq);

        Axios.get(toReq).then((response) => {
            const someList = response.data;
            setAlumniList(someList);
            console.log(alumniList);
        });

    }
  

    return (
        <>
        <h2>Alumni List</h2>
        <br />
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        <br />
        <br />

        <h2 id='h2tag'>Filters </h2><br />
        <Form onSubmit={applyFilter}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Filter on</b></Form.Label>
            <select onChange={handleFilterChange}>
                <option value="all">Select Option</option>
                <option value="current_company">Current Company</option>
                <option value="masters_institute_india">Masters Institute India</option>
                <option value="masters_university_abroad">Masters University Abroad</option>
            </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><b>Value</b></Form.Label>
                <Form.Control type="text" onChange={e => setValue(e.target.value)} />
            </Form.Group>

            

            <div className='button'>
                <Button variant="success" className='submitbtn' type="submit">Apply Filter</Button>{' '}
                <br />
            </div>
        </Form>

        <br />
        <br />
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>PRN</th>
                <th>Name</th>
                <th>Current Work</th>
                <th>Masters Institute India</th>
                <th>Masters University Abroad</th>
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
                                <td>{val.current_work}</td>
                                <td>{val.masters_institute_india}</td>
                                <td>{val.masters_university_abroad}</td>
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