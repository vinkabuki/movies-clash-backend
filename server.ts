import express = require("express");
import cors from "cors";

import recommendations from "./routes/api/recommendations";
import accepted from "./routes/api/accepted";
import rejected from "./routes/api/rejected";

const corsOptions = {
	origin: "https://vinkabuki.github.io/movies-clash/:1",
};

const app: express.Application = express();

app.use(cors(corsOptions));
app.use("/recommendations", recommendations);
app.use("/accepted", accepted);
app.use("/rejected", rejected);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
