/*
    let str = "Hello \"World\"...."
    console.log(str)                        //Hello "World"....

    '', "" -> To write string
    `` ->backticks are used to write any type of data (eg-> , / \ * % &) anything

    let name = 'Ritu'
    let st2 = `Hello ${name}! bebu, kaise ho""?`
    console.log(st2) //Hello Ritu! bebu, kaise ho""?

    console.log(st2.indexOf("Ritu")) // It return the first index of the substring where it occur in st2
                -------------------
    
    here we have a many times 'a' want the second occurence of 'a'
    console.log(st2.indexOf("a", st2.indexOf('a')+1)) //-1 because a doesn't exist 
    ------------------------------------------------------------------------------------------------------------------------------------------

    s1.localCompare(s2); // It compare sthe local value return value in -1, 0 or 1
    0 -> equal
    -1-> if value of s1 is greator than s2;
    1 -> if value of s2 is greator than s1

    if s1 = "15" and s2 = "4" here it will give -1 because it will always comapre the first digit (1<4) hence -1

    let s1 = "2";
        let s2 = "3";
        console.log(s1.localeCompare(s2));
    -------------------------------------------------------------------------------------------------------------------------------------------------
    charAt - it returns the charater at any given index of a string

    s.charAt(2);
 */