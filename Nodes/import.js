// let a = require('./export.js')

//destructuring import 
// let {age, names} = require('./export.js')
// console.log(names)

// console.log(name[0]+"->"+name[1]); // we can acess mutliple value ('using the array') access


// console.log(a.names +" "+a.age+" ") // object import

//---------------------------------------------------------------------------------------------------------

// let [f1, f2] = require('./export.js') //destructuring of happen on the bassis of their position


//agr hm chahte h name na chnage ho hmare function ya variavle ka jo hmne use kisya h
//uske liye object export krege kyoki ise value key ke basis pr acess krte h
let {fun1, fun2} = require('./export.js')
fun1();fun2();