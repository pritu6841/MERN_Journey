const express = require('express')
const router = express.Router()
const {userDefault, userHome}= require('../controllers/user.controller')

//localhost:8000/admin jb is route pr request aayegi to yha handle hogi
//-------------------- by default admin tk ka route to hoga hi tbhi is page pr ayege
router.get('/',userDefault)

//localhost:8000/admin/home
//-------------------admin tk ka  default route hoga isliye bs /home ke 
router.get('/home', userHome)

module.exports = router