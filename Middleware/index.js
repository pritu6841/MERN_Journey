const express = require('express')
const app = express()
const HOST = 'localhost'
const PORT = 8000

const userRoute = require('./routes/user.routes')

app.use('/user', userRoute)

//yha pr agr hmne next() nhi likha to lgatar loading hoti rhegi
app.use((req,res, next)=>{ // use is used for middleware
    console.log("Middleware 1");
    next(); //IT will send request to another middleware
})

app.use((req, res, next)=>{
    console.log("Middleware 2");
    next();
    // res.send("Response send by middlware2") //yha pr middleware direct request send kr rha client ko. Isliye iske baad ka koi code execute nhi hoga
})


//Application level Middleware (Type 1)
app.use('/home',(req, res, next)=>{ //now it will only work when request come for /home only
    console.log("Middleware Home ");
    next();
})

//Error Handling Middleware -General Catch Handler(koi bhi error aayegi kisi bhi middleware , routes ya handler pr ye catch krlega)
app.use((err, req, res, next)=>{
    console.log("Handling Error Middleware..."+err);
    
})


app.get('/',(req, res)=>{
    res.send("<h1 align = 'center'> Application Default Page</h1>")
})

app.get('/home', (req, res)=>{
    res.send("<h1 align = 'center'> Application Home Page</h1>")
})

app.get('/about', (req, res)=>{
    res.send("<h1 align = 'center'> Application about Page</h1>")
})


app.listen(PORT, HOST, (err)=>{
    if(err) console.log("Error occured..."+err);
    else console.log(`Server running at http://${HOST}:${PORT}`);
    
})