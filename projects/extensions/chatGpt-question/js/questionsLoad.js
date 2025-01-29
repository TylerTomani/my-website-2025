export const mainTargetDiv = document.getElementById('mainTargetDiv')
import { addCopyCodes } from "./copy-code-export.js"
import { handleQuestions } from "./toggleQuestions.js"
const topics = document.querySelectorAll('.topics-container > li > a')
let clicked = false
topics.forEach(el => {
    if(el.hasAttribute('autofocus')){
        fetchLessonHref(el.href)
    }
    el.addEventListener('focusout', e => {
        clicked = false
    })
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        fetchLessonHref(e.target.href)
        if(!clicked){
            clicked = true
        } else
        if(clicked){
            mainTargetDiv.focus()

        } 
    })
})

function fetchLessonHref(href) {
    fetch(href)
        .then(response => response.text())
        .then(html => {
            // Inject the retrieved HTML into the target div
            mainTargetDiv.innerHTML = html;
            ////////////// This function is located in lesson-temp.js ////////////////////////////////////////////////////////////////////////////////////
            addCopyCodes()
            handleQuestions()
            
        })
        .catch(error => console.log('Error fetching content.html:', error));
}