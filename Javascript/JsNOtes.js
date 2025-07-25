/*

memory allocation - execution ke tiem allocate hota na ki compilation ke time
Process of code execution in machine - 

| Step          | Input            | Output          | Tool Used    |
| ------------- | ---------------- | --------------- | ------------ |
| Preprocessing | Source code (.c) | Cleaned source  | Preprocessor |
| Compilation   | Cleaned source   | Assembly/Object | Compiler     |
| Assembling    | Assembly code    | Object file     | Assembler    |
| Linking       | Object file(s)   | Executable      | Linker       |

------------------------------------------------------------------------------------------------------------------------------
**JS is a dynamically typed language - 
because it automaticlly decides it's data type we don't need to provide 
the data type for variable
-------------------------------------------------------------------------------------------------------------------------------------------
=============================================================================================================================================

JavaScript is often called a "juggling language" (informally) because of its dynamic, 
------------------------------------------------
flexible, and sometimes quirky behavior — especially around types, scope, and execution model.
IT is also called juggle language

| Reason                  | Description                         |
| ----------------------- | ----------------------------------- |
| Type coercion           | Automatic conversion between types  |
| Loose equality (`==`)   | Unpredictable comparison results    |
| Dynamic typing          | Variables can hold any type         |
| Flexible syntax         | Same thing done many different ways |
| Async nature & hoisting | Hard-to-predict code flow           |

-------------------------------------------------------------------------------------------------------------------------------------------------------
jha pr refernece store kiye jate h wha pr bidefault NULL hoti h vallue
kisi varibale ki value define nhi krege to wo undefined bi-default set krleta h

console.log(v);
var v;
iska out undefined aayega ye technically glt h kyoki baad me variable define ho rha 
lekin output undefined aayega because of hoisting

Hoisting -  Iska mtlb jitne variable h  wo sbse phle apne aap hi js decalre krleta h uske baad koi code execute krta h
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
JS - compiler and interpretor both
        a = '4'
        b = 4
        console.log(a+b) //44 because a is string so it will convert a into string and concatenate it
        console.log(a-b) //0
        console.log(a*b)//16
        console.log(a/b)//1
        console.log(b+(a>b))//4
        // yha b integer hai isliey value 4 aayi kyoki a>b false h 
        console.log(a+(a>b)) //4false
        //-yha a string h to false ko uske sath concetinate krdega(4false)
        console.log(b+(a==b))//5 because condition is true


1)  console.log(v) // declaration before -YES but INItialization - NO
    var v=10; // (undefined) beacuse js hoisting ki wjh se phle define krleta h lekin initialize thodi krta h

--------------------------------------------------------------------------------------------------------------------------
undefined - In js a variable without a value has undefined typeof undefined is undefined
-----------
NULl - IN JS null is "nothing ". It is something that doesn't exist
Data type of null is object

NAN - Not a number
--------------------
i)ANy operation with NAN is a NAN  
ex-> a = "aman" ; console.log(a*5) // return NAN

ii)NAN doesn't equal to any number even itself 
eg -> console.log(NAN == NAN) // return false


iii) function - isNAN() //It will check wether the passed value is NAN or not
    console.log(isNaN("RAM"*5)) // return true because "RAM"*5 is NAN multiplying string with number

-----------------------------------------------------------------------------------------------------------------------------------------

Decimal number are more good than floating number because when calculation happen inside the processor 
they're as twice the cost of performing the operation in integer

priority :- decimal > float

------------------------------------------------------------------------------------------------------------------------
In JS strings are immutable

agr hm string me koi jra sa bhi chnge krte h to us same string me chnage hone ki jgh wo us string ak nya object bna ddeti h
-----------------------------------------------------------------------------------------------------------------------------------------

To convert value into Boolean type we use - Boolean()(just as we have done in js using wrapper class eg - int -> Integer)

In JS an objet is a collection of key value pair

BigINT are number that are larger than 2^53 - 1 
eg- a = 5n // by adding n we can covert it into bigint console.log(typeof(5n))
eg- b = 7e // by adding e it means we're making it an exponantial number

---------------------------------------------------------------------------------------------------------------------------
Operator in JS
i)urnary - Jisme kewal ek operand chahoey ho eg - not
ii)Binary - Jisme do operand lge 
iii)Ternary

------------------------------------------------------------------------------------------------------------------------------
a = 4 ; b= 7
res = (a+7) = (b-3) = (c+4) // error because we can assign expression to a variable
but  here c+4 is an expression and b-3 is also an expression we're assigning c+4(expression) value to b-3(expression)
-------------------------------------------------------------------------------------------------------------------------------------------


*/

