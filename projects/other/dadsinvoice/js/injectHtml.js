import { mainTargetDiv } from "./letterfocus-index.js"
import { letterFocusInvoice } from "./letterFocus-invoice.js"
function fetchHtmlData(href){
    fetch(href).then(response => response.text()).then(html => {
            mainTargetDiv.innerHTML = html
            letterFocusInvoice()
        })
}

const as = document.querySelectorAll('a')
as.forEach(el => {
    if(el.hasAttribute('autofocus')){
        fetchHtmlData(el.href)
    }
    if(el.id == 'invoicePage' || el.id == 'listPage'){
        el.addEventListener('click', e => {
            e.preventDefault()
            fetchHtmlData(el.href)
        })
    }
})