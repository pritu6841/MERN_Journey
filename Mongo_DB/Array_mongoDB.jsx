/*
     $push - is used to push element inside the already existing array
     (agr koi vlaue phle se hai to ye tbbhi dubara push krdeta h)

     agr koi array exist krta h aur koi value update krna h to updateOne ya updateMany use krege

     db.students.updateOne({StudentName:"kaaju"}, {$push:{Student_Lan: 'R'}})
---------------------------------------------------------------------------------------------------------------------

    $addToSet - It doesn't add the already existing value to the array
    db.students.updateOne({StudentName:"kaaju"}, {$addToSet:{Student_Lan: 'R'}}) - It will not add the R value because it is 
    already existing inside the array


    db.students.updateOne({StudentName:"kaaju"}, {$addToSet:{Student_Lan: 'C#'}}) - It will add C# because it is not added in the array

    differnece - $push (It can add duplicate element in aarray)
               - $addToSet(IT cna't add duplicate element in the asrray)

---------------------------------------------------------------------------------------------------------------------------------------------
    $pull - IT used to delete element from the array
        
    db.students.updateOne({StudentName:"kaaju"}, {$pull:{Student_Lan: 'C#'}})
-----------------------------------------------------------------------------------------------------------------    -

find operation on array -

    (i) db.students.find({Student_Lan: 'C#'}) // agr student_lan ke andr C# hai tb hi record dega
    (ii)db.students.find({
        Student_Lan:{$all: ['C#','Python' ]}//agr array ke andr ek se jyada aur element ho
    })

    (iii) $eleMatch - db.students.find({ //agr kisi bhi array ke andr ki value greator than 90 hai to
        score:{
            $eleMatch:{$gt:90}
        }
    })

    updation of any already existing value of an array

    db.students.updateOne(
        {StudentName: 'kaaju'},
        {$set:{StudentSGPA:23}}
    )

    Update a particular value in an array -  give the value of that particular element u want to update in conditon {} block so that .$ can find it's index in the array to update it
    db.students.updateOne(
        {StudentName:'kaaju', Student_Lan:'C++'},
        {set:{'Student_lan.$': 'C plus plus}} //.$ operator find the index of Studentt_Lan:c++ and gave the index here like Student_Lan[2] - IT will update the value
    )

    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Limit - It used to limit the number of records to be returned

    db.students.find().limit(2)

    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Skip - suru ke elemnts nhi return krega 
    db.students.find().skip(2) // suru ke 2 record nhi dega

    ---------------------------------------------------------------------------------------------------------------------------

    Sort - 1 for ascending order and -1 for descending order
    ---------------------------------------------------------
    ---------------------------------------------------------
    db.students.find().sort({StudentSGPA:1})

    **agr ek se jyada field pr sortig krniho to 

    db.students.find().sort({StudentSGPA:1, StudentName:1})

    third highest - phle sort(descending order) krege fir aage do record skip krdege fir 1 ki limit lgaege
    db.students.find().sort({StudentSGPA:-1}).skip(2).limit(1)


*/