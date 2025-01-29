import { toggleDraggable } from "./letterFocus-myChatGpt.js";
const draggable = document.querySelector('.draggable')
toggleSideBtn.onclick = toggleSideBar

function toggleSideBar(){
    draggable.classList.toggle('active')
}

draggable.addEventListener('click', e => {
    e.preventDefault()

    if(e.target == draggable){
        toggleSideBar()
    }
});