const express = require("express");
const router = express.Router();

const ambulanceController = require("../controller/Ambulance");
const authController = require("../controller/Auth");
const bioController = require("../controller/Bio");
const pathologyController = require("../controller/Pathology");
const specialistController = require("../controller/Specialist");
const supportController = require("../controller/Support");
const userController = require("../controller/User");

//===================== Ambulance Start ============================//

router.get("/ambulance/get/all", ambulanceController.getAmbulanceData);

//===================== Ambulance End =============================//

module.exports = router;
