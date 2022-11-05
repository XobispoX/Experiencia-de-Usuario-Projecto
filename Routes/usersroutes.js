const express = require("express");
const { addressController } = require("../Controllers/address.controller");

const addressRouter = express.Router();

addressRouter.get("/", addressController);

module.exports = addressRouter;