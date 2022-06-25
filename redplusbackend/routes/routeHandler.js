const express = require("express");
const router = express.Router();

const ambulanceController = require("../controller/Ambulance");
const authController = require("../controller/Auth");
const bioController = require("../controller/Bio");
const pathologyController = require("../controller/Pathology");
const specialistController = require("../controller/Pathologist");
const supportController = require("../controller/Support");
const userController = require("../controller/User");

//===================== Ambulance Start ============================//

router.get("/ambulance/get/all", ambulanceController.getAmbulanceData);
router.post("/ambulance/store/all", ambulanceController.storeAmbulanceData);

//router.get("/auth/get/all", authController.getAuthData);

router.get("/bio/get/all", bioController.getBioData);
router.post("/bio/store/:id", bioController.storeBioData);

router.get("/pathology/get/all", pathologyController.getPathologyData);
router.post("/pathology/store/all", pathologyController.storePathologyData);

router.get("/specialist/get/all", specialistController.getSpecialistData);
router.post("/specialist/store/all", specialistController.storeSpecialistData);

router.get("/support/get/all", supportController.getSupportData);
router.post("/support/store/all", supportController.storeSupportData);

router.get("/user/get/all", userController.getUserData);
router.post("/user/store/all", userController.storeUserData);

//===================== Ambulance End =============================//

module.exports = router;
