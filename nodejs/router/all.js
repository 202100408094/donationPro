const express = require('express')
const allFun = require("../router-handle/all-fun");
const router = express.Router();

router.get("/getAllUser",allFun.getAllUser)
router.get("/getAllCategory",allFun.getAllCategory)
router.get("/getUserByOther",allFun.getUserByOther)
router.get("/getUserById",allFun.getUserById)




module.exports = router;