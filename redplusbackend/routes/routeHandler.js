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
//router.get("/auth/get/all", authController.getAuthData);
router.get("/bio/get/all", bioController.getBioData);
router.get("/pathology/get/all", pathologyController.getPathologyData);
router.get("/specialist/get/all", specialistController.getSpecialistData);
router.get("/support/get/all", supportController.getSupportData);
router.get("/user/get/all", userController.getUserData);

//===================== Ambulance End =============================//

module.exports = router;
