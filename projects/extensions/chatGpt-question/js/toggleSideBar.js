import { toggleDraggable } from "./letterFocus-myChatGpt.js";
const draggable = document.querySelector('.draggable')
const toggleSideBtn = document.querySelector('#toggleSideBtn')
toggleSideBtn.onclick = toggleSideBar

function toggleSideBar(){
    draggable.classList.toggle('active')
    toggleSideBtn.classList.toggle(('active'))
}

draggable.addEventListener('click', e => {
    e.preventDefault()

    if(e.target == draggable){
        toggleSideBar()
    }
});