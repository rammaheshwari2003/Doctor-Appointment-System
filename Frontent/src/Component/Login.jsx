import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const navigate=useNavigate();

    return(
        <>
            <center >
                
                
                <Form id="formLogin">
                <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <hr />

        <div id='formBottom'>
        <h6 onClick={()=>navigate("/registration")}>Create new account : <span>Registration</span></h6>
        <h6><span>Forgot password</span></h6>
        </div>
        <hr />
        <h5 onClick={()=>navigate("/doctorlogin")}>Are you Doctor : <span>Login</span></h5>
        

    </Form>
        
            </center>
        </>
    )
}
export default Login;