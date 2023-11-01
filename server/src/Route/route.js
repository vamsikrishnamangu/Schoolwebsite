const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage(); // using memory storage for simplicity
const upload = multer({ storage: storage });
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
router.get("/getById/:homeId", getById);
router.put("/updateData/:homeId", upload.single("Photo"), updateData);
router.delete("/deleteData", Deletedata);
router.delete("/deleteId/:homeId", DeleteById);

//contact//
router.post("/contacData", StudentContacts);
router.get("/getcontactData", getAllContacts);
router.get("/getcontactById/:contactId", getContactById);
router.put("/updataecontactData/:contactId", updateContact);
router.delete("/deletecontactData", deleteContact);

//About//
router.post("/createaboutData", upload.single("Photo"), aboutData);
router.get("/getaboutData", getaboutData);
router.get("/getaboutById/:aboutId", getaboutById);
router.put(
  "/updataabouteData/:aboutId",
  upload.single("Photo"),
  updateaboutData
);
router.delete("/deleteaboutData", Deleteaboutdata);
router.delete("/deleteaboutId/:aboutId", DeleteaboutById);

//Activity//
router.post(
  "/createactivityData",
  upload.fields([{ name: "Photo" }, { name: "Pdf" }]),
  activityData
);
router.get("/getactivityData", getactivityData);
router.get("/getactivityById/:activityId", getactivityById);
router.put(
  "/updataactivityeData/:activityId",
  upload.fields([{ name: "Photo" }, { name: "Pdf" }]),
  updateactivityData
);
router.delete("/deleteactivityData", Deleteactivitydata);
router.delete("/deleteactivityId/:activityId", DeleteactivityById);

module.exports = router;
