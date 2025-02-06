
const homelink = document.querySelector('#homelink')
const listPage = document.querySelector('#listPage')
const from = document.getElementById('from')
const to = document.getElementById('to')
const toName = document.querySelector('#to_name')
const invoiceNum = document.querySelector('#invoice_num > #number_label')
const itemsContainer = document.querySelector('#items-container')
const allEls = document.querySelectorAll('body *')
const toNewCustomer = document.querySelector('#to_new_customer')
const toAddress = document.querySelector(('#to_address'))
let textInputFocused = false
allEls.forEach(el => {
    el.addEventListener('focus', e => {
        // console.log(e.target)
    })
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(!textInputFocused){
    if(letter == 'f'){
        scrollTo(0,0)
        from.focus()
    }
    if(letter == 'h'){
        scrollTo(0,0)
        homelink.focus()
    }
    if(letter == 'i'){
        invoiceNum.focus()
    }
    if(letter == 'l'){
        listPage.focus()
    }
    if(letter == 't' ){
        scrollTo(0,0)
        to.focus()
    }
    if(letter == 'n' ){
        scrollTo(0,0)
        toName.focus()
    }
    }

});
[toName,toNewCustomer,toAddress].forEach(el => {
    el.addEventListener('focusin', e => {
        textInputFocused = true
    })
    el.addEventListener('focusout', e => {
        textInputFocused = false

    })
})