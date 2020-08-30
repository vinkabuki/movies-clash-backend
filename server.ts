import express = require("express");
import cors from "cors";

import recommendations from "./routes/api/recommendations";

const app: express.Application = express();

app.use(cors());
app.use("/recommendations", recommendations);

app.listen(5000, function () {
	console.log("App is listening on port 5000!");
});
