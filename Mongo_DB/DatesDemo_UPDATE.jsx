/*
Date And Time in MongoDB

db.datesDemo.insertMany([
{id:10001, info:"Date and time", DOJ:new Date()},
{id:10002, info:"Date and time", DOJ:new Date("2023-10-01")},
{id:10003, info:"Date and time", DOJ:new Date("2023-10-01T10:20:30Z")}
])

db.find({DOJ:{$type:"date"}}) // to find all documents where DOJ is of type date
db.datesDemo.find({DOJ:{$gt:new Date("2023-10-01")}}) // to find all documents where DOJ is greater than 2023-10-01


-----------------------------------------------------------------------------------------------

TRailling Z in mongo Db - If Z is present, it indicates that the time is in UTC (Coordinated Universal Time).
If Z is not present, it indicates that the time is in local time.In that case mongo db converts it into UTC

I have inserted a new date() object like this :
db.datesDemo.insertMany([
    {
        id:10045, 
        info: "Date created by new Date()", 
        DOB: new Date('2004-09-04')
    }
    ])

as i can see i haven't include Z
so it will automatically convert it into the UTC like this - 
    {
    _id: ObjectId('687dd09970da21598946aa57'),
    id: 10045,
    info: 'Date created by new Date()',
    DOB: 2004-09-04T00:00:00.000Z
    }
------------------------------------------------------------------------------------------------------------------------------------


$dateToString - It will convert the date object into string
    db.datesDemo.find({}, {
        Date_of_join:{
            $dateToString:{
                date:DOJ,
                format:'%d-%m-%y'
            }
        }
    })

it will only show the date of the collection data
    
db.datesDemo.find({DOJ:{$type:'date'}}, {
        Date_of_join:{
            $dateToString:{
                date:'$DOJ',
                format:'%d-%m-%Y'
            }
        }
    })

    IT will show the time along with the date using timezone according to the timezone
db.datesDemo.find({DOJ:{$type:'date'}}, {
        Date_of_join:{
            $dateToString:{
                date:'$DOJ',
                format:'%d-%m-%Y %H:%M:%S', timezone:"Asia/Kolkata"
            }
        }
    })
------------------------------------------------------------------------------------------------------------------
*/

/*

    Mongo DB update Docoument


    db.collectionName.updateOne(filter, update, option)

(i) Chnaging only one field

    db.students.updateOne(
    {
        StudentName:{$eq:"Ritu"}
    },
    {
        $set:{Student_SGPA: 7.4}
    }
    )

(ii) chnaging more than one field we use $set:{}
        db.students.updateOne(
        {
            StudentName:{$eq:"Ritu"}
        },
        {
            $set:{Student_SGPA: 7.4, StudentAge:25}
        }
        )


(iii) [Ritu, Bebu, Keshav] inme so mil jaaye uski value chnage krdo
    
updateOne - It will only upadte one value in the array for multiple update we need to use updateMany
db.students.updateOne(
        {
            StudentName:{$in:["ritu", "keshav", "Bebu"]}
        },
        {
            $set:{Student_SGPA: 10, StudentAge:12}
        }
        )

updateMany - It will update up multiple field inside that array that matches the condition
   db.students.updateMany(
        {
            StudentName:{$in:["ritu", "keshav", "Bebu"]}
        },
        {
            $set:{Student_SGPA: 10, StudentAge:12}
        }
        ) 


✅ Meaning of upsert: true (It is used in place of options in updateOne or updateMany)
When you use upsert: true with updateOne or updateMany, it means:

If a document matching the filter condition is found:
➡ Update it.

If no document matches the filter:
➡ Insert a new document combining the filter + update fields.

db.students.updateOne(
    {
        StudentName:{$eq:"bebuii"}
    },
    {
        $set:{Student_SGPA: 7.4, StudentAge:25}
    },
    {
        upsert: true
    }
    )

db.students.updateMany(
        {
            StudentName:{$in:["ritu", "keshav", "Bebu"]}
        },
        {
            $set:{Student_SGPA: 10, StudentAge:12}
        },
        {
            upsert: true
        }
        ) 

-----------------------------------------------------------------------------------------------------------------------

$rename: rename the fields

For updation in all fields
db.students.updateMany(
    { //give empty condition so updation will be applied to every field
    },
    {
        $rename:{Student_SGPA: "StudentSGPA"}
    }
)

db.students.updateMany(
    {
        StudentName:{$in:["Ritu", "kaaju", "Bebu"]}
    },
    {
        $rename:{Student_SGPA: StudentSGPA}
    }
)

------------------------------------------------------------------------------------------

$deleteOne, $deleteMany

db.students.deleteOne(
{
    studentName: {$eq:{Ritu}}
}
)

updation using regular Expression
-----------------------------------
    **here i have inserted this value in the given array field

    ->db.students.updateMany(
    {StudentName:{$in:['Ritu', 'kaaju', 'abc','jsh']}},
    {$set:{'About_US' : "I'm spftware developeer"}}, 
    {upsert:true}
    )

    now we will match or find the various field in the collection 
     
    **here the complete senetence in About_US field is 'I'm spftware developeer' 
    but instead of matching the whole sentenece we only match the spftware
    
    db.students.find({About_US: /spftware/})

    ^ - This sign indicated that it is starting index
     eq ^S - iska mtlb wo word jo S se start ho rha ho

    $ - This sign indicates the ending letter
        eq - in$ (in se khtm hone wale sentence or word)


     db.students.find({StudentName: /^b/i}) here i is used for case sensitivness
      chahe capital me ho small me dono me lelega

    db.students.find({StudentName: /u$/i})
---------------------------------------------------------------------------------------------

    .{} - dot braces ka mtlb itne character khali hoge

    /^.{1}a/i - phla koi bhi character ho skt ah lekin dusra must be 'a'  (.{})- inside curly 
    braces we write number of charcter that can be anything

    i - used for case sensitivness

    /a.{2}$/i

*/
