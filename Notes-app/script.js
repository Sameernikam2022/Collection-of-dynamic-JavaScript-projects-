let addBtn=document.querySelector('#addBtn')
let main=document.querySelector('#main')


addBtn.addEventListener('click',()=>{
  addNote()
})
     
const addNote=(text="")=>{
  const note=document.createElement('div')
  note.classList.add('note')
  note.innerHTML=`<div class="tool">
      <i class="save fas fa-save"></i>
      <i class="trash fas fa-trash"></i>
     
   </div>
   <textarea >${text}</textarea>
       `
  note.querySelector('.trash').addEventListener('click',()=>{
    note.remove()
    saveNote()
  })

  note.querySelector('.save').addEventListener('click',()=>{
    saveNote()
  })

  note.querySelector('textarea').addEventListener('focusout',()=>{
    saveNote()
  })


       main.appendChild(note)
       saveNote()
}
   

const saveNote=()=>{
    let notes=document.querySelectorAll('.note textarea')
    let data=[]
    notes.forEach((note)=>{
      data.push(note.value)
    })
    console.log(data)

    if(notes.length===0){
      localStorage.removeItem('notes')
    }else{
      localStorage.setItem('notes',JSON.stringify(data))
      
    }
  
}
     
   
(()=>{
  let lsNote=JSON.parse(localStorage.getItem('notes'))
 if(lsNote===null){
  addNote()
 }else{
  lsNote.forEach((lsNote)=>{
    addNote(lsNote)
   })
 }


})()
    






















































































// const addBtn=document.querySelector("#addBtn")
// const main=document.querySelector("#main")

// const saveNote=()=>{
//     const notes=document.querySelectorAll(".note textarea")
//     console.log(notes)
//      const data=[]
//      notes.forEach((note)=>{
//         data.push(note.value)
//      })
//      if(data.length===0){
//         localStorage.removeItem("notes")
//      }else{
     
     
//     localStorage.setItem("notes",JSON.stringify(data))
//      }
// }

// addBtn.addEventListener("click",function(){
//     addNote()
// })

// const addNote=(text="")=>{
//     const note=document.createElement("div")
//     note.classList.add("note")
//     note.innerHTML=`
//     <div class="tool">
//     <i class="save fas fa-save"></i>
//     <i class="trash fas fa-trash"></i>
   
// </div>
// <textarea >${text}</textarea>
//     `
//     note.querySelector(".trash").addEventListener("click",function(){
//         note.remove()
//         saveNote()
//     })
//     note.querySelector(".save").addEventListener("click",function(){
//         saveNote()
//     })
//     note.querySelector("textarea").addEventListener("focusout",function(){
//         saveNote()
//     })
//     main.appendChild(note)
//     saveNote()
// }
// (
//     function(){
// const Isnotes=JSON.parse(localStorage.getItem("notes"))
// if(Isnotes===null){
// addNote()
// }
// Isnotes.forEach((Isnote)=>{
//     addNote(Isnote)
// })

//     }
// )()