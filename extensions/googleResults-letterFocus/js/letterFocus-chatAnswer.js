const questionTxt = document.querySelector('.drop-question')
document.addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'm'){
        e.preventDefault()
        if(!e.target.hasAttribute('tabindex')){
            questionTxt.setAttribute('tabindex',0)
            console.log(e.target)
        }
        questionTxt.focus()
    }
    

})