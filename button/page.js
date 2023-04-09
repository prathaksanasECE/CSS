var names =["maria","abi","lakshmi","leela","jothi","kamala"];
var submit=document.getElementById('submitted');
/*var buttoon=document.getElementById("buttoon");
var newmem=document.getElementById('added');*/
submit.addEventListener("click",function(){
    var user=prompt("enter your name");
names.push(user);
})

buttoon.addEventListener("click" ,function(){
   
    for(namee of names){
        document.write(namee+" ");
        
    }
})
