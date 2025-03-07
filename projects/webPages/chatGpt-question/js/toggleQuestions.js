
export function handleQuestions(){
    const dropQuestions = document.querySelectorAll('.dropQuestion')
    const questionAnswers = document.querySelectorAll('.question-answer')
    const answersTxt = document.querySelectorAll('.answer-txt')
    function hideQuestionAnswers() {
        questionAnswers.forEach(el => {
            el.classList.add('hide')
        })  
    }
    // hideQuestionAnswers()
    function hideAnswers() {
        answersTxt.forEach((el => {
            el.classList.add('hide')
        }))
    }
    hideAnswers()
    
    dropQuestions.forEach(el => {
        el.addEventListener('click', e => {
            console.log(e.target)
            e.preventDefault()
            toggleAnswer(e)
        })
        el.addEventListener('keydown', e => {
            let letter = e.key.toLowerCase()
            if (letter == 'enter') {

                toggleAnswer(e)
            }
        })
    })
    function toggleAnswer(e) {
        // e.preventDefault()
        const parent = getQuestionAnswerContainer(e.target.parentElement)
        const answerTxt = parent.querySelector('.answer-txt')
        answerTxt.classList.toggle('hide')
        // console.log(parent)

    }
    
}
function getQuestionAnswerContainer(parent){
    if(parent.classList.contains('question-answer')){
        return parent
    } else if (parent.parentElement){
        return getQuestionAnswerContainer(parent.parentElement)
    } else {
        return null
    }
}
handleQuestions()