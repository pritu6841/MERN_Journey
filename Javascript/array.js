/*
Destructuring of array

    let arr = [100, 200, 300]
    let [a, b, c] = arr //Destructring of array
    console.log(a, b, c) //100 200 300

    ii) Destructuing 2d array

        let arr2 = [100, 200, [300, 400]]
        let [x1, x2, [x3, x4]] = arr2
        console.log(x1, x2, x3,x4)

    iii)     arr.push(2, 4, 5) //More than one value can be pushed
        console.log(arr) //pushes element at the end

    iv)  arr.pop(); //It delets the value from the end
        console.log(arr)

    v)  arr.shift()  //It deletes the first value in the array
        console.log(arr)

    vi) arr.unshift(23, 45) // It adds elements at the starting of the array
        console.log(arr)

    vii)    console.log(arr.slice(1, 4)); // It returns the data from one index to the other index 

    viii)   //splic(start_idx, number of element u want to delete, element u want to add 1, add2, ......)
        arr.splice(0, 0, 54646) //0 index pr 0 element delete kro yani koi delete nhi krna h and jo element 54646 us index pr insert  ho jaegi
        console.log(arr)
        
        arr.splice(0, 4) // 0 index se 4 element delete krdo 
        console.log(arr)

        // first write index value where u have to Performan insertion or deletion
        // second no of elemetn u want to delete or overwite // here 0 value specify not to delete anything
        //third specify the value u need to insert

    ix) indexOf() - return the index of first occurence of element in array

    x)


        
*/