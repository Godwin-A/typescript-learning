const list = document.getElementById('list')!
const input = document.getElementById('input')as HTMLInputElement
const button = document.getElementById('button')


button?.addEventListener('click', function(e){
  e.preventDefault()
  addTodo()
  input.value = ''
})


function addTodo (){
  const checkboxInput = document.createElement('input')
   checkboxInput.type = 'checkbox'
   const todo = input.value
   const li = document.createElement('li')
   if(todo == ''){
    alert('please fill something in todo')
   }else{
     li.append(checkboxInput)
   li.append(todo)
  list?.append(li)
   }
} 

