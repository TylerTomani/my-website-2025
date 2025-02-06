
const myInvoicePage = document.getElementById('invoicePage')
const listPage = document.getElementById('listPage')
export const homelink = document.getElementById('homelink')
const skynovaPage = document.getElementById('skynovaPage')
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'i'){
        myInvoicePage.focus()
    }
    if(letter == 'l'){
        listPage.focus()
    }
    if(letter == 'h'){
        homelink.focus()
    }
    if(letter == 's'){
        skynovaPage.focus()
    }
    

});