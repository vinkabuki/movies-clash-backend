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
    res.status(204).json(req.params.id);
    db.accept.push(req.params.id);
});
router.put("/:id/reject", function (req, res) {
    res.status(204);
    db.reject.push(req.params.id);
});
exports.default = router;
