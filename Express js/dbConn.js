const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/clg"

mongoose.connect(mongoURI)
.then(()=>{
    console.log("Connection sunccessfully established");
})
.catch((err)=>{
    console.log("DataBase Connection Failed "+err);
})

module.exports = mongoose