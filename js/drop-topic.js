const dropTopics = document.querySelectorAll('.drop-topic')
const topicsContainers = document.querySelectorAll('.topics-container')
const subTopicsContainers = document.querySelectorAll('.sub-topics-container')
hideAllTopicsContainers()
dropTopics.forEach(el => {
    el.addEventListener('click', e =>{
        e.preventDefault()
        toggleTopic(e)
    })
})
function toggleTopic(e){
    // hideAllTopicsContainers()
    hideAllSUBTopicsContainers()
    const topic = getTopic(e.target.parentElement)
    const topicsContainer = topic.querySelector('.topics-container')
    if(topicsContainer){topicsContainer.classList.toggle('hide')}
    const subTopicContainers = topic.querySelector('.sub-topics-container')
    if(subTopicContainers){subTopicContainers.classList.toggle('hide')}
}
function hideAllTopicsContainers(){
    dropTopics.forEach(el => {
        const topic = getTopic(el.parentElement)
        const topicsContainer = topic.querySelector('.topics-container')
        if (topicsContainer) {
            if (!el.classList.contains('show')) {
                topicsContainer.classList.add('hide')
            }
        }
        const subTopicsContainer = topic.querySelector('.sub-topics-container')
        if (subTopicsContainer) {
            // const topicsContainer = subTopics.querySelector('.topics-container') 
            if(!el.classList.contains('show')){
                subTopicsContainer.classList.add('hide')

            }
        }
    
    })
}

function hideAllSUBTopicsContainers() {
    subTopicsContainers.forEach(el => {
        const projects = el.querySelectorAll('.project')
        projects.forEach(project => {
            if(project.classList.contains('show')){
                project.classList.remove(('show'))
                console.log(project)
            }
        })
        el.classList.add('hide')
    })
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
