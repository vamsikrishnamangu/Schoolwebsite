const express = require("express");
const contactModel = require("../Model/contactModel");

const createdata = async (req, res) => {
  try {
    const { email, ReEnteremail } = req.body;
    const newContact = new contactModel({
      email,
      ReEnteremail,
    });
    await newContact.save();
    return res.status(201).send({
      status: true,
      msg: "contact details created succesfully",
      data: newContact,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ status: false, message: "server error" });
  }
};

module.exports = { createdata };
