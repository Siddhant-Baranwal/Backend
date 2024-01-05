import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode=200) => {
    const token = jwt.sign({_id: user._id }, process.env.JWT_SECRET);
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15*24*60*60*1000,
        // this will expire the cookie after 15 days.
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true, 
    }).json({
        success: true,
        message,
    });
}