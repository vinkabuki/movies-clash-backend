import express = require("express");
const router: express.Router = express.Router();
const db = require("./../../db.json");

router.get("/", (req: express.Request, res: express.Response) => {
	res.json(db.recommendations);
	db.accept = [];
	db.reject = [];
});
router.put("/:id/accept", (req: express.Request, res: express.Response) => {
	db.accept.push(req.params.id);
	res.status(204).send();
});
router.put("/:id/reject", (req: express.Request, res: express.Response) => {
	db.reject.push(req.params.id);
	res.status(204).send();
});
export default router;
