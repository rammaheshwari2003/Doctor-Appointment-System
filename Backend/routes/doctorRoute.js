const express = require("express");
const route = express.Router();
const doctorController = require("../controllers/doctorController");

route.post("/registration", doctorController.doctorRegistration);
route.get("/homedoctorsdisplay", doctorController.doctorHomeDisplay);

route.post("/doctorlogin", doctorController.doctorLogin);

module.exports = route;