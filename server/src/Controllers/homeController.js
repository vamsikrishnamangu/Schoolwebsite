const homeModel = require("../Models/homeModel");

const homeData = async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }
    const Photo = req.file.buffer.toString("base64");
    const { Heading, Description } = req.body;

    const newData = new homeModel({
      Heading,
      Description,
      Photo,
    });
    await newData.save();
    return res.status(201).send({
      // Corrected status code setting
      status: true,
      msg: "data created successfully",
      data: newData,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getData = async (req, res) => {
  try {
    const homeData = await homeModel.find({ isDeleted: false });
    res.status(200).send({
      status: true,
      msg: "homeData retrieved succesfully",
      data: homeData,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getById = async (req, res) => {
  const homeId = req.params.homeId;
  const homeData = await homeModel.findOne({
    homeId: homeId,
    isDeleted: false,
  });
  return res
    .status(200)
    .send({ status: true, msg: "Data fetch succesfully", data: homeData });
};

const updateData = async (req, res) => {
  try {
    const { Heading, Description, Photo } = req.body;
    const homeId = req.params.homeId;

    // console.log("Updating homeId:", homeId);

    const UpdateHome = await homeModel.findByIdAndUpdate(
      homeId,
      { $set: { Heading, Description, Photo } },
      { new: true }
    );

    // console.log("Update result:", UpdateHome);

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

const Deletedata = async (req, res) => {
  try {
    const result = await homeModel.deleteMany({});
    res.send(`Deleted ${result.deletedCount} homedata`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};
const DeleteById = async (req, res) => {
  try {
    let homeId = req.params.homeId;

    const page = await homeModel.findOne({ homeId: homeId });
    if (!page) {
      return res.status(400).send({ status: false, message: `page not Found` });
    }
    if (page.isDeleted == false) {
      await homeModel.findOneAndUpdate(
        { homeId: homeId },
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
  homeData,
  getData,
  getById,
  updateData,
  Deletedata,
  DeleteById,
};
