
const billAmountInput = document.querySelector('#bill-amount');
const cashGivenInput = document.querySelector('#cash-given');
const errorMessage = document.querySelector('.error-message');
const checkButton = document.querySelector('.check-btn');
const notesTableCells = document.querySelectorAll('.No-of-notes');


const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

const cashGivenContainer = document.querySelector('.cash-given-container');
cashGivenContainer.style.display = 'none';

const Notes = document.querySelector(".notes")
Notes.style.display = 'none';

checkButton.addEventListener('click', () => {
    const billAmount = parseFloat(billAmountInput.value);
    const cashGiven = parseFloat(cashGivenInput.value);

    errorMessage.innerText = '';

    if (isNaN(billAmount) || isNaN(cashGiven)) {
        errorMessage.innerText = 'Please enter a valid number.';
    } else if (billAmount < 0) {
        errorMessage.innerText = 'Bill amount cannot be negative.';
    } else if (cashGiven < billAmount) {
        errorMessage.innerText = 'Cash given should be greater than or equal to bill amount.';
    } else if(cashGiven == billAmount){
        errorMessage.innerText = "No amount need to return"
    }else {
        Notes.style.display = 'block';
        const valueDifference = cashGivenInput.value - billAmountInput.value;
        calculateNotes(valueDifference)
    }


});


function calculateNotes(valueDifference) {
    
    for (let i = 0; i < availableNotes.length; i++) {
        const notes = Math.trunc(valueDifference / availableNotes[i]);
        notesTableCells[i].innerText = notes;
        valueDifference = valueDifference % availableNotes[i];
    }
}


billAmountInput.addEventListener('input', () => {
    if (!billAmountInput.value || isNaN(parseFloat(billAmountInput.value))) {
        cashGivenContainer.style.display = 'none';
        Notes.style.display = 'none';
    } else {
        cashGivenContainer.style.display = 'block';
    }
});



