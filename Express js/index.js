const express = require('express') //You are importing the Express toolkit into your program so you can use it to easily build a website or API.
const formidable = require('express-formidable')
const db = require('./dbConn')
const app = express() // after calling express it wil create and return an app

const HOST = 'localhost' //127.0.0.1
const PORT = 8000

app.set('view engine', 'ejs') //set the veiw folder 
app.use(express.static('public')) //now the browser will automatically recognize the public
app.use(formidable())

//------------------------------importing the /admin route form adminRoutes.js-------------------------------------------
const adminRoutes = require('./routes/adminRoutes')
app.use('/admin', adminRoutes);//localhost:8000/admin ab bs admin likh dege to wo adminRoutes.js file pr daal dega




const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes);//localhost:8000/user ab bs admin likh dege to wo userRoutes.js file pr daal dega


//Default handler
app.get('/', (req, res)=>{
    // res.send("<h2>Application default page </h2>")
    let name = "Ritu Pathak"
    let msg = "<font size='4' face='chiller'>Hello</font>"
    let isValid = false;
    res.render('default', { name, msg , isValid}) //it will render the page that i want to (default.ejs)
})





app.get('/home', (req, res)=>{
    let nme = "bebu"
    let arr = [1, 2,3 ,4, 5, 6, 7]
    let userData = {uid:101, unm:"kaju", depar: "HR"}
    res.render('home', {nme, arr, userData}) //home.ejs file inside the view folder
})



app.get('/about', (req, res)=>{
    res.send("<h1>This is about Page</h1>")
})
app.post('/', (req, res)=>{
    res.send("Post Request Handler...")
})




app.listen(PORT, HOST, (err)=>{
    if(err) console.log(err)
    else console.log(`Server running at http://${HOST}:${PORT} `)
})

