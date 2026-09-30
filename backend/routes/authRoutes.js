const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser
} = require("../controllers/authController");



// Register API

router.post(
    "/register",
    registerUser
);



// Login API

router.post(
    "/login",
    loginUser
);





// Protected Profile Route

router.get(
    "/profile",
    authMiddleware,
    (req, res) => {

        res.json({

            message: "Profile accessed successfully",

            user: req.user

        });

    }
);


module.exports = router;