import { React, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from '@chakra-ui/react';
import '../../Internship/InternshipCRUD/AddInternship.css';

function AddEvent() {

    const [event_name, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [nature_of_event, setNatureOfEvent] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [date_of_event, setDateOfEvent] = useState("");
    const [starts_at, setStartsAt] = useState("");
    const [ends_at, setEndsAt] = useState("");
    const [venue, setVenue] = useState("");
    const [mode_of_event, setModeOfEvent] = useState("");
    const [registration_link, setRegistrationLink] = useState("");

    let navigate = useNavigate();

    const addEvent = (e) => {
        e.preventDefault();

        let date = new Date();
        date = date.toISOString().slice(0, 19).replace('T', ' ');
        // setDatePosted(date)
        let doe = new Date(date_of_event.replace(/-/g, '/').replace('T', ' '));
        doe.setHours(doe.getHours() + 5);
        doe.setMinutes(doe.getMinutes() + 30);
        doe = doe.toISOString().slice(0, 19).replace('T', ' ');
        let sa = new Date(starts_at.replace(/-/g, '/').replace('T', ' '));
        let ea = new Date(ends_at.replace(/-/g, '/').replace('T', ' '));
        // doe = doe.toISOString().slice(0, 19).replace('T', ' ');
        sa.setHours(sa.getHours() + 5);
        sa.setMinutes(sa.getMinutes() + 30);
        ea.setHours(ea.getHours() + 5);
        ea.setMinutes(ea.getMinutes() + 30);
        sa = sa.toISOString().slice(0, 19).replace('T', ' ');
        sa = sa.slice(11, 19);
        ea = ea.toISOString().slice(0, 19).replace('T', ' ');
        ea = ea.slice(11, 19);

        let obj = {
            event_name: event_name,
            description: description,
            nature_of_event: nature_of_event,
            organizer: organizer,
            date_of_event: doe,
            starts_at: sa,
            ends_at: ea,
            venue: venue,
            mode_of_event: mode_of_event,
            registration_link: registration_link
        };

        console.log(obj);

        const headers = {
            'Content-Type': 'application/json'
        }

        Axios.post('http://localhost:3001/addEvent', obj, {
            headers: headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Event";
            document.getElementById('result').style.color = "green";
        });
    }

    const goToDashboard = () => {
        if (localStorage.getItem("Type") == "Admin") {
            navigate('/adminDashboard');
        } else if (localStorage.getItem("Type") == "Student") {
            navigate('/studentDashboard');
        } else if (localStorage.getItem("Type") == "Alumni") {
            navigate("/alumniDashboard");
        } else {
            navigate("/coordinatorDashboard");
        }
    }


    return (
        <>

            <div className="box-form" id='studentboxform'>



                <div className="right">
                    <h2 id='h2tag'>Add Events </h2><br />
                    <Form onSubmit={addEvent}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><b>Event Name</b></Form.Label>
                            <Form.Control type="text" onChange={e => setEventName(e.target.value)} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Description</b></Form.Label>
                            <Form.Control type="textfield" onChange={e => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Type of Event</b></Form.Label>
                            <Form.Control type="text" onChange={e => setNatureOfEvent(e.target.value)} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Organizer</b></Form.Label>
                            <Form.Control type="text" onChange={e => setOrganizer(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Date of Event</b></Form.Label>
                            <Form.Control type="datetime-local" onChange={e => setDateOfEvent(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Start Time of Event</b></Form.Label>
                            <Form.Control type="datetime-local" onChange={e => setStartsAt(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>End Time of Event</b></Form.Label>
                            <Form.Control type="datetime-local" onChange={e => setEndsAt(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Mode of Event</b></Form.Label>
                            <Form.Control type="text" onChange={e => setModeOfEvent(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Venue</b></Form.Label>
                            <Form.Control type="text" onChange={e => setVenue(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><b>Registration Link</b></Form.Label>
                            <Form.Control type="text" onChange={e => setRegistrationLink(e.target.value)} />
                        </Form.Group>

                        <div className='button'>
                            <div id='wrongIDorPass'></div>
                            <Button variant="success" className='submitbtn' type="submit">Add Event</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary" onClick={goToDashboard}>Dashboard</Button>{' '}
                            <br />


                        </div>
                    </Form>
                    <br />
                    <br />
                </div></div >
            
        </>
    );
}

export default AddEvent