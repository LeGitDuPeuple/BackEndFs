const express = require("express");
const router = express.Router();
const avis = require("../controllers/avis.controllers");

router.get("/", avis.getAdvice);
router.post("/", avis.setAdvice); 
router.delete("/:id", avis.deleteAdvice);
router.put("/:id",avis.updateAdvice);


module.exports = router;

