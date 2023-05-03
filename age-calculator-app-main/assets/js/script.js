const today = new Date();
const dateField = document.querySelector('#dateField');
const monthField = document.querySelector('#monthField');
const yearField = document.querySelector('#yearField');
const dateError = document.querySelector('#dateError');
const monthError = document.querySelector('#monthError');
const yearError = document.querySelector('#yearError');
const dayInput = document.querySelector('#day-input');
const monthInput = document.querySelector('#month-input');
const yearInput = document.querySelector('#year-input');
const submit = document.querySelector('.image');
const yearsResult = document.querySelector('#years-result');
const monthsResult = document.querySelector('#months-result');
const daysResult = document.querySelector('#days-result');

submit.addEventListener('click', begin);

function begin() {
    let day = Number(dayInput.value);
    let month = Number(monthInput.value);
    let year = Number(yearInput.value);

    validateUnfilledFields(day, month, year);
    //The if below controls the display of invalid data on the screen
    if (!day || !month || !year) {
        yearsResult.innerHTML = '--';
        monthsResult.innerHTML = '--';
        daysResult.innerHTML = '--';
        return;
    }

    //The if below controls the display of invalid data on the screen
    if (((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) || (month === 2 && day > 28) || (day > 31 || day < 1) || (month > 12 || month < 1) || year < 1 || year > today.getFullYear()) {
        validateInvalidDates(day, month, year);
        yearsResult.innerHTML = '--';
        monthsResult.innerHTML = '--';
        daysResult.innerHTML = '--';
        return;
    }

    calculateAge(day, month, year);
}

function calculateAge(day, month, year) {
    //Creates a date based on parameters
    let final = new Date(year, month - 1, day);

    //Subtracts from the current date the value referring to the year, month and day of the date created above and put the value in the "final" variable
    final.setFullYear(today.getFullYear() - final.getFullYear());
    final.setMonth(today.getMonth() - final.getMonth());
    final.setDate(today.getDate() - final.getDate());

    yearsResult.innerHTML = final.getFullYear();
    monthsResult.innerHTML = final.getMonth();
    daysResult.innerHTML = final.getDate();
}

function validateUnfilledFields(day, month, year) {
    //If the value of the variable "day", is empty, the test "!day" will return true and execute its respective block
    if (!day) {
        dateError.innerText = 'This field is required';
        dateErrorStyle();
    }
    else {
        dateError.innerHTML = '';
        dateStandardStyle();
    }

    //If the value of the variable "month", is empty, the test "!month" will return true and execute its respective block
    if (!month) {
        monthError.innerText = 'This field is required';
        monthErrorStyle();
    }
    else {
        monthError.innerHTML = '';
        monthStandardStyle();
    }

    //If the value of the variable "year", is empty, the test "!year" will return true and execute its respective block
    if (!year) {
        yearError.innerText = 'This field is required';
        yearErrorStyle();
    }
    else {
        yearError.innerHTML = '';
        yearStandardStyle();
    }
}

function validateInvalidDates(day, month, year) {
    //Make sure the day is in the correct format
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        dateError.innerText = 'Must be a valid date';
        dateErrorStyle();
    }
    if (month === 2 && day > 28) {
        dateError.innerText = 'Must be a valid date';
        dateErrorStyle();
    }
    if (day > 31 || day < 1) {
        dateError.innerText = 'Must be a valid day';
        dateErrorStyle();
    }
    //Make sure the month is in the correct format
    if (month > 12 || month < 1) {
        monthError.innerText = 'Must be a valid month';
        monthErrorStyle();
    }
    //Make sure the year is in the correct format
    if (year < 1) {
        yearError.innerText = 'Must be in the future';
        yearErrorStyle();
    }
    if (year > today.getFullYear()) {
        yearError.innerText = 'Must be in the past';
        yearErrorStyle();
    }
}

//The three functions below define the style settings of the fields when an error occurs
function dateErrorStyle() {
    dateField.style.color = '#ff5757';
    dayInput.style.borderColor = '#ff5757';
}
function monthErrorStyle() {
    monthField.style.color = '#ff5757';
    monthInput.style.borderColor = '#ff5757';
}
function yearErrorStyle() {
    yearField.style.color = '#ff5757';
    yearInput.style.borderColor = '#ff5757';
}

//The three functions below define the default style settings for fields.
function dateStandardStyle() {
    dateField.style.color = '#716f6f';
    dayInput.style.borderColor = '#dbdbdb';
}
function monthStandardStyle() {
    monthField.style.color = '#716f6f';
    monthInput.style.borderColor = '#dbdbdb';
}
function yearStandardStyle() {
    yearField.style.color = '#716f6f';
    yearInput.style.borderColor = '#dbdbdb';
}






