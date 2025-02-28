import jwt from "jsonwebtoken";
const authMiddleWare=(req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
     console.log(token);
     if(!token){
        return res.status(401).send({
            message:"Token missing .unauthorised",
            success:false,

        });
    }
        try{
            //verify the token using secret key
            const decodedToken=jwt.verify(token,process.env.SECRET_KEY);
            req.body.userId=decodedToken.userId;
            next()
        }
        catch(err){
            return res.status(401).send({
                message:"invalid token",
                success:false
            })

        }
     
}
export default authMiddleWare;