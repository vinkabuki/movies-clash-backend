"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var db = require("./../../db.json");
router.get("/", function (req, res) {
    res.json(db.reject);
});
exports.default = router;
