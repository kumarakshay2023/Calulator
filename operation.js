let screen=document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let scrrenval='';
for(let items of buttons){
    items.addEventListener('click',(e)=>{
           let tar=e.target.innerText;
         if(tar=="X"){
           tar='*';
           scrrenval+=tar;
           screen.value=scrrenval;
         }
         else if(tar=="C"){
            scrrenval='';
            screen.value=scrrenval;
         }     
         else if(tar=="="){
             screen.value=eval(scrrenval);
         }  
         else{
             scrrenval+=tar;
             screen.value=scrrenval;
         }
   


    })
}