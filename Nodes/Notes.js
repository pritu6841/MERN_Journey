/* 
Node js is a srver side runtime enviroment 


1. hmne aj seekha node js se server kaise bnaye 
2. alg alg route or kaise jaaye jaise localhost:8000/about


Asynchrnous and event Driven - All the APi of Node.js liberarry is synchronous , that is non-blocking . 
node js server never waits for an api to reutrn data. The server moves to the next API after calling it and a notification 

Single Threaded but Highly Scalable - Node js uses a single Thread with event looping.
    - Evnet mechnaism helps server to repsonsd in non bocking way and make server highly scalable 
    - IT provide services to much large number of req than traditional server like Apache HTTP req(it uses multi threads)

NO buffering : Node js never buffers.(Tukdo me cheeze aati h jb nyi ki jarurt hoti h tb wo use hoti h)
    -Simply it always output data in chunks


REPL - Read evaluation print loop (Node /js me likhna (terminal pr) ko repl khte h)
let num = 8
num+34*2/2
output - 42
> reult = _( '_' is a special type of variale that used to return the previous calulation value)
42
undefined (Because nothing is returning)

-----------------------------------------------------------------------------------------------------------------------------------------------------------
for(let i = 0; i<10; i++){
... console.log(i+"->");
}

0->
1->
2->
3->
4->
5->
6->
7->
8->
9->
undefined

.editor - > it will allow us to entr the editor mode means we can wwrite multi line commands
--------------------------------------------------------------------------------------------------------------------------------------------------

error - power shell is not recognoized (Iske liye apne command prompt ko dubara se start kriye)
*/