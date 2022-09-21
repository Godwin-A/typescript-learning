const list = document.getElementById('list')!
const input = document.getElementById('input')as HTMLInputElement
const button = document.getElementById('button')


button?.addEventListener('click', function(e){
  e.preventDefault()
  addTodo()
  input.value = ''
})


function addTodo (){
   const todo = input.value
   const li = document.createElement('li')
li.append(todo)
list?.append(li)
} 

