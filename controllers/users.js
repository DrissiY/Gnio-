import User from "../models/User";


// Read  Functions

export const getUser = async (req, res) => {
    try {
   const {id} = req.params;
   const user = await User.findOne(id);
   res.status(200).json(user)


    }
    catch(error){res.status(404).json({message : err.message})};
}

export const getUserFriends = async(req,res) => {
    try{
   const {id} = req.params;
   const user = await User.findOne(id);

   const friends = await promise.all(User.friends.map((id) => User.findById(id)));

   const formattedFriends = friends.map(({_id,firstName,lastName,occupation,location,picturePath})=>{
    return {_id,firstName,lastName,occupation,location,picturePath};
})
  res.status(200).json(formattedFriends);
    }
    catch(error){res.status(404).json({message : err.message})};
}

// Update functions 

export const addRemoveFriend = async (req,res) => {
    try{
   const { id, friendId} = req.params;
   const user = await User.findById(id);
   const friend = await User.findById(friendId);

   if(user.friends.includes(friendId) ){
    user.friends = user.friends.filter((id) => id !== friendId);
    friend.friends = friend.friends.filter((id)=> id !== id);
   }
   else {
    user.friends.push(friendId);
    friend.friends.push(id);
   }

   await user.save();
   await friend.save();

   const friends = await promise.all(User.friends.map((id) => User.findById(id)));

   const formattedFriends = friends.map(({_id,firstName,lastName,occupation,location,picturePath})=>{
    return {_id,firstName,lastName,occupation,location,picturePath};
})
  res.status(200).json(formattedFriends);
   

    }
    catch(error){res.status(404).json({message : err.message})};
}