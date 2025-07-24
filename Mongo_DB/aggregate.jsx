/*
Aggregate - It take bunch of data and produce a single result

Aggregation pipeline - It has one or more stages . order of stages is important .Each stage act upon the result of previous stage

Aggrgate Framework - 

input -> stage 1 -> stage2 -> stage3->..........->output


db.collection.aggregate([{$match:}, {$group: }, {$sort}])
----------------------------------------------------------------------------------------------------------------------------------------------------
$project - IT is used to return those fields which we need avoid unneccesory processing
-----------------------------------------------------------------------------------------
db.students.aggreate([
                {$project:{_id:0, country:1, city:1, name:1}}, 
                {}
])
--------------------------------------------------------------------------------------------------------------------------------------------------------------
$match - jb condition match krni hoti h (It filter the fields or data according to our condition)
====================================================================================================
db.AggregateionCollection.aggregate([
        {$project:{_id:0, firstName:1, lastName:1, gender:1}}, 
        {$match:{gender:'female'}}
    ])

To match the salary which is greator than 6500
db.AggregateionCollection.aggregate([
    {$project:{_id:0, firstName:1, lastName:1, gender:1}}, 
    {$match:{gender:'female'}}
    ])

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$group - It crates the group on the basis of certain condition
    db.AggregateionCollection.aggregate([
        {
            $group:{_id:'$gender'} // hmessa _id use krege kisi grp ko create krne ke liye jis basis pr kr rhe h uske liye '$gender' is trh se hi likhege
        }
    ])

    (ii) jb department name ko as a group create krna chhae

    db.AggregateionCollection.aggregate([
        {
            $group:{_id:'$department.name'} // jisek basis pr grp create krna usko dedete h
        }
    ])

    $sum - 1 (For calculating the number of element inside every grp)//1 ka mtlb 1 add hoge hr element ek liye agr $sum-5 krdege to hr element ke liye 5 add krege
        db.AggregateionCollection.aggregate([
        {
            $group:{_id:'$department.name', TotalEmployee:{$sum : 1}} 
        }
    ])

    For calculating the totalSalary of each grp

    db.AggregateionCollection.aggregate([
        {
            $group:{_id:'$department.name', TotalEmployee:{$sum : 1}, TotalSalary:{$sum:'$salary'}} 
        }
    ])

    For calculating the average salary
        db.AggregateionCollection.aggregate([
        {
            $group:{_id:'$department.name', TotalEmployee:{$sum : 1}, TotalSalary:{$sum:'$salary'}, AvergarSalary:{$avg:'$salary'}} 
        }
    ])
    For max/ min salary
   db.AggregateionCollection.aggregate([
    {
        $group: {
            _id: '$department.name',
            TotalEmployee: { $sum: 1 },
            TotalSalary: { $sum: '$salary' },
            AverageSalary: { $avg: '$salary' },
            MaxSalary: { $max: '$salary' },
            MinSalary: { $min: '$salary' }
        }
    }
])

For sorting
    db.AggregateionCollection.aggregate([
    {
        $group: {
            _id: '$department.name',
            TotalEmployee: { $sum: 1 },
            TotalSalary: { $sum: '$salary' },
            AverageSalary: { $avg: '$salary' },
            MaxSalary: { $max: '$salary' },
            MinSalary: { $min: '$salary' }
        }
    },
    {
     $sort:{TotalSalary:1}
    }
])

For limiting
db.AggregateionCollection.aggregate([
    {
        $group: {
            _id: '$department.name',
            TotalEmployee: { $sum: 1 },
            TotalSalary: { $sum: '$salary' },
            AverageSalary: { $avg: '$salary' },
            MaxSalary: { $max: '$salary' },
            MinSalary: { $min: '$salary' }
        }
    },
    {
     $sort:{TotalSalary:1}
    },
    {
    $limit: 2
    }
])

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$sample - It used to take elements from  sample ranndomly of specified size

db.AggregateionCollection.aggregate([
    {
        $group: {
            _id: '$department.name',
            TotalEmployee: { $sum: 1 },
            TotalSalary: { $sum: '$salary' },
            AverageSalary: { $avg: '$salary' },
            MaxSalary: { $max: '$salary' },
            MinSalary: { $min: '$salary' }
        }
    },
    {$sample:{size:2}}
])

----------------------------------------------------------------------------------------------------------------------------
$sortByCount - Ye phle group krdeta h fir usko count krleta h and then count ke basus pr sort krdeta h

$sortByCount - Group, Count, Size(By default sorting in descending order)
=========================================================================
db.AggregateionCollection.aggregate([
        {$sortByCount:'$department.name'}
    ])

--------------------------------------------------------------------------------------------------------------------------------------------

unwind - wo array ko break krdeta h aur hr id ko us array ki value eke ek krke dedega
$unwind is used to break apart an array field in documents so that each item of the array becomes a separate document.

eg (i)Original Document
{
  name: "Ritu",
  hobbies: ["Reading", "Coding", "Gaming"]
}
After $unwind: "$hobbies"
    { name: "Ritu", hobbies: "Reading" }
    { name: "Ritu", hobbies: "Coding" }
    { name: "Ritu", hobbies: "Gaming" }

{
_id:1
lan:[c, c++, python]
}

unwind

{
_id:1
lan:c
}
{
_id:1                                //It has destructured the array
lan:c++
}                   
{
_id:1
lan:python
}

Calculate the total number of student who learn java, c++, python
db.students.aggregate([
    {$unwind:'$Student_Lan'},
    {$group:{_id:'$Student_Lan', TotalCount:{$sum:1}}}
    ])
*/