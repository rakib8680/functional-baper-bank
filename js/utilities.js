

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