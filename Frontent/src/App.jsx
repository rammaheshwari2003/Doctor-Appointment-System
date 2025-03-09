import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import DoctorLogin from "./Component/DoctorLogin";
import DoctorRegistration from "./Component/DoctorRegistration";
import DoctorDashboard from "./Component/DoctorDashboard";

const App=()=>{
  return( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home /> } />
      <Route path="home" element={<Home /> } />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="doctorlogin" element={<DoctorLogin />} />
      <Route path="doctorregistration" element={<DoctorRegistration />} />
      <Route path="doctordashboard" element={<DoctorDashboard />} />


      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
