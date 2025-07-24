// 1- to show all databases

// show databases
// show dbs


//  2- create database if not exist  OR  Switches to the Database if exists

// use allenhouse_db

// Note - yha newly created database dikhai nhi padhega abhi kyoki koi collection nhi hai. abhi ye non-existent/non-realized database hai. aisa mongoDB isliye karta hai jisse use - do not take care of extra storage or overhead for unused DBs.


// 3- how to create new collection

// db.createCollection("students")

// agar collection shi se ban gya to response milega - { ok: 1 } 
// ab newly created database dikhne lagega

// note - db refers to currently selected database


//  4- Insert new document 

// db.collectionName.insertOne({ stuName:"ritu" , stuage:20 , stuEmail:"ritu@gmail.com" , stuSGPA:9.0 })

// agar data shi se inserted ho jayega to ack. milega -
/*
{
  acknowledged: true,
  insertedId: ObjectId('6879d9541c6f4318476a090e')
}
*/

// 5 -  to retrieve all data - 

// db.students.find()

// note-  select * from table -> yaha * represents = all columns 

// 6- insert more than 1 doucment at once - 

/*
 db.students.insertMany([
    {
        stuName:"rastogi" , stuage:19 , stuEmail:"rastogi@gmail.com" , stuSGPA:7.4
    } ,
    {
        stuName:"keshav" ,  stuEmail:"keshav@gmail.com" , stuage:19  , stuSGPA:8.42
    } ,
    {
        stuName:"raghav" ,  stuEmail:"raghav@gmail.com" , stuage:17  , stuSGPA:9.2 , branch:"AIML" , stuLang:["c","c++","python"]
    } ,
    {
        stuName:"krish" ,  stuEmail:"krish@gmail.com" , stuage:18  , stuSGPA:8.2 , branch:"AIML" , stuLang:["c","java","python"] ,
        stuAddress:{
            houseNo:420,
            city:"kanpur",
            pincode:"208014"
        }
    }
])  
*/ 

// note - fieldname same hai to sequence change krne se koi fark nhi pdega ( alag sequence mai save hoga per data access to .name se hi kar rhe)

// ques - insertMany() se multiple documents insert ho rhe to inn multiple documents ka data type kya hoga ??
// ans - array datatype . tabhi insertMany() ke ander [] mai documents likhte hai


// 7- data ko proper formatting mai dikhane per

// db.students.find().pretty()


// 8- to count total number of documents

// db.students.find().count()


// 9- how to find specific values 

// selection - it specify selection criteria .
// projection - apko kitni fields chiye . specify no of fields to return in document that matches the selection criteria 

// db.students.find( selection,prjection )
// db.students.find( {},{} )  // all data

// note - mongoDB mai sab json format mai store hota . datatype object.

// include - 
// db.students.find( {},{ stuName:1 , stuEmail:1 } )   // isse kewal stuName or stuEmail show hoga ( 1 means include field)
// exclude 
// db.students.find( {},{ stuage:0  } )    //  iski wajh se stuage field nhi dikhai degi baki sari fields dikhai degi

// note - 
// db.students.find( {},{ stuName:1 , stuEmail:0 } )   isse include and exclude dono ho jana chiye per ye error dega . include , exclude ek sath not allowed. to error aayegi
// reason - ham bata rhe hme bas stuName:1 ko show kro kewal to kewal yhi show hoga . to stuEmail:0  apne aap hi excluded hai ise faltu mai hi likha

// special case --
// include exclude dono ek sath kab kaam krege ?? - only in 1 case -
// db.students.find( {},{ stuage:1 , _id:0  } )    - yaha hme _id bhi nhi milegi.


// 10 - how to find value of nested document ( jaise address mai kewal houseNo chiye) - 

// we can do -  db.students.find( {},{ stuName:1 , stuAddress.houseNo:1 , _id:0  } )  per ye error dega 

// shi method - stuAddress.houseNo ko '' mai likhege
//  db.students.find( {},{ stuName:1 , 'stuAddress.houseNo':1 , _id:0  } )
// why ?? - 'stuAddress.houseNo' ko as a single string consider krege


// 11 - 
/*
_id - it is a primary key. every document has its unique id  

mongoDB created this id which has 12 bytes

4 bytes - timestamp
5 bytes - random value 
3 bytes - Incrementing counter


------------------------------------------------------------------------------------------------------------------------------------------------------------------------

RDBMS(auto_increment - It automatically incremented by 1 for each new record) vs MongoDB(_id - it is a unique identifier for each document, generated automatically by MongoDB)

find({condition}, {projection})

Here for condition,
    $eq - values are equal
    $ne - values are not equal
    $gt - greater than
    $gte - greater than or equal to
    $lt - less than
    $lte - less than or equal to
    $in - values are in the specified array
    $nin - values are not in the specified array
    $exists - checks if a field exists
    $type - checks the type of a field


eq. db.students.find({StudentName:{$eq:"ritu"}}) // to find all documents where StudentName is equal to "ritu"

If the data exist it will return 
{
  _id: ObjectId('6879dd9d24a24869e04c58fc'),
  StudentName: 'kaaju',
  StudentAge: 25,
  Student_Email: 'kaaju@gmail.com',
  StudentStream: 'AI/ML',
  Student_SGPA: 9,
  Student_Lan: [
    'Python',
    'C',
    'C++'
  ]
}


(ii) $in - to find documents where a field's value is in a specified array
db.students.find({StudentName:{$in:["ritu","keshav"]}}) // to find all documents where StudentName is either "ritu" or "keshav"
*/
/*
---------------------------------------------------------------------------------------------------------------------------------
Logical Operators in MongoDB

$and:[{condition1}, {condition2}, ...] - If all conditions are true, the document is included in the result.
$or:[{condition1}, {condition2}, ...] - If any condition is true
$not - Negates the condition, returning documents that do not match the specified condition.
   e.g -  db.students.find({$and:[{StudentName:"Bebu"}, {StudentAge: {$not: {$gt:30}}}]})

$nor:[{condition1}, {condition2}, ...] - Returns documents that do not match any of the specified conditions.
$exists - Checks if a field exists in the document.
    e.g- db.students.find({
    Student_Email:{$exists:true}
    })

------------------------------------------------------------------------------------------------------------------------------------
*/

/*
MongoDb $type Operator
type                                 Number                               Alias
1                                    double                               "number"
2                                    string                               "string"  
3                                    object                               "object"
4                                    array                                "array"
5                                    binary data                          "binData"
6                                    undefined                            "undefined"
7                                    objectId                             "objectId"
8                                    boolean                              "bool"
9                                    date                                 "date"
10                                    null                                 "null"
11                                   regular expression                   "regex"
12                                   javascript                            "javascript"

db.students.find({
    StudentName:{$type:"string"}
})
db.students.find({
    $and: [
        { StudentName: { $exists: true } },
        { StudentName: { $type: "string" } },
        { Student_SGPA: { $gt: 8 } }
    ]
})


db.students.find({
	$and:[
		{StudentName:{$exists:true}},
		{StudentName: {$type:2}},
		{Student_SGPA:{$gt : 8}}	
	]
})

***Shorthand for $type operator(Implicit AND) yha pr sari condition ek hi StudentName pr 
apply ho rhi h isliye ise implict and khege***

db.students.find({
    StudentName:{$exists:true ,$type:"string", $eq:"Ritu"}
})


Implicit AND vs Explicit AND
// Implicit AND - All conditions are applied to the same field (Kewal ek hi field pr apply ho ksta h jaise StudentName)
// Explicit AND - Each condition can be applied to different fields(Ye ek se jyada fields pr apply ho ksta h jaise StudentName, StudentAge, etc.)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
 Date and Time in MongoDB

 new Date() - It returns the current date and time as object.
 ISODate - It is a string representation of the date as object.
 date() without new keyword - It returns the current date and time in string format.

 
*/