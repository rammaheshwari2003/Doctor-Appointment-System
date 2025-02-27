const DoctorModel= require("../models/doctorModel");


const doctorRegistration=async(req, res)=>{
    const {drname,draddress, drcity, drmobile,speciality,dremail, drpassword} = req.body; 
    try {
        const Doctor = await DoctorModel.create({
            name:drname,
            address:draddress, 
            city:drcity,
            mobile:drmobile,
            specailization:speciality,
            email:dremail,
            password:drpassword 
        })

        res.status(200).send({msg:"Doctor Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }

}


const doctorHomeDisplay=async( req, res) =>{
    try {
         const Doctor= await DoctorModel.find();
         res.status(200).send(Doctor);
    } catch (error) {
        console.log(error);
    }
}

const doctorLogin =async(req, res)=>{
    const { email, password} = req.body;
    
    try {
     const Doctor = await DoctorModel.findOne({email:email});
     if (!Doctor)
     {
       res.status(400).send({msg:"Invalid Email!"})
     }
 
     if (Doctor.password!=password)
     {
         res.status(400).send({msg:"Invalid Credentials!"});
     }
 
     res.status(200).send(Doctor);
 
    } catch (error) {
       console.log(error);
    }
    
 }
 

module.exports ={
    doctorRegistration,
    doctorHomeDisplay,
    doctorLogin
}