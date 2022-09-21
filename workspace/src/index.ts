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


// using interfaces 
interface user {
  name : string;
  age : number ;
  school: string;
}

const object = {name : 'Godwin Aikonedo', age : 45, school:'OAU'}
function addUser (user: user ):string {
    return (`this is the user given his name is ${user.name  } and ${user.school}` )
}

console.log( addUser(object));
