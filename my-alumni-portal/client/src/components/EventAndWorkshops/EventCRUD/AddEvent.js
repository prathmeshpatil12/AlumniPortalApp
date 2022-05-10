import { React, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        
        let obj = {
            event_name: event_name,
            description: description,
            nature_of_event: nature_of_event,
            organizer: organizer,
            date_of_event: date_of_event,
            starts_at: starts_at,
            ends_at: ends_at,
            venue: venue,
            mode_of_event: mode_of_event,
            registration_link: registration_link
        };

        const headers = {
            'Content-Type':'application/json'
        }

        Axios.post('http://localhost:3001/addEvent', obj, {
            headers : headers
        }).then(() => {
            document.getElementById('result').innerHTML = "Successfully added Event";
            document.getElementById('result').style.color = "green";
        });
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
            <h2>Add Event</h2>
            <form onSubmit={addEvent}>
                <label>
                    <p>Event Name</p>
                    <input type="text" onChange={e => setEventName(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Description</p>
                    <input type="textfield" onChange={e => setDescription(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Type of Event</p>
                    <input type="text" onChange={e => setNatureOfEvent(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Organizer</p>
                    <input type="text" onChange={e => setOrganizer(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Date of Event</p>
                    <input type="text" onChange={e => setDateOfEvent(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Start Time of Event</p>
                    <input type="text" onChange={e => setStartsAt(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>End Time of Event</p>
                    <input type="text" onChange={e => setEndsAt(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Mode of Event</p>
                    <input type="text" onChange={e => setModeOfEvent(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Venue</p>
                    <input type="text" onChange={e => setVenue(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Registration Link</p>
                    <input type="text" onChange={e => setRegistrationLink(e.target.value)}/>
                </label>

                <div>
                    <button className='submitbtn' type="submit">Add Event</button>
                </div>
            </form>

            <h3 id='result'></h3>
            <button onClick={goToDashboard}>Go back to Dashboard</button>
        </>
    );
}

export default AddEvent