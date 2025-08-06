// //In Node.js, the term "one round trip" usually refers to the complete cycle of sending a request and 
// // receiving a response between a client and a server (or a server and a database).
// const { log } = require('console')
// const http = require('http')
// const HOST = 'localhost' 
// const PORT = 8000
// const requestHandler = function(request, response){ // ye normal function nhi hota h isme do argument dete h req, response
//     response.end("<h1>Welcome to node Server...</h1>")

// }  
// //localhost:8000 - jb ye likhege browser pr tb requst aayegi
// const servre = http.createServer(requestHandler); // http.createServer me requestHandler functin pass krte h ye server bna kr return krega
// servre.listen(PORT, HOST, (err)=>{
//     if(err) console.log("server not started..."+err);
//     else console.log(`server running at http://${HOST}:${PORT}`);
    
    
// })
// // console.log(http);
