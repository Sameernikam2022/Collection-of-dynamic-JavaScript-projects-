

const age=()=>{
    let d1=document.getElementById('date').value
    let m1=document.getElementById('month').value
    let y1=document.getElementById('year').value
 
    let now=new Date()
    let d2=now.getDate()
    let m2=now.getMonth()+1
    let y2=now.getFullYear()

    
let d,m,y;

   y=y2-y1
   
  if(m2>=m1){
    m=m2-m1
  }else{
     y--;
     m=12+m2-m1
  }
  if(d2>=d1){
    d=d2-d1
  }else{
    m--;
    d=getDayInMonth(y1,m1)+d2-d1
  }
  if(m<0){
    m=11;
    y--
  }
   
    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";

}
age()
   
 const getDayInMonth=(year,month)=>{
   return new Date(year,month,0).getDate()
 }