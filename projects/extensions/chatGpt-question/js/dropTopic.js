export function DropTopics(){
    const dropTopics = document.querySelectorAll('.drop-topic');
    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        dropTopics.forEach(el => {
            if (letter == el.innerText[0].toLowerCase()) {
                el.focus()
            }

        })
    })
    dropTopics.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            toggleTopicQuestions(e)
        })
        // el.addEventListener('keydown', e => {
        //     let letter = e.key.toLowerCase()
            
            
        // })
    })
}

function toggleTopicQuestions(e){
    const topic = getTopic(e.target.parentElement)
    const questionsContainer = topic.querySelector('.questions-container')
    questionsContainer.classList.toggle('hide') 
}
function getTopic(parent){
    if(parent.classList.contains('topic')){
        return parent
    } else if (parent.parentElement){
        return getTopic(parent.parentElement)
    } else {
        return null
    }
}