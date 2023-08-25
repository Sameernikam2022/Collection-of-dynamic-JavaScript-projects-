 const getColor=()=>{
    let color="#"
    let digits="0123456789ABCDEF"
   for(let i=0;i<6;i++){
        let randomDigit = Math.floor(Math.random()*16)
       
      color+=digits[randomDigit]
      console.log(color)
    }
   
   
   document.getElementById('color-code').innerHTML=color;
   document.body.style.backgroundColor=color;
   navigator.clipboard.writeText(color)

    }
 document.getElementById('btn').addEventListener('click',()=>{
   getColor()
  } )
 getColor()
   
   
  