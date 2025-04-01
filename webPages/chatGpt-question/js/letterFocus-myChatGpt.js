export function letterFocus() {
    let letteredEls = [];
    let iLetter = 0;
    let currentLetter = '';
    const questionAnswers = document.querySelectorAll('.question-answer')
    let questionAnswersFocused = false
    const allAnswerH3s = document.querySelectorAll('.answer-txt h3')
    /* This is not well defined in html, since questions are really in question-answer, 
    drop-topics are the topics within inject page, which is topics from the side menu named 
    .dropTopics in index.js */
    const dropTopics = document.querySelectorAll('.drop-topics')

    addEventListener('keydown', (e) => {
        const allFocusEls = document.querySelectorAll('[id]');
        let letter = e.key.toLowerCase();

        
        if(!questionAnswersFocused){
            if (letter == 'm' && e.target.id == 'mainTargetDiv'){
                scrollTo(0,0)
            }
            // Rebuild the array of elements matching the first letter
            letteredEls = [];
            allFocusEls.forEach(el => {
                if (el.id[0].toLowerCase() === letter) {
                    letteredEls.push(el);
                }
            });

            if (letteredEls.length === 0) return; // Exit if no elements match

            // If pressing a different letter, reset the index
            if (letter !== currentLetter) {
                iLetter = 0;
            } else {
                if (!e.shiftKey) {
                    // Move forward
                    iLetter = (iLetter + 1) % letteredEls.length;
                } else {
                    // Move backward correctly
                    iLetter = (iLetter - 1 + letteredEls.length) % letteredEls.length;
                }
            }

            // Focus on the correct element
            letteredEls[iLetter].focus();

            // Update current letter for next key press
            currentLetter = letter;
        } else {
            if(!isNaN(letter)){
                questionNumFocus(e,letter)
            }
            return
        }
        
    });
    questionAnswers.forEach(el => {
        el.addEventListener('focusin', e => {
            questionAnswersFocused = true
            console.log('in')
        })
        el.addEventListener('focus', e => {
            questionAnswersFocused = true
            console.log('focus')
        })
        el.addEventListener('focusout', e => {
            questionAnswersFocused = false
        })
    })
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

function removeTabIndexes(els) {
    els.forEach(el => {
        el.removeAttribute('tabindex')
    })
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
