// Function to add a digit or operator to the display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result based on the user input
function calculate() {
    try {
        const expression = document.getElementById('display').value;
        let result = eval(expression);

        // Get the selected output format (fraction or decimal)
        const outputFormat = document.getElementById('output-format').value;

        if (outputFormat === 'fraction') {
            // Convert the result to a fraction if selected
            result = new Fraction(result).limitDenominator();
            document.getElementById('result').textContent = `${result.numerator}/${result.denominator}`;
        } else {
            // Format the result to the thousandth place if selected
            document.getElementById('result').textContent = result.toFixed(3);
        }
    } catch (error) {
        // Handle any errors (e.g., division by zero) and display an error message
        document.getElementById('result').textContent = 'Error';
    }
}

// Function to calculate the square root of the displayed number
function calculateSquareRoot() {
    const expression = document.getElementById('display').value;
    let number = eval(expression);

    if (number >= 0) {
        // Calculate the square root if the number is non-negative
        number = Math.sqrt(number);
        document.getElementById('display').value = number;
        document.getElementById('result').textContent = number.toFixed(3);
    } else {
        // Display an error message for negative input
        document.getElementById('result').textContent = 'Invalid Input';
    }
}

// Clear the display and result
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').textContent = '';
}
