
export function handleQuestions(){
    const dropQuestions = document.querySelectorAll('.dropQuestion')
    const questionAnswers = document.querySelectorAll('.question-answer')
    const answersTxt = document.querySelectorAll('.answer-txt')
    
    function hideAnswers() {
        answersTxt.forEach((el => {
            el.classList.add('hide')
        }))
    }
    // hideAnswers()

    dropQuestions.forEach(el => {
        el.addEventListener('keydown', e => {
            toggleQuestion(e)

        })
    })

    
   dropQuestions.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            toggleQuestion(e)
        })
   })
    function toggleQuestion(e) {
        // e.preventDefault()
        const parent = getQuestionContainerr(e.target.parentElement)
        // console.log(parent)

    }
}
function getQuestionContainerr(parent){
    if(parent.classList.contains('question-container')){
        return parent
    } else if (parent.parentElement){
        return getQuestionContainerr(parent.parentElement)
    } else {
        return null
    }
}
// handleQuestions()