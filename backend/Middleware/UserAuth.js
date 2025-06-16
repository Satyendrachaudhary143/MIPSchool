import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.id;
        req.role = decode.role;
        // Check if the user is authenticated and has the correct role
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;