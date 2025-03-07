const dropQuestions = document.querySelectorAll('.dropQuestion')
const questionAnswers = document.querySelectorAll('.questions-answer')

function hideQuestion(){
    questionAnswers.forEach((el => {
        el.classList.add('hide')
    }))
}
hideQuestion()

dropQuestions.forEach(el => {
    el.addEventListener('keydown', e => {
        toggleQuestion(e)

    })
})

function toggleQuestion(e){
    console.log(e.target)
}