import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from "../config";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorRegistration=()=>{

  const [input, setInput]=useState({});


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();

      let api=`${BASE_URL}/doctor/registration`;
      try {
          const response = await axios.post(api, input);
          console.log(response);
          toast.success(response.data.msg);
      } catch (error) {
          console.log(error);
      }
    }

    return(
        <>
            <center>
        <Form id="RegDoctor">
        <h1>Doctor Registration</h1>
        <hr />

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Doctor Name</Form.Label>
        <Form.Control type="text" name='drname' onChange={handleInput}  placeholder="Enter Doctor Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name='draddress' onChange={handleInput} placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='drcity' onChange={handleInput} placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="number" name='drmobile' onChange={handleInput} placeholder="Enter Mobile No." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSelect">
        <Form.Label>Select Specialization</Form.Label>
        <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
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
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='dremail' onChange={handleInput}  placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='drpass' onChange={handleInput} placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>


            </center>
            <ToastContainer />
                
        
        </>
    )
}
export default DoctorRegistration;