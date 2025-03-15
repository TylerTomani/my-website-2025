export function letterFocus() {
    let letteredEls = [];
    let iLetter = 0;
    let currentLetter = '';

    function getAnswerSteps(){
        
    }
    addEventListener('keydown', (e) => {
        const allFocusEls = document.querySelectorAll('[id]');
        let letter = e.key.toLowerCase();

        // Rebuild the array of elements matching the first letter
        letteredEls = [];
        allFocusEls.forEach(el => {
            if (el.id[0].toLowerCase() === letter) {
                letteredEls.push(el);
            }
        });

        if (letteredEls.length === 0) return; // Exit if no elements match

        // If pressing a different letter, reset the index
        if (letter !== currentLetter) {
            iLetter = 0;
        } else {
            if (!e.shiftKey) {
                // Move forward
                iLetter = (iLetter + 1) % letteredEls.length;
            } else {
                // Move backward correctly
                iLetter = (iLetter - 1 + letteredEls.length) % letteredEls.length;
            }
        }

        // Focus on the correct element
        letteredEls[iLetter].focus();

        // Update current letter for next key press
        currentLetter = letter;
    });
}

letterFocus();
