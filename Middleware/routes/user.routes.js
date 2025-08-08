const express = require('express')
const router = express.Router()

//Route Level Middleware(Type 2)
router.use((req, res, next)=>{
    console.log("Route level Middleware..")
    const err = new Error("Error coming")
    next(err)
})


//localhost:8000/user/contact
router.get('/contact',(req, res)=>{
    res.send("<h1 align='center'>User Contact Page</h1>")
})

//localhost:8000/user/profile
router.get('/profile',(req, res)=>{
    res.send("<h1 align='center'>User Profile Page</h1>")
})

module.exports = router