const aboutModel = require("../Models/aboutModal");
const multer = require("multer");
const upload = multer();

const aboutData = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }
    // Convert image to base64
    const Photo = req.file.buffer.toString("base64");
    const newData = new aboutModel({
      Photo,
    });
    await newData.save();

    return res.status(201).send({
      status: true,
      msg: "Data created successfully",
      data: newData,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getaboutData = async (req, res) => {
  try {
    const aboutData = await aboutModel.find({ isDeleted: false });
    res.status(200).send({
      status: true,
      msg: "aboutData retrieved succesfully",
      data: aboutData,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getaboutById = async (req, res) => {
  const aboutId = req.params.aboutId;
  const aboutData = await aboutModel.findOne({
    aboutId: aboutId,
    isDeleted: false,
  });
  return res
    .status(200)
    .send({ status: true, msg: "Data fetch succesfully", data: aboutData });
};

const updateaboutData = async (req, res) => {
  try {
    const { Photo } = req.body;
    const aboutId = req.params.aboutId;
    const UpdateHome = await aboutModel.findOneAndUpdate(
      { aboutId: aboutId },
      { $set: { Photo: Photo } },
      { new: true }
    );
    return res.status(200).send({
      status: true,
      msg: "Data updated successfully",
      data: UpdateHome,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

//Delete all data
const Deleteaboutdata = async (req, res) => {
  try {
    const result = await aboutModel.deleteMany({});
    res.send(`Deleted ${result.deletedCount} aboutData`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const DeleteaboutById = async (req, res) => {
  try {
    let aboutId = req.params.aboutId;

    const page = await aboutModel.findOne({ aboutId: aboutId });
    if (!page) {
      return res.status(400).send({ status: false, message: `page not Found` });
    }
    if (page.isDeleted == false) {
      await aboutModel.findOneAndUpdate(
        { aboutId: aboutId },
        { $set: { isDeleted: true, deletedAt: new Date() } }
      );

      return res
        .status(200)
        .send({ status: true, message: `Data deleted successfully.` });
    }
    return res
      .status(400)
      .send({ status: true, message: `Data has been already deleted.` });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};
module.exports = {
  aboutData,
  getaboutData,
  getaboutById,
  updateaboutData,
  Deleteaboutdata,
  DeleteaboutById,
};
