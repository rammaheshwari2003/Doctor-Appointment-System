
import { useState, useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../Images/c1.jpg';
import c2 from '../Images/c2.jpg';
import c3 from '../Images/c3.jpg';
import c4 from "../Images/c4.jpg";

const Home=()=>{
const [mydata, setMydata] = useState([]);
const loadData=async()=>{
    let api=`${BASE_URL}/doctor/homedoctorsdisplay`;
    try {
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    } catch (error) {
         console.log(error);
    }
}

useEffect(()=>{
    loadData();
}, []);


const ans= mydata.map((key)=>{
    return(
        <>

           <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
            <h6>Specailization :{key.specailization}</h6>
            <h6>Address : {key.address}</h6>
            <h6>City : {key.city}</h6>
            <h6> Mobile : {key.mobile}</h6>
            <h6>Email : {key.email}</h6>
           
          
        </Card.Text>
        <Button variant="primary">Appointment Now</Button>
      </Card.Body>
    </Card>
        
        </>
    )
})



    return(
        <>
          
          <marquee behavior="alternate" direction="right" bgcolor="gray"><h1> Welcome To Online Book Appointment</h1></marquee>




          
<Carousel>
      <Carousel.Item>
        <img src={c1}  style={{height:"450px", width:"100%"}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={c2} style={{height:"450px", width:"100%"}}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={c3} style={{height:"450px", width:"100%"}}/>
        </Carousel.Item>
        <Carousel.Item>
      <img src={c4} style={{height:"450px", width:"100%"}}/>
      </Carousel.Item>
    </Carousel>


<br />

        <div id="homeDoctors">
        {ans}
        </div>
         

        </>
    )
}


export default Home;
