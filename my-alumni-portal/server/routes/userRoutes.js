const express = require("express");
const {registerUser, authUser, deleteUser, allUsers} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

//const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//router.route("/").get(protect, allUsers);
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
router.route("/deleteUser").delete(deleteUser);

module.exports = router;