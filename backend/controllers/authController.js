const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


// Register User
const registerUser = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;


        // Check existing user
        const existingUser = await User.findOne({
            email
        });


        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }


        // Password Hashing
        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create User
        const user = await User.create({

            name,

            email,

            password: hashedPassword,

            role

        });


        // res.status(201).json({

        //     message: "User registered successfully",

        //     user

        // });
        res.status(201).json({

            message: "User registered successfully",

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

                role: user.role

            }

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// module.exports = {
//     registerUser
// };


// Login User

const loginUser = async (req, res) => {

    try {

        // const {
        //     email,
        //     password
        // } = req.body;
        const {
            email,
            password,
            role
        } = req.body;


        // Find User

        // const user = await User.findOne({
        //     email
        // });
        const user = await User.findOne({
            email,
            role
        });


        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }


        // Compare Password

        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );


        if (!isPasswordMatch) {

            return res.status(400).json({

                message: "Invalid password"

            });

        }


        // Create Token

        const token = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );


        res.status(200).json({

            message: "Login successful",

            token,

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

                role: user.role

            }

        });



    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


module.exports = {
    registerUser,
    loginUser
};