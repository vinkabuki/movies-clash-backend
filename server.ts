import express = require("express");
import cors from "cors";

import recommendations from "./routes/api/recommendations";
import accept from "./routes/api/accept";
import reject from "./routes/api/reject";

const app: express.Application = express();

app.use(cors());
app.use("/recommendations", recommendations);
app.use("/accept", accept);
app.use("/reject", reject);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
