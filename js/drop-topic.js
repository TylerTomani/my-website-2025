const dropTopics = document.querySelectorAll('.drop-topic')
const topicsContainers = document.querySelectorAll('.topics-container')
hideAllTopicsContainers()
dropTopics.forEach(el => {
    el.addEventListener('click', e =>{
        e.preventDefault()
        toggleTopic(e)
    })
})
function toggleTopic(e){
    // hideAllTopicsContainers()
    const topic = getTopic(e.target.parentElement)
    if(topic){
        const topicsContainer = topic.querySelector('.topics-container')
        topicsContainer.classList.toggle('hide')
        console.log(topicsContainer)
    }
    const subTopic = topic.querySelector('.sub-topics-container')
    if(subTopic){
        console.log(subTopic)
        const topicsContainer = subTopic.querySelector('.topics-container')
        topicsContainer.classList.toggle('hide')
    }
}
function hideAllTopicsContainers(){
    dropTopics.forEach(el => {
        const topic = getTopic(el.parentElement)
        
        // if(topic){
        //     const topicsContainer = topic.querySelector('.topics-container') 
        //     if(!el.classList.contains('show')){
        //         topicsContainer.classList.add('hide')
        //     }
            
        //     const subTopics = topic.querySelector('.sub-topics-container')
        //     if(subTopics){
        //         const topicsContainer = subTopics.querySelector('.topics-container') 
        //         if(!el.classList.contains('show')){
        //             topicsContainer.classList.add('hide')
        //         }
        //     }
        // }
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
