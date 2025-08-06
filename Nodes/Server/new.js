const { log } = require('console');
const fs = require('fs')
let str = "Break the ice . BUll in a china shop";

// For synchronous file writing
// fs.writeFileSync('Test2.txt', str + "\n")


//For synchronous file reading
// const data = fs.readFileSync('Test2.txt')
// console.log(data.toString());

//For synchronous file appending
// fs.appendFileSync('Test2.txt', str+ "\n")

//File existing


// if(fs.existsSync('Test.txt')){

// //for deleting the file
// fs.unlink('Test.txt', (err)=>{
//     if(err) console.log("error "+err);
//     else console.log("data deleted")
// })
// }
// else console.log("File not existed")

// if(!fs.existsSync('nodeFolderForFileHand')){ //if that directory doesn't exist
// fs.mkdir('nodeFolderForFileHand', (err)=>{ //For creating the drectory inside the current directory
//     if(err) console.log(err);
//     else console.log("directory created")
// })
// }
// else{
//     console.log("Folder already exist")
// }


//For directory deletion

if(fs.existsSync('nodeFolderForFileHand')){ //if that directory doesn't exist
fs.rmdir('nodeFolderForFileHand', (err)=>{
    if(err) console.log(err);
        else console.log("directory deleted")
    
})

}
else{
    console.log("file already deleted")
}
