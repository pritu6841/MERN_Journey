const express = require('express')
const router = express.Router()
const {adminDefault, adminHome, getAdminData, addUser, showUser, editUser, deleteUser} = require('../controllers/admin.controller')

//localhost:8000/admin jb is route pr request aayegi to yha handle hogi
//-------------------- by default admin tk ka route to hoga hi tbhi is page pr ayege
router.get('/',adminDefault)

router.get('/addUser', addUser) //ge req  page show kregi form wala

//Post Request
router.post ('/addUser', addUser)//post req data ko mongodb me post krgi

//localhost:8000/admin/showUser
router.get('/showUser', showUser )

//localhost:8000/admin/editUser
router.get('/editUser/:id', editUser)
router.post('/editUser/:id', editUser)

//localhost:8000/admin/deleteUser
router.get('/deleteUser/:id',deleteUser );

//localhost:8000/admin/home
//-------------------admin tk ka  default route hoga isliye bs /home ke 
// router.get('/home', (req, res)=>{
//     res.send("<h1 align='center'> Admin Home Page</h1>")
// })

router.get('/home', adminHome) // yha se wo controller pr jaaega adminHome function  ko call rkega aur phle jaise kaamkrega

router.get('/:adminName', getAdminData) //now it will work for every name


module.exports = router