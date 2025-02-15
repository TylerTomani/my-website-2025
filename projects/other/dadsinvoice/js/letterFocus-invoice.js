import { invoicePage } from "./letterfocus-index.js"
export function letterFocusInvoice(){
    const toName = document.querySelector('#to_name')
    const invoiceNum = document.querySelector('#invoice_num > #number_label')
    const itemsContainer = document.querySelector('#items-container')
    const invoiceNotes = document.querySelector('#invoice_notes')
    const toNewCustomer = document.querySelector('#to_new_customer')
    const toAddress = document.querySelector(('#to_address'))
    const textAreaInputs = document.querySelectorAll('textarea')
    let textInputFocused = false
    textAreaInputs.forEach(el => {
        el.addEventListener('focusin', e => {
            textInputFocused = true
            console.log(el)
        })
        el.addEventListener('focusout', e => {
            textInputFocused = false
        })
    })
    addEventListener('keydown', e => {
        if(!textAreaInputs){
            cycleFocus(e)
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
        if (el.hasAttribute('onfocus')) {
            const match = el.getAttribute('onfocus').match(/field_onfocus\(this,\s*['"](.+?)['"]\)/);
            if (match) {
                el.addEventListener('focus', () => field_onfocus(el, match[1]));
            }
        }
    });
}
function cycleFocus(e){
    let letter = e.key.toLowerCase()
    let isShift = e.shiftKey
    if (!textInputFocused) {
        if (letter == 'f') {
            scrollTo(0, 0)
            from.focus()
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
            scrollTo(0, 0)
            toName.focus()
        }
        if (letter == 'i') {
            cycleIitems(isShift)
        }
    }
    
}
letterFocusInvoice()


