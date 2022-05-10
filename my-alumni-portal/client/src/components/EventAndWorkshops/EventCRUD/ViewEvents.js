import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ViewEvents() {
    const[eventList, setEventList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:3001/getEvents').then((response) => {
            const someList = response.data;
            setEventList(someList);
            console.log(eventList);
        });
    }, []);

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

    const addEvent = () => {
        navigate('/addEvent');
    }

    return (
        <>
        <h2>Events List</h2>
        <br />
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        <br />
        <br />
        <button id='addbtn' onClick={addEvent}>Add Event</button>
        <br />
        <br />

        
        <Row xs={3} md={1} className="g-4">
            {eventList.map((val, key) => (
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>{val.event_name}</Card.Title>
                    <Card.Subtitle>
                        Description : {val.description}
                    </Card.Subtitle>
                    <hr></hr>
                    <Card.Text>
                        Event Type : {val.nature_of_event}
                    </Card.Text>
                    <Card.Text>
                        Organizer : {val.organizer}
                    </Card.Text>
                    <Card.Text>
                        Date of Event : {val.date_of_event.slice(0, 10).split('-').reverse().join('-')}
                    </Card.Text>
                    <Card.Text>
                        Start Time : {val.starts_at}
                    </Card.Text>
                    <Card.Text>
                        End Time : {val.ends_at}
                    </Card.Text>
                    <Card.Text>
                        Mode of Event : {val.mode_of_event}
                    </Card.Text>
                    <Card.Text>
                        Venue : {val.venue}
                    </Card.Text>
                    <a href={val.registration_link} target="_blank">
                        <Button variant="dark">Register</Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>

        </>
    )
}


export default ViewEvents