const express = require("express");
const Users = require("../models/users");
const jwt = require('jsonwebtoken')


const saveToken = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"];
    if (!token) {
      return res.status(404).json({
        message: "Unauthorized",
      });
    }

    jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      req.userId = decoded.id;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//exporting module
 module.exports = {
 saveToken,
};