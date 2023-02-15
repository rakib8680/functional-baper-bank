


//  Get input field value by id using function 
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


// Get Element Text value by id using fuction 
function getElementValueById(valueOfElement) {
    const elementById = document.getElementById(valueOfElement);
    const elementValueString = elementById.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}


// Add total value into element  by id using function
function setTotalValueTOElement(elementById, newValue) {
    const element = document.getElementById(elementById);
    element.innerText = newValue;

}

document.getElementById('deposit-btn').addEventListener('click', function () {

    // Get input field value by getInputFieldValueById function 
    const depositFieldValue = getInputFieldValueById('deposit-field');

    // Get element inner text value as number by getElementValueById function
    const initialDeposit = getElementValueById('deposit-value');

    // make total value
    const totalDeposit = depositFieldValue + initialDeposit;


    // add the total into initial deposit value 
    setTotalValueTOElement('deposit-value', totalDeposit);

}
)  