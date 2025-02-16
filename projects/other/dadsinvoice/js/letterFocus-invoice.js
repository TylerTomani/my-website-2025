import { invoicePage } from "./letterfocus-index.js"
export let textInputFocused = false


export function letterFocusInvoice(){
    const toName = document.querySelector('#to_name')
    const toNewCustomer = document.querySelector('#to_new_customer')
    const toAddress = document.querySelector(('#to_address'))
    const fromName = document.querySelector(('#from_name'))
    const fromAddress = document.querySelector(('#from_address'))
    const invoiceNum = document.querySelector('#invoice_num > #number_label')
    const itemsContainer = document.querySelector('#items-container')
    const invoiceNotes = document.querySelector('#invoice_notes')
    const textAreaInputs = document.querySelectorAll('textarea')
    
        
    addEventListener('keydown', e => {
        let isShift = e.shiftKey
        if (!textInputFocused){
            cycleInvoiceElements(e)
        }
        if (isShift) {
            cycleInvoiceElements(e)
        }
    });
    function field_onfocus(element, placeholderText) {
        if (element.value.trim() === '') {
            element.value = placeholderText;
            element.classList.add('placeholder-text'); // Optional: Add styling
        }

        element.addEventListener('blur', () => {
            if (element.value.trim() === placeholderText) {
                element.value = ''; // Clear placeholder on blur if unchanged
                element.classList.remove('placeholder-text');
            }
        });
    }
    // Auto-attach to all inputs and textareas with the onfocus attribute in HTML
    document.querySelectorAll('textarea, input').forEach(el => {
        // if (el.hasAttribute('onfocus')) {
        //     const match = el.getAttribute('onfocus').match(/field_onfocus\(this,\s*['"](.+?)['"]\)/);
        //     if (match) {
        //         el.addEventListener('focus', () => field_onfocus(el, match[1]));
        //     }
        // }
        el.addEventListener('focusin', e => {
            textInputFocused = true
            console.log('focus')
        })
        el.addEventListener('focusout', e => {
            textInputFocused = false
        })
        
    });
}
 function cycleInvoiceElements(e){
    let letter = e.key.toLowerCase()
    let isShift = e.shiftKey
    if (!textInputFocused) {
        if (letter == 'f') {
            scrollTo(0, 0)
            fromName.focus()
        }
        if (letter == 'h') {
            scrollTo(0, 0)
            homelink.focus()
        }

        if (letter == 'l') {
            listPage.focus()
        }
        if (letter == 't') {
            scrollTo(0, 0)
            to.focus()
        }
        if (letter == 'n') {
            toName.focus()
            scrollTo(0, 0)
            console.log('n')
            console.log(toName)
        }
        if (letter == 'i') {
            // cycleIitems(isShift)
        }
    }
}
letterFocusInvoice();
