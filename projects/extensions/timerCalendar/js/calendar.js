
document.addEventListener('DOMContentLoaded', () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const calendar = document.querySelector('.calendar');

    // let currentMonthSelected = 'January'    
    let monthDivs = []
    let daysShowing = false    
    let currentMonth 
    months.forEach(month => {
        createMonths(month)
    });
    function createMonths(month){
        let monthDiv = document.createElement('div');
        monthDiv.classList.add('month');
        monthDiv.tabIndex = 0;
        monthDiv.textContent = month;
        monthDiv.dataset.name = month;
        calendar.appendChild(monthDiv);
        let daysDiv = document.createElement('div');
        daysDiv.classList.add('days', 'hide');        
        for (let i = 1; i <= 31; i++) {
            let day = document.createElement('span');
            day.classList.add('day');
            day.tabIndex = 0;
            day.textContent = i;
            day.dataset.day = i;
            daysDiv.appendChild(day);
        }
        monthDivs.push(monthDiv)
        monthDiv.appendChild(daysDiv);
    }
    monthDivs.forEach(monthDiv => {
        monthDiv.addEventListener('click', clickedMonth);
        monthDiv.addEventListener('keydown', handleMonthKeydown);
    });
    function clickedMonth(e) {
        e.preventDefault();
        const month = e.target;
        const days = month.querySelector('.days');
        // console.log(e.target)
        // days.classList.toggle('hide');
        toggleDays(days);
    }
    function handleMonthKeydown(e) {
        let letter = e.key.toLowerCase()
        const month = e.target;
        const days = month.querySelector('.days');
        if(letter == 'enter'){
            toggleDays(days);
        }
    }
    function toggleDays(days){
        
        days.classList.toggle('hide');
    }
});
 
