const express = require("express");
const admissionModel = require("../Models/admissionModel");

const nodemailer = require("nodemailer");

const Studentadmissions = async (req, res) => {
  try {
    const { Email, ReEnteremail } = req.body;

    // Save data to database first
    constadmission = new admissionModel({
      Email,
      ReEnteremail,
    });
    awaitadmission.save();

    // Now send email to the enquiry team
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your preferred email service
      auth: {
        user: "yourEmail@gmail.com", // Your email
        pass: "yourEmailPassword", // Your email password
      },
    });

    const mailOptions = {
      from: "yourEmail@gmail.com",
      to: "enquiryTeamEmail@example.com", // The email of the enquiry team
      subject: "New Student Details Submission",
      text: `
        Email: ${contact.Email}
        Re-enter Email: ${contact.ReEnteremail}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({
          status: false,
          msg: "Email not sent!",
        });
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).send({
          status: true,
          msg: "Data created and email sent successfully",
          data: admission,
        });
      }
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getAlladmissions = async (req, res) => {
  try {
    const admissions = await admissionModel.find({ isDeleted: false });
    res.status(200).send({
      status: true,
      msg: "admissions retrieved successfully",
      data: admissions,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const admissionId = req.params.admissionId;
    const admission = await admissionModel.findById(admissionId);
    if (!contact) {
      return res.status(404).send({
        status: false,
        msg: "Contact not found",
      });
    }
    res.status(200).send({
      status: true,
      msg: "Contact retrieved successfully",
      data: admission,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      msg: "server error",
      error: err.message,
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const admissionId = req.params.admissionId;
    const { Email, ReEnteremail } = req.body;

    const updatedContact = await admissionModel.findByIdAndUpdate(
      admissionId,
      { $set: { Email: Email, ReEnteremail: ReEnteremail } },
      { new: true }
    );
    return res.status(200).send({
      status: true,
      msg: "Data updated successfully",
      data: updatedContact,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const admissionId = req.params.admissionId;
    const deletedContact = await admissionModel.findByIdAndDelete(admissionId);

    if (!deletedContact) {
      return res.status(404).send({
        status: false,
        msg: "Contact not found",
      });
    }

    res.status(200).send({
      status: true,
      msg: "Contact deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

module.exports = {
  Studentadmissions,
  getAlladmissions,
  getContactById,
  deleteContact,
  updateContact,
};
