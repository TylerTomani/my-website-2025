export function letterFocus() {
    let idElsArr = []
    let iLetter = 0;
    let lastPressedLetter = '';
    const questionAnswers = document.querySelectorAll('.question-answer')
    let questionAnswersFocused = false
    const allAnswerH3s = document.querySelectorAll('.answer-txt h3')
    /* This is not well defined in html, since questions are really in question-answer, 
    drop-topics are the topics within inject page, which is topics from the side menu named 
    .dropTopics in index.js */
    const dropTopics = document.querySelectorAll('.drop-topics')
    questionAnswers.forEach(el => {
        el.addEventListener('focusin', e => {
            questionAnswersFocused = true
        })
        el.addEventListener('focus', e => {
            questionAnswersFocused = true
        })
        el.addEventListener('focusout', e => {
            questionAnswersFocused = false
        })
    })

    function updateIdElsArr(){
        idElsArr = Array.from(document.querySelectorAll('[id]'))
    }
    updateIdElsArr()
    addEventListener('keydown', (e) => {
        let letter = e.key.toLowerCase();
        let letteredArr = idElsArr.filter(word => word.id.startsWith(letter))
        
        if(letteredArr.length == 0){
            if (!questionAnswersFocused) {
                if (letter == 'm' && e.target.id == 'mainTargetDiv') {
                    scrollTo(0, 0)
                }

            } else {
                if (!isNaN(letter)) {
                    questionNumFocus(e, letter)
                }
                return
            }
            return
        } 
        else {    
            let focusedEl = document.activeElement
            let iFocused = idElsArr.indexOf(focusedEl)
            // console.log(iFocused)
            // console.log(letteredArr.findIndex(el => idElsArr.indexOf(el) > iFocused))

            if (lastPressedLetter !== letter) {
                console.log(letter)
                let closestIndex = letteredArr.findIndex(el => idElsArr.indexOf(el) > iFocused)
                iLetter = closestIndex !== -1 ? closestIndex : 0
            } else {
                iLetter = (letteredArr.indexOf(iFocused) - 1) % letteredArr.length;
            }
        }
        if(letteredArr[iLetter]){
            letteredArr[iLetter].focus()
        }
        lastPressedLetter = letter;
    });
}
function questionNumFocus(e,letter){
    // get question-answer parent of current element when .question-txt .dropQuestion has focus and answers
    // are showing
    const intLet = parseInt(letter)
    const questionAnswer = getQuestionAnswer(e.target.parentElement)
    const answerTxt = questionAnswer.querySelector('.answer-txt')
    let hiddenAnswerTxt = true ? answerTxt.classList.contains('hide') : false
    if(!hiddenAnswerTxt){
        const h3s = answerTxt.querySelectorAll('h3')
        if(intLet > h3s.length){
            return
        } else {
            h3s.forEach(h3 => {
                h3.setAttribute('tabindex',0)
            })
            h3s[intLet - 1].focus()
        }

    }
}
function getQuestionAnswer(parent){
    if(parent.classList.contains('question-answer')){
        return parent
    } else if (parent.parentElement){
        return getQuestionAnswer(parent.parentElement)
    } else {
        return null
    }
}
letterFocus();
