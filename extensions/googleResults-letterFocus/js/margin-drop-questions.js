(function(){
const dropQuestions = document.querySelectorAll('.drop-question')
dropQuestions.forEach((el,i) => {
    if(i == 0 || i % 2 == 0){
        el.style.marginRight = '10%'
    }  else {
        el.parentElement.style.position = 'relative'
        console.log(el.parentElement)
        el.parentElement.style.alignItems = 'flex-start'
        el.parentElement.style.justifyContent = 'flex-start'
        el.parentElement.style.border = '5px solid lime'
        el.style.marginRight = '150%';
        // el.style.marginLeft = '10%'
        // el.style.marginLeft = '10%'
        
    }
})
})();