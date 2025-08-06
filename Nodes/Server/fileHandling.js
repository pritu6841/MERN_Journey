// File Handling
const fs = require('fs')
let sent = "Birds of same feather flocks together"

//Appending data in file
//=======================
fs.appendFile('Test.txt', sent+"\n", (err)=>{
    if(err) console.log("error in appending "+err);
    else console.log("Data Appended..")
})
//----------------------------------------------------------------------------------------------------------------------------
//Writing data in a file if file doesn't exist it create the file and write it
//=============================================================================

// fs.writeFile('Test.txt', sent + "\n", (err, data)=>{
//     if(err) console.log("error "+err)
//     else console.log("Data Saved")
// })


//------------------------------------------------------------------------------------------------------------------------------------
// file reading
//==============

// fs.readFile('Test.txt', (err, data)=>{
//     if(err) console.log("error occurred "+err);
//     else console.log(data.toString());
// })

