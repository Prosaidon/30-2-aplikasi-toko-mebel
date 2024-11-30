const mongoose = require('mongoose');

const Users = mongoose.model('Users',{
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,

    },
    address : {
        type : String,

    },
    gender : {
        type : String,

    },
    image : {
        type : String,

    },
    cartData : {
        type : Object,

    },
    date : {
        type : Date,
        default : Date.now,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    }
  })

  module.exports = Users