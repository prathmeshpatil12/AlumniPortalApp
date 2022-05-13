import { React, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';


function AddAlumni() {

    const [name, setName] = useState("");
    const [PRN, setPRN] = useState("");
    let navigate = useNavigate();
    const toast = useToast();

    const addAlumni = async (e) => {
        e.preventDefault();

        if(!PRN || !name){
            toast({
                title: 'Please fill all the fields.',
                description: "Empty fields.",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        else{
            let obj = {
                name: name,
                PRN: PRN
            };

            const headers = {
                'Content-Type':'application/json'
            }

            axios.post('http://localhost:3001/addAlumni', obj, {
                headers : headers
            })
            // .then(() => {
            //     document.getElementById('result').innerHTML = "Successfully added Alumni";
            //     document.getElementById('result').style.color = "green";
            // });

            //Adding Alumni data in MongoDB
            const prn = PRN;
            const type = "Alumni";
            const {data} = await axios.post("http://localhost:3001/api/user", {
                name, prn, type
            }, headers);

                toast({
                    title: 'Alumni account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
                console.log(data);
        }
    }

    const goToDashboard = () => {
        navigate('/adminDashboard')
    }

    return (
        <>
        <h2>AddAlumni</h2>
        <form onSubmit={addAlumni}>
            <label>
                <p>PRN</p>
                <input type="text" onChange={e => setPRN(e.target.value)}/>
            </label>
            <br></br>
            <label>
                <p>Name</p>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </label>
            <div>
                <button className='submitbtn' type="submit">Add Alumni</button>
            </div>
        </form>

        <h3 id='result'></h3>
        <button onClick={goToDashboard}>Go back to Dashboard</button>
        </>
    )
}

export default AddAlumni