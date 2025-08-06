const adminDefault = (req, res)=>{
    // res.send("<h1 align='center'> Admin Default Page</h1>")
    res.render('adminViews/adminDefault')
}

const adminHome = (req, res)=>{
    res.send("<h1 align='center'> Admin Home Page</h1>")
}
const getAdminData = (req, res)=>{
    let nm = req.params.adminName;
    res.send(`<h1 align='center'> Admin ${nm} Data Page</h1>`)
}


module.exports = {adminDefault, adminHome, getAdminData}
