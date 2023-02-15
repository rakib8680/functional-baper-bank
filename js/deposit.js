




document.getElementById('deposit-btn').addEventListener('click', function () {

    // Get input field value by getInputFieldValueById function 
    const depositFieldValue = getInputFieldValueById('deposit-field');

    // Get element inner text value as number by getElementValueById function
    const initialDeposit = getElementValueById('deposit-value');

    // make total value
    const totalDeposit = depositFieldValue + initialDeposit;


    // add the total into initial deposit value 
    setTotalValueTOElement('deposit-value', totalDeposit);

    // get total balance by getElementValueById 
    const previousBalance = getElementValueById('total-balance');

    // add deposit amount with previousBalance 
    const currentBalance = previousBalance + depositFieldValue;

    // set the total balance 
    setTotalValueTOElement('total-balance', currentBalance);
}
)  