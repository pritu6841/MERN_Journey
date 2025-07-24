/*
Download mongodb-database-tools
--------------------------------------------------------------------------------------------------------------------------------
mongodump --version (It see the current version of mongodb)
----------------------------------------------------------------------------------------------------------------------
It is used to take backup of ur databse clg(database) and --out c:\ iska mtlb ouput c drive me daal do
mongodump --db clg --out c:\ 
--------------------------------------------------------------------------------------------------------------------
when we want to restore the data:

when we to restore the data in bianry format - use mongodump 

when we want to restore that binary formatted document in normal form we use mongorestore --db
 


--------------------------------------------------------------------------------------------------------------------
(Backup)For data exporitng
==================
mongoexport -> it gives data in json/csv format(Ye c drive me normally save nhi krta h iske liye apko cmd ko run as administration krna pdega)

mongoexport --db=clg --collection=collectionName --out=C:\clg2.json 

--db=clg (Us database ka naam jha se hme data lena h export krwana h)
--collection=collectionName(Us collection ka naam jiska backup lena ho)
--out=C:\clg2.json (Jis naam se hme apna data store karna ho aur jha store krna ho wha ki location)

C:\Program Files\MongoDB\Tools\100\bin>mongoexport --db=clg --collection=students --out=C:\students.json
---------------------------------------------------------------------------------------------------------
AGr data csv file ke format chhaiye ho to(Field dena compulsory h field yani collection ke andr jo field bnai h name, age etc)

mongoexport --db=clg --collection=students --type=csv --fields=name,age,marks --out=C:\students.csv
--db = clg is database ka backup lelo UR --out=c:\ me scv format me backup lelo

------------------------------------------------------------------------------------------------------------------------
(Restore)For importing the data(Jb hmara data alg alg jgh pr store ho aur hme usko use krna ho to import krwate h)
=============================================================================
mongoimport --db=RestoreCollection --collection=students --file=c:\student.json --type=json

jha collection store krwana h us databse ka name(--db=RestoreCollection) , 
jise import krwana h us collection ka naam (--collection=students), 
aur wo collection kha pr h uska path (--file=c:\student.json )
 --type= yha jis type ki file h hmne (--type=json)

 ----------------------------------------------------------------------------------------------------------------------------------------------
    ***************************************
    *    1)In Binary Format(BSON)         * 
    *        i)Backup:mongodump           *  
    *        ii)Restore:mongorestore      *   
    *                                     *    
    *    2)In Json/CSv format             *      
    *        i)Backup:mongoexport         *       
    *        ii)Restore:mongoimport       *   
    * *************************************         
-------------------------------------------------------------------------------------------------------------------------
*/