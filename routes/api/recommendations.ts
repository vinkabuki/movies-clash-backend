import express = require("express");
const router: express.Router = express.Router();
const db = require("./../../db.json");

router.get("/", (req: express.Request, res: express.Response) => {
	res.json(db.recommendations);
	db.accept = [];
	db.reject = [];
});
router.put("/:id/accept", (req: express.Request, res: express.Response) => {
	res.status(204).json(req.params.id);
	db.accept.push(req.params.id);
});
router.put("/:id/reject", (req: express.Request, res: express.Response) => {
	res.status(204);
	db.reject.push(req.params.id);
});
export default router;
