"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var db = require("./../../db.json");
router.get("/", function (req, res) {
    res.json(db.recommendations);
    db.accept = [];
    db.reject = [];
});
router.put("/:id/accept", function (req, res) {
    db.accept.push(req.params.id);
    res.status(200);
});
router.put("/:id/reject", function (req, res) {
    db.reject.push(req.params.id);
    res.status(200);
});
exports.default = router;
