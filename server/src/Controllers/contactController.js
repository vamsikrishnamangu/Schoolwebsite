const express = require("express");
const contactModel = require("../Models/contactModel");

const nodemailer = require("nodemailer");

const StudentContacts = async (req, res) => {
  try {
    const { Email, ReEnteremail } = req.body;

    // Save data to database first
    const contact = new contactModel({
      Email,
      ReEnteremail,
    });
    await contact.save();

    // Now send email to the enquiry team
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your preferred email service
      auth: {
        user: "nikitalilhore123@gmail.com", // Your email
        pass: "dzjfxzvmwndjwmme", // Your email password
      },
    });

    const mailOptions = {
      from: "nikitalilhore123@gmail.com",
      to: "nikitalilhore2004@gmail.com", // The email of the enquiry team
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
          data: contact,
        });
      }
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await contactModel.find({ isDeleted: false });
    res.status(200).send({
      status: true,
      msg: "Contacts retrieved successfully",
      data: contacts,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const getContactById = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const contact = await contactModel.findById(contactId);
    if (!contact) {
      return res.status(404).send({
        status: false,
        msg: "Contact not found",
      });
    }
    res.status(200).send({
      status: true,
      msg: "Contact retrieved successfully",
      data: contact,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const { Email, ReEnteremail } = req.body;

    const updatedContact = await contactModel.findByIdAndUpdate(
      contactId,
      { $set: { Email: Email, ReEnteremail: ReEnteremail } },
      { new: true }
    );
    return res.status(200).send({
      status: true,
      msg: "Data updated successfully",
      data: updatedContact,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "server error", error: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const deletedContact = await contactModel.findByIdAndDelete(contactId);

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
  StudentContacts,
  getAllContacts,
  getContactById,
  deleteContact,
  updateContact,
};
