/*
jb ap function ke andr function call kr rhe ho use manipulate kra rhe ho use function call back khte h

        function myAdd(a, b){
            return a+b
        }
        function muSub(a, b){
            return a-b
        }
        function res(a, b, fn){
            return fn(a,b);
        }
        let r = res(5, 4, myAdd)
        console.log(r);

        r = res(5,4, muSub)
        console.log(r);

-------------------------------------------------------------------------------------------------------------------------------------
ii) CallBack Functions - "forEach" ka return type undefined hota h wo kuch bhi return nhi krta h
-----------------------------------------------------------------------------------------------

        //forEach hmesa callback function ko call krta h aur arr ke ek ek value ko callback ke andr pass krta h
        //aur agr callback koi value return krega to for each ke pass aayegi 
        or return value hmes calling enviroment  variable ko jata h yha hmara calling enviroment forEach h
        
-----------------------------------------------------------------------------------------------------------------------
       Create a bank balance app which deposit and withdraw money
        let balance = 0;
        function myCallBack(ele){
            if(ele.type == "deposit"){
                balance += ele.amount
                console.log("Deposited Money: "+ele.amount, "Balanace: "+balance)
            }
            else{
                balance -= ele.amount
                console.log("Withdraw Money: "+ele.amount, "Balanace: "+balance)
            }
        }

        let trans = [
            {type:"deposit", amount : 1000},
            {type: "withraw", amount: 500}
        ]

        trans.forEach(myCallBack)
------------------------------------------------------------------------------------------------------------------------------

        1)function myCallBack(ele){
            console.log(ele);
        }
        let arr = [100, 200, 300, 400]
        arr.forEach(myCallBack) //hme bs function ka refernce hota h na ki function ko call krna hota h

        2)arr = [100, 200, 300, 400] //anonymous function
        arr.forEach(function (ele){
            console.log(ele)
        });


        3)Arrow function call back 
        
        arr = [100, 200, 300, 400]
        arr.forEach(element => {
            console.log(element);
        });

-------------------------------------------------------------------------------------------------------------------------------------
filter()

    i)using anonymous function

    arr = [105, 200, 300, 407]
        let r = arr.filter(function (ele){
            if(ele%2 == 0) return true
        });
        console.log(r)

    ii) using arrow function
        
        arr = [105, 200, 300, 407]
        let r = arr.filter(ele => ele%2 == 0);
        console.log(r)
----------------------------------------------------------------------------------------------------------------------------------------

map()
    arr = [1, 2, 3, 4]
    let r = arr.map((ele) =>  ele**2)
    console.log(r)

---------------------------------------------------------------------------------------------------------------------------
convert celsius to foreknight

        arr = [1, 2, 3, 4]
        let temp_c = [-12, -20, 0, 11, 25 ,45];
        let f = temp_c.map((ele)=>((ele*9)/5)+32)
        console.log(f)

-------------------------------------------------------------------------------------------------------------------------
spread operator

        arr = [1, 2, 3, 4]     
        let arr2 = [9, 2, ...arr] //arr ke sare element nye array aar2 me store ho gye with 9 and 2
        console.log(arr2)

---------------------------------------------------------------------------------------------------------------------------
sort() - It sort ont the basis of first digit
eg- let arr = [12, 32, 111, 23, 9, 8, 45]
        arr.sort()
        console.log(arr) //[111, 12, 23, 32, 45, 8, 9]

Note* so we need to pass comparator in the sort() function
    i)Ascneding  order
        arr.sort((a, b)=>(a-b))

    ii)Descending Order
        arr.sort((a,b)=>(b-a))


        
    

*/