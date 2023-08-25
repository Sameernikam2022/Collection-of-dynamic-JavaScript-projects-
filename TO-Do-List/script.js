let item=document.querySelector('#item')
let todobox=document.querySelector('#to_do_box')

const saveNote=()=>{
  let note=document.querySelectorAll('li')
  let data=[]
  note.forEach((li)=>{
    data.push(li.innerText)
    
  })
  if(data.length===0){
    localStorage.removeItem('notes')
  }else{
    localStorage.setItem('notes',JSON.stringify(data))
  }
  
 
}








item.addEventListener('focusout',()=>{
   addNote(item.value)
   item.value=""
 })

item.addEventListener('keyup',function(e){
  if(e.key==="Enter"){
    addNote(this.value)
    this.value=""
  }
})


const addNote=(item)=>{
  if(item===""){
   
    return
  }

  let itemList=document.createElement('li')
  itemList.innerHTML=`
     ${item}
  <i class="fas fa-times"></i>
   `
   todobox.appendChild(itemList)
   saveNote()

   itemList.querySelector('i').addEventListener('click',()=>{
    itemList.remove()
    saveNote()
   })

   itemList.addEventListener('click',()=>{
    itemList.classList.toggle('done')
   })

   
}


(()=>{
   let localS=JSON.parse(localStorage.getItem('notes'))
   
  localS.forEach((localS)=>{
     addNote(localS)
  })



})()






 

  







