const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({//It will create a datastructure of schema of what values willl store inside the collection 
    userName:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    isActive:{type:Boolean, required:true, default:false},
    hasRole:{type:String, enum:["admin", "user"], default:'user'},
    createdAt:{type:Date, default:Date.now}
})

const userModel = new mongoose.model('UserData', UserSchema)//It will create a collection of UserData name inside the db

module.exports = userModel