

const jwt = require("jsonwebtoken");


const authMiddleware = (req,res,next)=>{

    try {


        const token = req.headers.authorization;


        console.log("AUTH HEADER:", token);



        if(!token){

            return res.status(401).json({
                message:"No token provided"
            });

        }


        const actualToken = token.split(" ")[1];


        const decoded = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );


        console.log("DECODED USER:", decoded);



        req.user = decoded;


        next();



    } catch(error){


        console.log("AUTH ERROR:", error.message);


        return res.status(401).json({
            message:"Invalid token"
        });


    }

};


module.exports = authMiddleware;