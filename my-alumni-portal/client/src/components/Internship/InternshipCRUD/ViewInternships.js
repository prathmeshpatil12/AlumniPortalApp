import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ViewInternships() {
    const[internshipList, setInternshipList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/getInternships').then((response) => {
            const someList = response.data;
            setInternshipList(someList);
            console.log(internshipList);
        });
    }, []);

    const addInternship = () => {
        navigate('/addInternship');
    }

    const goToDashboard = () => {
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
        <h2>Internships List</h2>
        <br />
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        <br />
        <br />
        <button id='addbtn' onClick={addInternship}>Add Internship</button>
        <br />
        <br />

        
        <Row xs={3} md={2} className="g-4">
            {internshipList.map((val, key) => (
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>{val.company_name}</Card.Title>
                    <Card.Subtitle>
                        Position : {val.position}
                    </Card.Subtitle>
                    <hr></hr>
                    <Card.Text>
                        Eligible Batches : {val.eligible_batches}
                    </Card.Text>
                    <Card.Text>
                        Eligible Branches : {val.eligible_branches}
                    </Card.Text>
                    <Card.Text>
                        Experience Required : {val.experience_required}
                    </Card.Text>
                    <a href={val.registration_link} target="_blank">
                        <Button variant="dark">Register</Button>
                    </a>
                    <br />
                    <br />
                    <Card.Footer>
                        Date Posted : {val.date_posted.slice(0, 10).split('-').reverse().join('-')}
                    </Card.Footer>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>

        </>
    )
}


export default ViewInternships