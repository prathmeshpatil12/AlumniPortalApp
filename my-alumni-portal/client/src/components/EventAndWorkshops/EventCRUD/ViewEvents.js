import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import { Button, ButtonGroup } from '@chakra-ui/react';
import Form from 'react-bootstrap/Form';
import '../../Internship/InternshipCRUD/ViewInternship.css';
import pic4 from "../../../kit.png";
function ViewEvents() {
    const[eventList, setEventList] = useState([]);
    const [filter, setFilter] = useState("");
    const [value, setValue] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        
        let toReq = 'http://localhost:3001/getEvents/' + 'all/' + 'all';
        Axios.get(toReq).then((response) => {
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

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const applyFilter = (e) => {
        e.preventDefault();

        let toReq = 'http://localhost:3001/getEvents/' + filter + '/' + value;
        console.log(toReq);

        Axios.get(toReq).then((response) => {
            const someList = response.data;
            setEventList(someList);
            console.log(eventList);
        });

    }

    const addEvent = () => {
        navigate('/addEvent');
    }

    return (
        <>

        <div className="jumbotron jumbotron-billboard">
            <div className="img"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={pic4} className="img-fluid rounded thumbnail-image" />
                    </div>
                    <div className='col-lg-6'>
                        <div className='center1'>
                            <br />
                            <Button colorScheme='purple' variant='solid' size='sm' id="btnbtn1" isDisabled="true">
                                Events and Workshops
                            </Button>
                            <br /><br />

                            <Button size='md'
                                height='48px'
                                width='200px'
                                border='2px'
                                borderColor='blackAlpha.500' colorScheme='purple' variant='outline' onClick={goToDashboard}>
                                Go back to Dashboard
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button size='md'
                                height='48px'
                                width='200px'
                                border='2px'
                                borderColor='blackAlpha.500' colorScheme='purple' variant='outline' onClick={addEvent}>
                                Add Event
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div className='col-sm-3' id="filter">

        <h2 id='h2tag'>Filters </h2><br />
        <Form onSubmit={applyFilter}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Filter on</Form.Label> <br />
            <select onChange={handleFilterChange} id="select">
                <option value="all">Select Option</option>
                <option value="nature_of_event">Event Type</option>
                <option value="mode_of_event">Mode of Event</option>
            </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Value</Form.Label>
                <Form.Control type="text" onChange={e => setValue(e.target.value)} />
            </Form.Group>

            

            <Button colorScheme='purple' variant='solid' size='sm' id="btnbtn" type='submit'>
                                            Apply Filter
                                        </Button>
                    <br />
        </Form>
        </div>

        <div id='rowlist'>

        <Row xs={3} md={1} className="g-4">
            {eventList.map((val, key) => (
                <Col>
                <Card id='card-bd'>
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
                    <a href={val.registration_link} target="_blank"><br />
                        <Button variant="dark" id='btnbtn'>Register</Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
        </div>

        </>
    )
}


export default ViewEvents