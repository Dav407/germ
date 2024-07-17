import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;  
    
    if (!username || !email || !password || username === '' || email === '' || password === '') {
<<<<<<< HEAD
        next(errorHandler(400, 'All fields required'));k
=======
        next(errorHandler(400, 'All fields required'));
>>>>>>> db563f23cfac73c06e626a22388feaee4f04af72
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json('signup successful');
        } catch (error) {
            next(error);
        }
};