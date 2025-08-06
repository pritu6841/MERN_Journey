/*
Document objec Model- It is an application programming interface(API) used to  manipulate HTML document

DOM represent ab HTML document as tree nodes. The DOm provide funtions to add remove and modify parts of document effiiently

DOM is a cross platform and language indepenedent ways of manipulating HTML and XML documents


Document
│
└──> html
     ├──> head
     │     ├──> title
     │     └──> meta / link / style / script
     │
     └──> body
           ├──> header
           │     └──> nav
           │           └──> ul
           │                 └──> li → a
           ├──> main
           │     ├──> section / article
           │     │      └──> h1-h6 / p / img / a / div / span
           │     └──> aside
           └──> footer


----------------------------------------------------------------------------------------------------------------------------------------
Js code write krne ke baad execcute krne ke liye js engine or v8 engine ki jarurt hoti h

Differnce between innerText, innerHTML, textContent

| Property      | Kya deta hai                   | Hidden cheeze deta? | Tags deta? |
| ------------- | ------------------------------ | ------------------- | ---------- |
| `innerText`   | Dikhne wala text               | ❌ Nahi deta         | ❌ Nahi     |
| `innerHTML`   | HTML + text dono               | ✅ Deta hai          | ✅ Haan     |
| `textContent` | Plain text (dikh ho ya chhupa) | ✅ Deta hai          | ❌ Nahi     |
---------------------------------------------------------------------------------------------------------------------------------------------------
classList -> It will return the number of classes assign to the css

after that u can add or remove further classes

1.)const h1 = document.getElementById('myHeading');
2.)let lst = h1.classList; //It return the list of classes attached in h1
3.)add - lst.add('clsA') //It will add a class to the list of classes of that element
4.)toggle - lst.toggle('clsB') //It toggles if the class exist or not exist
5.)contains - console.log(lst.contains('clsC')); // It will return true or false wether on 
            the basis of wether the classes already exist in the elemnt
6.)remove - lst.remove('clsB')//It remove the class from the classlist of that element
7.)replace - lst.replace('clsA', 'clsC') //To replace one class form another

**classList.html me code h

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Adding event Listener Dynamically

    <input type="password" id="pwd" placeholder="hgj@gmail.com">
    const btn = document.getElementById('myBtn');
    btn.addEventListener('click', myFun) //callback function kbhi call nhi krte h bs funtion ka referenece diya jata h

    // btn.addEventListener('click', ()=>{
    //     alert('hi..........');
    // })
** dynamicEvent.html me code h
------------------------------------------------------------------------------------------------------------------------------------------
Evenet handeling

const btn  = document.getElementById('myBtn')
    btn.addEventListener('click', ()=>{
        const h1 = document.createElement('h1');
        console.log(h1) 
        h1.textContent = "lovely bebu"
        h1.style.color = 'black'
        h1.style.fontSize = '20px'

        document.body.append(h1) //For adding element on the body
        //append -> after the body or after the element
        //prepend ->before the body or before the element
    })

 */