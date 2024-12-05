const Users = require('../model/user.js');
const cloudinary = require('../library/cloudynaryConfig.js')

const userImage = async(req,res)=>{
    let userData = await Users.findOne({ _id: req.user.id });
    if(!userData){
        res.status(401).send({error: "Please login first"})
        return 0;
    }else{
        try {
            // Check if file exists
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }
    
            // Upload image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
    
            // Respond with image URL from Cloudinary
            res.status(200).json({ success: true, image_url: result.secure_url });
        } catch (err) {
            console.error('Error uploading image:', err);
            res.status(500).json({ error: 'Failed to upload image' });
        }
       
    }
}

const getUserProfile = async (req, res) => {
    try {
      const user = await Users.findOne({ _id: req.user.id });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.status(200).json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch user data' });
    }
};
const getAllUsers = async (req, res)=>{
    let userData = await Users.findOne({ _id: req.user.id });
    if(!userData.isAdmin){
        res.status(401).send({error: "User is not an Admin"})
        return 0;
    }else{
        try {
            const user = await Users.find({});
            if (!user) {
              return res.status(404).json({ success: false, message: 'Users not found' });
            }
            res.status(200).json({ success: true, user });
          } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to fetch users data' });
          }
    }
    
}

const deleteUser = async (req, res)=>{
    let userData = await Users.findOne({ _id: req.user.id });
    if(!userData.isAdmin){
        res.status(401).send({error: "User is not an Admin"})
        return 0;
    }else{
        try {
            console.log("Email user: "+ req.body.email);
            
            const user = await Users.findOneAndDelete({email: req.body.email});
            if (!user) {
              return res.status(404).json({ success: false, message: 'Users not found' });
            }
            res.status(200).json({ success: true, user });
          } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to fetch users data' });
          }
    }
}

const saveUser= async(req,res)=>{
    
    try {
        // Fetch existing user by ID
        const userData = await Users.findOne({ _id: req.user.id });

        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update user details
        userData.name = req.body.name || userData.name; // Update if provided
        userData.email = req.body.email || userData.email;   // Update if provided
        userData.gender = req.body.gender || userData.gender; // Update if provided
        userData.address = req.body.address || userData.address
        userData.image = req.body.image || userData.image

        // Save updated user data
        await userData.save();

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user: userData,
        });
    } catch (err) {
        console.error('Error saving user data:', err);
        res.status(500).json({ error: 'Failed to save user data' });
    }
}

module.exports= {
    saveUser,
    userImage,
    getUserProfile,
    getAllUsers,
    deleteUser
}