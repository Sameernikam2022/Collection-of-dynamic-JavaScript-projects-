let inputElement= document.getElementById("input");
let btn= document.querySelector(".btn");



 btn.addEventListener("click",()=>{
    createPassword()
 })

 function createPassword(){
    let characters="0123456789qwertyuiopasdfghjklzxcvbm@#$%&QWERTYUIOPASDFGHJKLZXCVBNM"
   let passwordlength=10
    let password=""
    for(i=0;i < passwordlength;i++){
        password+=characters[Math.floor(Math.random()*characters.length)]
        
    }
    
   inputElement.value=password
   navigator.clipboard.writeText(password)
 }