import { invoicePage } from "./letterfocus-index.js"
export let textInputFocused = false
export let newItemBtn = document.querySelector('#newItemBtn')    

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
    newItemBtn = document.querySelector('#newItemBtn')    
        
    
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
    addEventListener('keydown', e => {
        let isShift = e.shiftKey
        let letter = e.key.toLowerCase()
        if (!textInputFocused) {
        }
        if (isShift) {

        }
        // Just for now
        if(letter == 'i'){
            const dataTableItem = document.querySelector('#itemSelect0')
            dataTableItem.focus()
            
        }
        if(letter == 'n'){
            newItemBtn.focus()
        }
        
        
    });
    document.addEventListener('touchstart', function (event) {
        if (event.target.matches('input, textarea')) {
            event.preventDefault();
        }
    }, { passive: false });
}

