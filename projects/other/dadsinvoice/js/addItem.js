import { newItemBtn } from "./letterFocus-invoice.js";


export function addItem(){
    const itemsContainer = document.querySelector('.items-container')
    let itemFocused = false
    let itemTables = document.querySelectorAll('.item-table')
    newItemBtn.addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        itemTables = document.querySelectorAll('.item-table')
        if(letter == 'enter'){
            e.preventDefault()
            createItem(itemTables)        
        }
        
    })
    newItemBtn.addEventListener('click', e => {
        itemTables = document.querySelectorAll('.item-table')
        e.preventDefault()
        createItem(itemTables)        
        
        
    })
    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        itemTables = document.querySelectorAll('.item-table')
        if (!isNaN(letter)) {
            const intLet = parseInt(letter)
            console.log(intLet)
            if(intLet <= itemTables.length){
                const itemSelectBox = itemTables[intLet - 1].querySelector('.item select')
                // console.log(itemBox)
                itemSelectBox.focus()
            }
        }
    })
    
    function createItem(itemTables){
        const itemTable = document.createElement('div')
        itemTable.classList.add('item-table')
        const item = document.createElement('div')
        item.classList.add('item')
        itemTable.appendChild(item)
        item.innerHTML = `
                    <h4>Item</h4>
                    <select name="item[]" id="itemSelect${itemTables.length}" class="inputInvoiceDataItem ">
                        <option value="" selected="selected"></option>
                        <option value="Days">Days</option>
                        <option value="Hours">Hours</option>
                        <option value="Product">Product</option>
                        <option value="Service">Service</option>
                        <option value="Expense">Expense</option>
                        <option value="Discount_aynax">Discount</option>
                    </select>
                `
    
        const description = document.createElement('div')
        description.classList.add('description')
        description.innerHTML = `
                    <h4>Description</h4>
                    <textarea name="description[]" id="description${itemTables.length}"
                    class="inputInvoiceDataDescription"></textarea>
                `
        itemTable.appendChild(description)
    
        const unitPrice = document.createElement('div')
        unitPrice.classList.add('unit-price')
        unitPrice.innerHTML = `
                <h4>Unit Price</h4>
                        <input name="unit_price[]" id="unit_price${itemTable.length}" type="text" autocomplete="nope"
                        class="inputInvoiceDataPriceOrQty"
                            value="0.00">
                `
        itemTable.appendChild(unitPrice)
    
        const quanity = document.createElement('div')
        quanity.classList.add('quanity')
        quanity.innerHTML = `
                <h4>quanity</h4>
                        <input name="qty[]" id="qty${itemTable.length}" type="text" autocomplete="nope"
                        class="inputInvoiceDataPriceOrQty" value="0.">
                `
        itemTable.appendChild(quanity)
    
        const itemTotal = document.createElement('div')
        itemTotal.classList.add('item-total')
        itemTotal.innerHTML = `
                    <h4>total</h4>
                    <input name="total[]" id="total${itemTable.length}" type="text" autocomplete="nope" readonly="" class="inputInvoiceDataAmount"
                        value="0.00">
                `
        itemTable.appendChild(itemTotal)
        itemsContainer.appendChild(itemTable)
    }
}
function getItemsContainer(parent){
    if(parent.classList.contains('items-container')){
        return parent
    } else if (parent.parentElement){
        return getItemsContainer(parent.parentElement)
    } else {
        return null
    }
}
