/*Loop - Initialize , condition, Increment

Associtivity and Precedence

let res ;
res = 1, 2, 3;
console.log(res) //out - 1 because there are two operator = , so = has more precedence

res = (1,2,3)
console.log(res) //out - 3 because there are () this operator which has the highest precedence


**hm chhate h bs 1 1 or 1 2 aaye 
to ek bool flag bna dege = true jb condition j == 2 hogi  flag ko false krdege aur break krdege fir i loop dekega flag false to aage execute hi nhi krega
let flag = true;
    for(let i = 1; i<=5 && flag; i++){ 
        for(let j = 1; j<=5; j++){
            
            console.log(i+" "+ j)
            if(j==2){
                flag = false;
                break;
            }
        }
    }

dictionary = ka apna koi sequence nhi hota wo key value se itterate hota h
=======================================
for of loop -(used for normal array)

arr = [100, 200, 300, 400]
for(ele of arr){
    console.log(ele) // 0 1 2 3
}

===========================================
for in loop - (used for objects)
Note - array pr chlaya to in se index milege object pr chlaya to key milegi

let userData = {
    names:"ritu",
    age:21,
    clg:"ALlenhouse"
}
for(ele in userData){
    console.log(ele+" -> "+userData[ele])// names -> ritu  age -> 21  clg -> Allenhouse
}

================================================================================================

-------------------------------------------------------------------------------------------------------------------------------------
 */