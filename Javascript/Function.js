/*

Javascipt me function "First class Citizen" ki trh treat kr skta h


undefined ke sath koi bhbi operation krne pr NaN ata h
------------------------------------------------------------
function greet(a, b){ //Default value agr koi value na di ho to ye value lelo
            return a*b
        }
        let r  = greet()
        console.log(r) //NAN beacuse we haven't dedfine a and b so udefined * undefined = NaN

 Default value Argument functions 
 =======================================       
        function greet2(a=4, b=5){ //Default value agr koi value na di ho to ye value lelo
            return a*b
        }
        let g  = greet2()
        console.log(g) 

----------------------------------------------------------------------------------------------------------------------
Rest Parameters 

    It is used when the number of arguments is not defined and we have to process every argument
    -----------------------------------
    Rest parameter always on the last
    e.g  functio mySum(..., a, b) X wrong 
    ------------------------------------------
    calculate the sum of all the elements :

    function mySumRest(a, b, ...c){
            let sum = 0
            sum = a+b
            for(let ele of c){
                sum += ele
            }
            return sum
        }
    console.log(mySumRest(100, 200, 300, 400, 500, 700))

    ----------------------------------------------------------------------------------------------------------------------
    Assign value only to b
    -------------------------
    function greet3(a = 4, b) {
            return a * b;
        }
        let gh  = greet3(undefined, 7)
        console.log(gh) // 28 beacuse 7 will be assigned to b and a remains 4 
        // (undefined or 4 me se 4 ko lega undefined ka mtlb hota h varible me kuch nhi lekim default value 4 h to wo usko leleg)
    -----------------------------------------------------------------------------------------------------------------------------------------

    ANONYMOUS Function - Different ways to call anonymous function

        (function(){
            console.log("Anonymouse Function...");
        })();
        //-------------------------------------------------------------------------------------------------------------
        const res = (function(a, b){
            return a*b;
        })(2,3)
        console.log(res)

        //----------------------------------------------------------------------------------------------------------------
        const result = function(a, b){
            return a*b;
        }
        console.log(result(3,4))

    ===========================================================================================================================
    Arrow Function

        const fun = (a) => a**4;
        let res = fun(4)
        console.log(res) //256 4 ki power 4

        for block statements or more than one statements we use {} and return keyword
        --------------------------------------
        const fun = (a) =>{ 
            return a**4;
            }
        let res = fun(4)
        console.log(res)
==========================================================================================================================================
    Outer and Inner Function (Funtion Calling Stack)

    function outFun(){
            console.log("Outer Func...")
            function innerFun(){
                console.log("Inner Func..")
            }
            return innerFun // hmne inner function return krdiya
        }
        const inner = outFun();// inner ke andr innerFun ka ref aagya
        console.log(inner) // pura pura inner function print ho jaega
-----------------------------------------------------------------------------------------------------------------------------------

🔐 What is a Closure in JavaScript?
A closure is a function that remembers the variables from its outer scope, 
even after that outer function has finished executing.

jb outer function ka scope khtm hogya tha firbhi uske variable name ki value ko remember rkha aur inner function ne use kiya ise khte h closure

        function outFun(name){
            console.log("Outer Func...")
            function innerFun(msg){
                console.log("Inner Func..")
                console.log(msg, name)
            }
            return innerFun
        }
        const inner = outFun("Ritu");
        console.log(inner)
        inner("Hello bebu")



*/