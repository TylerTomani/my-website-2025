export const toggleDraggable = document.querySelector('#toggleSideBtn')
import { mainTargetDiv } from "./questionsLoad.js"
const allIdEls = document.querySelectorAll('[id]')
const homelink = document.getElementById('homelink')
// iLetter is index to increment up thru letterIds
let iLetter
let currentLetter
let currentEl
let currentResourceFocus = false
let letterIds = []
let lastIndex, nextIndex
let mainTargetDivFocused = false
addEventListener('DOMContentLoaded', e => {

})
mainTargetDiv.addEventListener('focus', e => {
    mainTargetDivFocused = true
})
mainTargetDiv.addEventListener('focusout', e => {
    mainTargetDivFocused = false
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    letterIds = []

    if (!mainTargetDivFocused){

        allIdEls.forEach(el => {
            if (letter == el.id[0].toLowerCase() && !el.classList.contains('hide')) {
                letterIds.push(el)
            }
        })
        // console.log(letterIds)
        if(letterIds){
            if (currentLetter == letter ) {
                iLetter = (iLetter + 1) % letterIds.length
                if(letterIds[iLetter])
                    letterIds[iLetter].focus()
                
            } else if (letterIds.length > 0) {
                iLetter = 0
                letterIds[0].focus()
            }
        }
        currentLetter = letter
        currentEl = e.target
    }
    switch (letter) {
        case 'a':
            toggleDraggable.focus()
            break
        case 's':
            toggleDraggable.focus()
            break
        case 'm':
            mainTargetDiv.focus()
            scrollTo(0, 0)
            break
        case 'h':
            homelink.focus()
            scrollTo(0, 0)
            break
    }
    if (letter == 'h') {
        scrollTo(0, 0)
    }
});

const questions = document.querySelectorAll('.dropQuestion')

questions.forEach(el => {

})