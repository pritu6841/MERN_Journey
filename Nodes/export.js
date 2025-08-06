let names = "Ritu Pathak"
let age = 89
// module.exports = "Bebu"  //we're exporting string literal here

module.exports = names //we're exporting string literal here
module.exports = 45 // we'll get this export (For multiple exports it only exports the last exported)

//Array export
// module.exports = [45, names] //for more than one value exporting

// -----------------------------------------------------------------------------------------------------------------------------------

//Object export

module.exports = {names , age}


function fun1(){
    console.log("Fun1 calling....");
}


function fun2(){
    console.log("Fun2 calling....");
}

// module.exports = [fun1, fun2] using array for multiple exports

module.exports = {fun1, fun2}