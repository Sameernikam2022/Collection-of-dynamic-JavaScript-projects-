let comingsoon=document.querySelector('.coming-year')
let birthDate=prompt("Enter birth date (1-31):")
let birthMonth=prompt("Enter birth month (1-12):")

let today=new Date()

let nextYear;
if(today.getMonth()+1 > birthMonth ||(today.getMonth()+1 == birthMonth && today.getDate()+1 > birthDate)){
    nextYear=new Date().getFullYear()+1;
}else{
    nextYear=new Date().getFullYear()
}
 comingsoon.innerHTML=nextYear

 const countDown=()=>{
    const remaining = new Date(`${nextYear}-${birthMonth}-${birthDate} 00:00:00`) - new Date();
    let days=Math.floor(remaining/(1000*60*60*24))
    let hours=Math.floor(remaining/(1000*60*60))%24;
    let minute=Math.floor(remaining/(1000*60))%60;
    let second=Math.floor(remaining/1000)%60;

    document.querySelector('.days').innerHTML=days
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.minutes').innerHTML=minute
    document.querySelector('.seconds').innerHTML=second
 setInterval(()=>{
    countDown()
 },1000)
   
 }
 countDown()
 