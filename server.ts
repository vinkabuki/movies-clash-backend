import express = require("express");
import cors from "cors";

import recommendations from "./routes/api/recommendations";

const app: express.Application = express();

app.use(cors());
app.use("/recommendations", recommendations);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
