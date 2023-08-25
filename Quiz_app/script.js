const question=[
    {
        que:"Which of the following is a markup language",
        a:"HTML",
        b:"CSS",
        c:"Javascript",
        d:"PHP",
        correct:"a"
    },
    {
        que:"Which year javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b"
    },
    {
        que:"What does CSS stands for",
        a:"Hypertext Markup Language",
        b:"Casecading Style Sheet",
        c:"Jason Object Notation",
        d:"Object orinted language",
        correct:"b"
    },    
]

  let index=0;
  let total=question.length;
  let right=0;
  let wrong=0;
  let inputQuestoin=document.getElementById('queBox')
  let inputOption=document.querySelectorAll('.Option')

  const loadQuestion=()=>{
    if(index===total){ 
        endQuiz()
    }else{
        reset()
    }
   
      let data=question[index]
      console.log(data)
      inputQuestoin.innerHTML=`${index+1})${data.que}`
      inputOption[0].nextElementSibling.innerHTML=data.a;
      inputOption[1].nextElementSibling.innerHTML=data.b;
      inputOption[2].nextElementSibling.innerHTML=data.c;
      inputOption[3].nextElementSibling.innerHTML=data.d
  }

 const submitQuiz=()=>{
    let data=question[index]
   let ans=getAnswer()
    if(ans === data.correct){
        
       right++
    }else{
        wrong++
        
    }
    index++;
    loadQuestion()
    return
 }


 const getAnswer=()=>{
    let answer;
    inputOption.forEach((input)=>{
         if(input.checked){
           answer= input.value
        }
    })
    return answer
 }

 const reset=()=>{
    inputOption.forEach((input)=>{
       if(input.checked){
        input.checked=false
       }
        
    })
 }

 const endQuiz=()=>{
    document.getElementById('box').innerHTML=`<div style=text-align:center>
    <h2>Thank you for playing Quiz</h2>
    <h3>Correct=${right} Wrong=${wrong}</h3>

    
    
    
    </div>`
 }


  loadQuestion()
























































// let index=0;
// let total=question.length
// let right=0;
// let wrong=0;
// let queBox=document.getElementById("queBox")
// let optionInput=document.querySelectorAll(".Option")
// const loadQuestion=()=>{
//     if(index==total){
// return endQuiz()
//     }else{
//         reset();
//     }
 
// const data = question[index]

//  queBox.innerText=`${index+1}).${data.que}`;
//  optionInput[0].nextElementSibling.innerText=data.a;
//  optionInput[1].nextElementSibling.innerText=data.b;
//  optionInput[2].nextElementSibling.innerText=data.c;
//  optionInput[3].nextElementSibling.innerText=data.d;
// }
// const submitQuiz=()=>{
//     const data = question[index]
//     const ans =getAnswer()
//     if(ans==data.correct){
//         right++
//     }else{
//         wrong++
//     }
//     index++;
//     loadQuestion();
//     return;
// }

// const getAnswer=()=>{
//     let answer;
//  optionInput.forEach((input)=>{
//     if(input.checked){
        
//         answer= input.value
//     }
    
//  })
//  return answer
 
// }
// const reset=()=>{
//     optionInput.forEach((input)=>{
//         input.checked=false
//     })
// }
// const endQuiz=()=>{
//     document.getElementById("box").innerHTML=`
//     <div style=text-align:center><h3>Thank you for playing the Quiz</h3>
//     <h2>${right}/${total} are correct</h2></div>`
// }

// loadQuestion()

