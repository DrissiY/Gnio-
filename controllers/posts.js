import Post from "../models/Post.js"
import User from '../models/User.js';


//Create

export const createPost  = async (req,res) => {
    try{
const {userId, description, picturePath} = req.body;
const user = await User.findById(userId);
const newPost = new post({ 
userId,
firstName: user.firstName,
lastName: user.lastName,
location: user.location,
description,
userPicturePath: user.userPicturePath,
picturePath,
like: {},
comments: []

})
await newPost.save();

const post = await Post.find();
res.status(201).json(post)


} catch(err){res.status(500).json({message:err.message})}
}


//update