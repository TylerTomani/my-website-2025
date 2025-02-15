import { mainTargetDiv } from "./letterfocus-index.js"
function fetchHtmlData(href){
    fetch(href)
        .then(response => response.text())
        .then(html => {
            console.log(html)
            mainTargetDiv.innerHTML = html


        })

}

const as = document.querySelectorAll('a')

as.forEach(el => {
    if(el.id == 'invoicePage' || el.id == 'listPage'){
        el.addEventListener('click', e => {
            e.preventDefault()
            fetchHtmlData(e.target.href)
        })
    }
})