const homeModel = require("../Model/homeModel");

const homeData = async (req, res) => {
  try {
    const { Heading, Description, photo } = req.body;
    const newData = new homeModel({
      Heading,
      Description,
      photo,
    });
    await newData.save();
    return res.send(201)({
      status: true,
      msg: "data created succesfully",
      data: newData,
    });
  } catch (err) {
    return res.status(500).send({ status: false, msg: "server error" });
  }
};

const getData = async (req, res) => {
  try {
    const homeData = await homeModel.find();
    res.status(200).send({
      status: true,
      msg: "homeData retrieved succesfully",
      data: homeData,
    });
  } catch (err) {
    return res.status(500).send({ status: false, msg: "server error" });
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
    const UpdateHome = await homeModel.findOneAndUpdate(
      {
        homeId: homeId,
        $set: { Heading: Heading, Description: Description, Phot: Photo },
      },
      { new: true }
    );
    return res.status(200).send({
      status: true,
      msg: "Data updated successfully",
      data: UpdateHome,
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const Deletedata = async (req, res) => {
  try {
    const result = await homeModel.deleteMany({});
    res.send(`Deleted ${result.deletedCount} homedata`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
module.exports = { homeData, getData, getById, updateData, Deletedata };
