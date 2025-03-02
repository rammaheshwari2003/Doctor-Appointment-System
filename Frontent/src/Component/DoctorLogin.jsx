import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BASE_URL from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DoctorLogin=()=>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [input, setInput] = useState({});

  const navigate= useNavigate();
  

 const handleSubmit=async(e)=>{
  e.preventDefault();
  let api=`${BASE_URL}/doctor/doctorlogin`;
  

  try {
        const response = await axios.post(api, {email:email, password:password});
        // const response = await axios.post(api, ...input);
        console.log(response.data); 
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("docid", response.data._id);
        
        toast.success("You are Succesfully login!");
        navigate("/doctordashboard");
        

  } catch (error) {
      toast.error(error.response.data.msg);
      
  }

 }


//  const handleInput=(e)=>{
//   let name=e.target.name;
//   let value=e.target.value;
//   setInput(values=>({...values, [name]:value}));
//   console.log(input)

//  }



    return(
        <>
            <center>
        <Form id="LogDoctor">
        <h1>Doctor Login</h1>
        <hr />

      {/* <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Doctor Name</Form.Label>
        <Form.Control type="text" name='drname'  placeholder="Enter Doctor Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="number" name='drmobile'  placeholder="Enter Mobile No." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSelect">
        <Form.Label>Select Specialization</Form.Label>
        <Form.Select aria-label="Default select example" name="speciality" >
          <option>Select Option</option>
          <option value="General">General Surgeon</option>
          <option value="Orthopedic">Orthopedic Surgeon</option>
          <option value="Pediatric">Pediatric Surgeon</option>
          <option value="Cardiologist">Cardiologist Surgeon</option>
          <option value="ENT">ENT</option>
          <option value="Neuro Surgeon">Neuro Surgeon</option>
          <option value="Dentist">Dentist</option>
          <option value="Plastic Surgeon">Plastic Surgeon</option>
        </Form.Select>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>

      <hr />

      <h6 onClick={()=>navigate("/doctorregistration")}>Doctor Create new account : <span>Registration</span></h6>
      <h6><span>Forgot password</span></h6>


    </Form>


               <ToastContainer />
            </center>
        
        </>
    )
}
export default DoctorLogin;
