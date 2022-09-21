"use strict";
const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.getElementById('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (e) {
    e.preventDefault();
    addTodo();
    input.value = '';
});
function addTodo() {
    const todo = input.value;
    const li = document.createElement('li');
    li.append(todo);
    list === null || list === void 0 ? void 0 : list.append(li);
}
