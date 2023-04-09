var names =["maria","abi","lakshmi","leela","jothi","kamala"];
/*var buttoon=document.getElementById("buttoon");
var newmem=document.getElementById('added');
var submit=document.getElementById('submitted');

submit.addEventListener("click",function(){
    //var adding=document.createElement("names");
//names.innerHTML=newmem.value;
names.push(newmem);
})*/

buttoon.addEventListener("click" ,function(){
   
    for(namee of names){
        document.write(namee+" ");
        
    }
})
