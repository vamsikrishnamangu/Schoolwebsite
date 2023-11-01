const activityModel = require("../Models/activityModel");

const activityData = async (req, res) => {
  try {
    const { Heading, Description, Photo, year, Month, Pdf } = req.body;
    const newData = new activityModel({
      Heading,
      Description,
      Photo,
      year,
      Pdf,
      Month,
    });
    await newData.save();
    return res.send(201)({
      status: true,
      msg: "data created succesfully",
      data: newData,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getactivityData = async (req, res) => {
  try {
    const activityData = await activityModel.find({ isDeleted: false });
    res.status(200).send({
      status: true,
      msg: "activityData retrieved succesfully",
      data: activityData,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getactivityById = async (req, res) => {
  const activityId = req.params.activityId;
  const activityData = await activityModel.findOne({
    activityId: activityId,
    isDeleted: false,
  });
  return res
    .status(200)
    .send({ status: true, msg: "Data fetch succesfully", data: activityData });
};

const updateactivityData = async (req, res) => {
  try {
    const { Heading, Description, Photo, year, Month, Pdf } = req.body;
    const activityId = req.params.activityId;
    const Updateactivity = await activityModel.findOneAndUpdate(
      { activityId: activityId },
      {
        $set: {
          Heading: Heading,
          Description: Description,
          Photo: Photo,
          year: year,
          Month: Month,
          Pdf: Pdf,
        },
      },

      { new: true }
    );
    return res.status(200).send({
      status: true,
      msg: "Data updated successfully",
      data: Updateactivity,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const Deleteactivitydata = async (req, res) => {
  try {
    const result = await activityModel.deleteMany({});
    res.send(`Deleted ${result.deletedCount} activitydata`);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};
const DeleteactivityById = async (req, res) => {
  try {
    let activityId = req.params.activityId;

    const page = await activityModel.findOne({ activityId: activityId });
    if (!page) {
      return res.status(400).send({ status: false, message: `page not Found` });
    }
    if (page.isDeleted == false) {
      await activityModel.findOneAndUpdate(
        { activityId: activityId },
        { $set: { isDeleted: true, deletedAt: new Date() } }
      );

      return res
        .status(200)
        .send({ status: true, message: `Data deleted successfully.` });
    }
    return res
      .status(400)
      .send({ status: true, message: `Data has been already deleted.` });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};
module.exports = {
  activityData,
  getactivityData,
  getactivityById,
  updateactivityData,
  Deleteactivitydata,
  DeleteactivityById,
};
