"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors_1 = __importDefault(require("cors"));
var recommendations_1 = __importDefault(require("./routes/api/recommendations"));
var accept_1 = __importDefault(require("./routes/api/accept"));
var reject_1 = __importDefault(require("./routes/api/reject"));
var corsOptions = {
    origin: "https://vinkabuki.github.io/movies-clash/",
};
var app = express();
app.use(cors_1.default(corsOptions));
app.use("/recommendations", recommendations_1.default);
app.use("/accept", accept_1.default);
app.use("/reject", reject_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on " + PORT); });
