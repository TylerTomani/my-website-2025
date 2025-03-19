export function letterFocus() {
    let letteredEls = [];
    let iLetter = 0;
    let currentLetter = '';
    const questionAnswers = document.querySelectorAll('.question-answer')
    let questionAnswersFocused = false


    
    addEventListener('keydown', (e) => {
        const allFocusEls = document.querySelectorAll('[id]');
        let letter = e.key.toLowerCase();

        if(!questionAnswersFocused){
            if (letter == 'm' && e.target.id == 'mainTargetDiv'){
                scrollTo(0,0)
            }
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
        } else {
            return
        }

    });
}

letterFocus();
