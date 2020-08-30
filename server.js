"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors_1 = __importDefault(require("cors"));
var recommendations_1 = __importDefault(require("./routes/api/recommendations"));
var app = express();
app.use(cors_1.default());
app.use("/recommendations", recommendations_1.default);
app.listen(5000, function () {
    console.log("App is listening on port 5000!");
});
