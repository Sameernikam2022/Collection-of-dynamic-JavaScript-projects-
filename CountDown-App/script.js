const endDate="31 December 2023 12:00 Pm"

 document.getElementById('end-date').innerHTML=endDate;
 let inputs= document.querySelectorAll('input')


 const clock=()=>{
    let end=new Date(endDate)
     let newd=new Date()
    let diff=(end-newd)/1000;
     inputs[0].value=Math.floor(diff/3600/24)
     inputs[1].value=Math.floor(diff/3600)%24
     inputs[2].value=Math.floor(diff/60)%60
     inputs[3].value=Math.floor(diff)%60
    setInterval(() => {
        clock()
    }, 1000);



  
   
 }
clock()

