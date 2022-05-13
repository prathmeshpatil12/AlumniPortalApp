import { React, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';


function AddStudent() {
    
    const [name, setName] = useState("");
    const [PRN, setPrn] = useState("");
    let navigate = useNavigate();
    const toast = useToast();

    const addStud = async (e) => {
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
    
            //Adding data in MySQL
            console.log("Before SQL");
            console.log(obj)
            axios.post('http://localhost:3001/addStudent', obj, {
                headers : headers
            }).then(() => {
                //document.getElementById('result').innerHTML = "Successfully added Student";
                //document.getElementById('result').style.color = "green";
            });
            console.log(obj);
    
            //Adding data in MongoDB
            const prn = PRN;
            const type = "Student";
            const {data} = await axios.post("http://localhost:3001/api/user", {
                name, prn, type
            }, headers);

            console.log(data);
                toast({
                    title: 'Student account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            //----------------------
            /*
            axios.post("http://localhost:3001/api/user",obj, {
                headers : headers
            }).then(() =>{
                //////////////////////////////////////////////////////////////////
                
                console.log("User created----------||||||||||-----------------------")
                console.log(obj)
                toast({
                    title: 'Student account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
    
                document.getElementById('result').innerHTML = "Successfully added Student !!";
                document.getElementById('result').style.color = "green";
            })
            */
        }
    }

    const goToDashboard = () => {
        navigate('/adminDashboard')
    }
  

    return (
        <>
            <h2>Add Student</h2>
            <form onSubmit={addStud}>
                <label>
                    <p>PRN</p>
                    <input type="text" onChange={e => setPrn(e.target.value)}/>
                </label>
                <br></br>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setName(e.target.value)}/>
                </label>
                <div>
                    <button className='submitbtn' type="submit">Add Student</button>
                </div>
            </form>

            <h3 id='result'></h3>
            <button onClick={goToDashboard}>Go back to Dashboard</button>
        </>
    );
}

export default AddStudent