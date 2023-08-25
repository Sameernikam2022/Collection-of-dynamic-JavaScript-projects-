const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const  lowerSet="abcdefghijklmnopqrstuvwxyz"
const numberSet="1234567890"
const symbolSet="~!@#$%^&*()_+/"

  let passbox=document.getElementById('pass-box')
  let totalchar=document.getElementById('total-char')
  let uppercase=document.getElementById('upper-case')
  let lowercase=document.getElementById('lower-case')
  let number=document.getElementById('numbers')
  let symbol=document.getElementById('symbols')

  const getRandomData=(data)=>{
    return data[Math.floor(Math.random()*data.length)]
     
  }
  

  const generatePassword=(password="")=>{
    if(uppercase.checked){
       password+=getRandomData(upperSet)
    }
    if(lowercase.checked){
        password+=getRandomData(lowerSet)
    }
    if(number.checked){
        password+=getRandomData(numberSet)
    }
    if(symbol.checked){
        password+=getRandomData(symbolSet)
    }
    if(password.length < totalchar.value){
       return generatePassword(password)
    }
    password=(truncateString(password,totalchar.value))
    passbox.innerHTML=password

    navigator.clipboard.writeText(password)
    
  }
  generatePassword()
 
  document.getElementById('btn').addEventListener('click',()=>{
    generatePassword()
  })
  

     function truncateString(str,num){
      if(str.length>num){
        let subStr=str.substring(0,num)
        return subStr;
      }else{
        return str;
      }
     }