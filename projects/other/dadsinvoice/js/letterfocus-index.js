
export const invoicePage = document.getElementById('invoicePage')
const listPage = document.getElementById('listPage')
export const homelink = document.getElementById('homelink')
const skynovaPage = document.getElementById('skynovaPage')
export const mainTargetDiv = document.getElementById('mainTargetDiv')

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'i'){
        invoicePage.focus()
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
    if(letter == 'm'){
        mainTargetDiv.setAttribute('tabindex', 0)
        mainTargetDiv.focus()
    }
});