const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const {
  homeData,
  getData,
  getById,
  updateData,
  Deletedata,
  DeleteById,
} = require("../Controllers/homeController");

const {
  StudentContacts,
  getAllContacts,
  getContactById,
  deleteContact,
  updateContact,
} = require("../Controllers/contactController");

const {
  aboutData,
  getaboutData,
  getaboutById,
  updateaboutData,
  Deleteaboutdata,
  DeleteaboutById,
} = require("../Controllers/aboutController");

const {
  activityData,
  getactivityData,
  getactivityById,
  updateactivityData,
  Deleteactivitydata,
  DeleteactivityById,
} = require("../Controllers/activityController");

//Home//
router.post("/createData", upload.single("Photo"), homeData);
router.get("/getData", getData);
router.get("/getById", getById);
router.put("/updataeData", updateData);
router.delete("/deleteData", Deletedata);
router.delete("/deleteId", DeleteById);

//contact//
router.post("/contacData", StudentContacts);
router.get("/getcontactData", getAllContacts);
router.get("/getcontactById", getContactById);
router.put("/updataecontactData", updateContact);
router.delete("/deletecontactData", deleteContact);

//About//
router.post("/createaboutData", upload.single("Photo"), aboutData);
router.get("/getaboutData", getaboutData);
router.get("/getaboutById", getaboutById);
router.put("/updataabouteData", updateaboutData);
router.delete("/deleteaboutData", Deleteaboutdata);
router.delete("/deleteaboutId", DeleteaboutById);

//Activity//
router.post("/createactivityData", upload.single("Photo"), activityData);
router.get("/getactivityData", getactivityData);
router.get("/getactivityById", getactivityById);
router.put("/updataactivityeData", updateactivityData);
router.delete("/deleteactivityData", Deleteactivitydata);
router.delete("/deleteactivityId", DeleteactivityById);

module.exports = router;
