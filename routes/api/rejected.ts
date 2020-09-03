import express = require("express");
const router: express.Router = express.Router();
const db = require("./../../db.json");

router.get("/", (req: express.Request, res: express.Response) => {
	res.json(db.reject);
});

export default router;
