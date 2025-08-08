const UserModel = require('../models/admin.model')
const adminDefault = (req, res)=>{
    // res.send("<h1 align='center'> Admin Default Page</h1>")
    res.render('adminViews/adminDefault')
}
//localhost:8000/admin/addUser, method=get
const addUser = async(req, res)=>{
    if(req.method == "POST"){
        const newUser = new UserModel({//creating new user
            userName : req.fields.unm, //unm name liy gya h addData.ejs me jo table deifne h wha se
            email : req.fields.email,//form se email name kiya gya h
            password : req.fields.pwd//form se pwd uska name attribute se liya gya h and password name hmne schema wala same name lena h
        })
        let user = await newUser.save() //ye save ki responsibitilty h ki wo pura data mongo db me leja kr save krde
        if(user){
            res.render('adminViews/addUser', {msg:`Record added succesfully...`})
        }
        console.log(user);
        
    }else res.render('adminViews/addUser',{msg:null})
}

const adminHome = (req, res)=>{
    // res.send("<h1 align='center'> Admin Home Page</h1>")
    let userData = [
        {uid:1001, unm:"Ritu", email:"pritu@gmail.com"},
        {uid:1002, unm:"Ritu", email:"pritu@gmail.com"},
        {uid:1003, unm:"Ritu", email:"pritu@gmail.com"},
        {uid:1004, unm:"Ritu", email:"pritu@gmail.com"},
        {uid:1005, unm:"Ritu", email:"pritu@gmail.com"}
    ]
    res.render('adminViews/adminHome',{userData})
}
const getAdminData = (req, res)=>{
    let nm = req.params.adminName;
    res.send(`<h1 align='center'> Admin ${nm} Data Page</h1>`)
}



const showUser = async(req, res)=>{

    const userData = await UserModel.find();
    
    res.render('adminViews/showUsers',{userData})
}

const editUser = async(req, res)=>{
    
    if(req.method == 'POST'){

        const updateUser = await UserModel.findByIdAndUpdate(req.params.id,{userName:req.fields.unm,password:req.fields.pwd, email:req.fields.email}, {new: true}) //new:true ->updated user save hokr return hojaega
        if(updateUser) res.render('adminViews/editUser',{userData:updateUser, msg:"User data updated Succesfuuly"})

    }else{
    const userData = await UserModel.findOne({_id:req.params.id}); //is trh se hme jis id ko touch krege wo id hme mil jaegu
    res.render('adminViews/editUser',{userData, msg:null})
}
}

const deleteUser = async(req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if(user) res.redirect('/admin/showUser')
}

module.exports = {adminDefault, adminHome, getAdminData, addUser, showUser, editUser, deleteUser}
