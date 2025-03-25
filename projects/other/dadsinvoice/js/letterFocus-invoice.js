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
    
    const itemsTables = document.querySelectorAll('.item-table')
    itemsTables.forEach(el => {
        el.addEventListener('focusin', e => {
            const deleteItemBtn = e.target.querySelector('.delete-item-btn')
            if(deleteItemBtn){
                deleteItemBtn.classList.add('active')
            }
        })
        el.addEventListener('focusout', e => {
            const deleteItemBtn = e.target.querySelector('.delete-item-btn')
            if(deleteItemBtn){
                deleteItemBtn.classList.remove('active')
            }
        })
    })
    newItemBtn = document.querySelector('#newItemBtn')    
        // This is the original code
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
            tempLetterFocus(e, letter)
        }
        if (isShift) {
        }
        // Just for now
        
        
    });
    function tempLetterFocus(e,letter){
        if (letter == 'i') {
            // const dataTableItem = document.querySelector('#itemSelect0')
            const itemTable = document.querySelector('.item-table')
            itemTable.focus()
        }
        if (letter == 't') {
            const itemTotal = document.querySelector('.item-total input')
            itemTotal.focus()
        }
        if (letter == 'u') {
            const unitPrice = document.querySelector('.unit-price input')
            e.preventDefault()
            unitPrice.focus()
        }
        if (letter == 'x') {
            const deleteItemBtn = document.querySelector('.delete-item-btn')
            if (deleteItemBtn) {
                deleteItemBtn.classList.add('active')
                // console.log(e.tar)
                deleteItemBtn.focus()
            }
        }
        if (letter == 'n') {
            newItemBtn.focus()
        }
    }    
}

