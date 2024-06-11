const jwt = require('jsonwebtoken');
const Users = require('../model/user.js')

const login = async(req, res)=>{
    //mencari email user di database
    let user = await Users.findOne({email: req.body.email});
    if(user){
        //membandingkan password yang dimasukan oleh user dengan password yang ada di database
        const passCompare = req.body.password === user.password;
        const isAdmin =  user.isAdmin;
        if(passCompare){
            const data = {
                user : {
                    id : user.id
                }
            }
            if(isAdmin){
                let url = isAdmin ? 'http://localhost:5173/' : false;
                AdminUrl = url
                
            }
            const token = jwt.sign(data, process.env.SECREET_USER);
            res.json({succes:true, token, url:AdminUrl})
          
        }
        else{
            res.json({success:false, error:"Email/Password anda salah!"})
        }
    }
    else{
        res.json({success:false, error:"Email/password anda salah!"})
    }
}   

const admin = async(req, res)=>{
    // let user = await Users.findOne({email: req.body.email});
    // const data = {
    //     user : {
    //         id : user.id
    //     }
    // }
    // const token = jwt.sign(data, process.env.SECREET_USER);
    // res.json({succes:true, token})
}

module.exports = {
    login,
    admin
};