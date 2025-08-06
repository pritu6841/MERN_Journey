//In Node.js, the term "one round trip" usually refers to the complete cycle of sending a request and 
// receiving a response between a client and a server (or a server and a database).
const { log } = require('console')
const http = require('http')
const HOST = 'localhost' 
const PORT = 8000
const requestHandler = function(request, response){ // ye normal function nhi hota h isme do argument dete h req, response
    console.log(request.method, request.url);
    switch(request.url){
        case '/':
            response.end("welcome the server is started")
            break
        case '/home':
            response.end('<h1>Welcome to the home page</h1>');
            break
        case '/about':
            response.end('<h1>Welcome to the about page</h1>');
            break
        case '/service':
            response.end('<h1>Welcome to the service page</h1>');
            break
        case '/contact':
            response.end('<h1>Welcome to the contact page</h1>');
            break
        default:
            response.end("<h1>Error...</h1>")
            break
               
    }
}  
//localhost:8000 - jb ye likhege browser pr tb requst aayegi
const servre = http.createServer(requestHandler); // http.createServer me requestHandler functin pass krte h ye server bna kr return krega
servre.listen(PORT, HOST, (err)=>{
    if(err) console.log("server not started..."+err);
    else console.log(`server running at http://${HOST}:${PORT}`);
    
    
})
// console.log(http);
