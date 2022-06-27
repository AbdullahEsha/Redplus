const express = require("express");
const router = express.Router();

const ambulanceController = require("../controller/Ambulance");
const authController = require("../controller/Auth");
const bioController = require("../controller/Bio");
const pathologyController = require("../controller/Pathology");
const pathologistController = require("../controller/Pathologist");
const supportController = require("../controller/Support");
const userController = require("../controller/User");

//===================== Ambulance Start ============================//

router.get("/ambulance/get/all", ambulanceController.getAmbulanceData);
router.post("/ambulance/store/all", ambulanceController.storeAmbulanceData);
router.get("/ambulance/getedit", ambulanceController.getEditAmbulanceData);
router.post("/ambulance/upedit", ambulanceController.postEditAmbulanceData);
router.delete(
  "/ambulance/delete/:id",
  ambulanceController.destroyAmbulanceData
);

//router.get("/auth/get/all", authController.getAuthData);

router.get("/bio/get/all", bioController.getBioData);
router.post("/bio/store/:id", bioController.storeBioData);
router.get("/bio/getedit", bioController.getEditBioData);
router.post("/bio/postedit/:id", bioController.postEditBioData);
router.delete("/bio/delete/:id", ambulanceController.destroyAmbulanceData);

router.get("/pathology/get/all", pathologyController.getPathologyData);
router.post("/pathology/store/all", pathologyController.storePathologyData);
router.get("/pathology/getedit", pathologyController.getPathologyData);
router.post("/pathology/postedit", pathologyController.storePathologyData);

router.get("/pathologist/get/all", pathologistController.getPathologistData);
router.post(
  "/pathologist/store/all",
  pathologistController.storePathologistData
);
router.get(
  "/pathologist/getedit",
  pathologistController.getEditPathologistData
);
router.post(
  "/pathologist/postedit",
  pathologistController.postEditPathologistData
);
router.delete(
  "/pathologist/delete/:id",
  ambulanceController.destroyAmbulanceData
);

router.get("/support/get/all", supportController.getSupportData);
router.post("/support/store/all", supportController.storeSupportData);

router.get("/user/get/all", userController.getUserData);
router.post("/user/store/all", userController.storeUserData);
router.get("/user/getedit", userController.getEditUserData);
router.post("/user/postedit", userController.postEditUserData);
router.delete("/user/delete/:id", ambulanceController.destroyAmbulanceData);

//===================== Ambulance End =============================//

module.exports = router;
