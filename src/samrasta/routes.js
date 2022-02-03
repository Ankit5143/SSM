const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// router.get('/', (req, res) => {
//     res.send("using api route");
// });

router.get("/", controller.getSamrasta);
router.post("/", controller.addSamrasta);
router.get("/:id", controller.getSamrastaById);
router.put("/:id", controller.updateSamrasta);
router.delete("/:id", controller.removeSamrasta);

module.exports = router;