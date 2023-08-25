let date=document.getElementById('date')
let calculate=document.getElementById('calculate')
let result=document.querySelector('.result')

let dateMax=new Date().toISOString().split('T')[0]

const calculateAge=()=>{
   let today=new Date()
   let birthDate=new Date(date.value)
   
   
   //calculate years
   let years;
   if(today.getMonth() > birthDate.getMonth() || (today.getMonth()==birthDate.getMonth() && today.getDate()>=birthDate.getDate())){
    years=today.getFullYear()-birthDate.getFullYear() ;
    //console.log(years)
   }else{
    years=today.getFullYear()-birthDate.getFullYear() -1;
    console.log(years)
   }

   //calculate month
  let month;
  if(today.getDate() >= birthDate.getDate()){
    month=today.getMonth()-birthDate.getMonth()
    console.log(month)
  }else if(today.getDate() < birthDate.getDate()){
    month=today.getMonth()-birthDate.getMonth()-1;
   // console.log(month)
  }

  //calculate days
  let days;


  //make month positive
month=month <0 ? month + 12 :month;

 // days of month in a year
 let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 if(today.getDate() >= birthDate.getDate()){
    days=today.getDate()-birthDate.getDate();
    console.log(days)
 }else{
    days=today.getDate()-birthDate.getDate()+monthDays[birthDate.getMonth()]
    //console.log(days)
 }

 //display result
 result.innerHTML=`<p class="birthdate">You were born on ${birthDate.toDateString()}.</p>`;
 result.innerHTML += `<p class="age">You are ${years} years, ${month} months and ${days} days old.</p>`;
 if(month==0 && days==0){
    result.innerHTML += `<p class="wishing">Happy Birthday!🎂🎈🎈</p>`;
 }
  
}
calculate.addEventListener("click",calculateAge)

// run calculate on enter key
document.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        calculate.click()
    }
})
  //on load focus on data input
date.focus()