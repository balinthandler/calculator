let previousValue = 0;
let currentValue = 0;
let displayedValue = 0;
let isDotOne = false;
let lastEnteredValue = 0;
let inputString = '';
let operator = '';
let prevOperator = '';
let workingOperator = '';
let memory = 0;


let a = 5.5;
let b = 10;
let display = document.querySelector('p');

displayValue();

//Getting button values -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
//Numbers
let btn = document.querySelectorAll('button').forEach(button => button.addEventListener('click', function(){

    //Number buttons
    if (this.className === 'numbers') {
        if (inputString == '0' && this.id == '0') {
            inputString = '0';
        } else if (inputString == '0' && this.id != '0'){
            inputString = this.value;}
            else {
                inputString += this.value;
            }
        
        currentValue = parseFloat(inputString);
        lastEnteredValue = currentValue;
        displayedValue = inputString;
        displayValue(); 
    }

    // Decimal separator
    else if (this.id === 'dot') {
            if (inputString == '' || inputString == '0') {
                inputString = '0.';
                currentValue = parseFloat(inputString);
                lastEnteredValue = currentValue;
                displayedValue = inputString;
                displayValue();     
            } 
            if (((inputString.search(/\./)) < 0) && inputString != ''){
                inputString += '.';
                displayedValue = inputString;
                displayValue();     
                
            } else{
                inputString += '';
                displayedValue = inputString;
                displayValue();     
                }
    }
    //Operator buttons + -
    else if (this.className === 'operator') {
            if (operator === '') {
                operator = this.value;
                workingOperator = operator;
                console.log('Operator: ' + operator);
            } else {
                prevOperator = operator;
                operator = this.value;
                workingOperator = prevOperator;
            }

            //Operators + - / *
            if (workingOperator != '') {
                inputString = ''; 
                if (currentValue === 0) {
                } 
                else{  
                    if (previousValue != 0) {
                        displayedValue = operate(previousValue, currentValue); 
                        previousValue = displayedValue;
                        currentValue = 0;
                        displayValue();
                    } else {
                        previousValue = currentValue;
                        currentValue = 0;
                    }
                }   
            }
    }
    // Action buttons, that take actions on displayed numbers only
    else if (this.className === 'action') {

        // CE Button
        if (this.id === 'clearCurrent') {
            inputString = [0];
            currentValue = parseFloat(inputString);
            displayedValue = currentValue;
            previousValue = displayedValue;
            displayValue();
        } 

        // C Button (it deletes saved values also)
        if (this.id === 'clearAll') {
            previousValue = 0;
            currentValue = 0;
            displayedValue = 0;
            inputString = '';
            operator = '';
            prevOperator = '';
            workingOperator = '';
            displayValue();
        }
        // ⌫ Button
        if (this.id === 'delete') {
            if ((inputString.search(/^[-]?[\d][.]?$/) > -1)) {
                inputString = '0';
            }
            else{
                inputString = inputString.slice(0,inputString.length-1);
            } 
            console.log('inputString: '+ inputString);
            currentValue = parseFloat(inputString);
            displayedValue = inputString;
            displayValue();
        }
        //Is there any newly entered number after operators/equals button?
        if (currentValue === 0){
        currentValue = previousValue;} else {}
        if (currentValue != 0) {

            // % Button
            if (this.id === 'percent') {
                if (operator == 'add') {
                    previousValue = previousValue + (previousValue * (currentValue/100));
                    displayedValue = previousValue;
                    inputString = '';
                    currentValue = 0;
                    displayValue();
               } else if (operator == 'subtract') {
                previousValue = previousValue - (previousValue * (currentValue/100));
                displayedValue = previousValue;
                inputString = '';
                currentValue = 0;
                displayValue();
              
               }else if (operator == 'multiply') {
                previousValue = previousValue * (previousValue * (currentValue/100));
                displayedValue = previousValue;
                inputString = '';
                currentValue = 0;
                displayValue();
              
               }else if (operator == 'divide') {
                previousValue = previousValue / (previousValue / (currentValue/100));
                displayedValue = previousValue;
                inputString = '';
                currentValue = 0;
                displayValue();
              
               }


            } 

            // Square Button
            else if (this.id === 'square') {
                displayedValue = currentValue * currentValue;
                currentValue = displayedValue;
                inputString = '';
                currentValue = 0;
                previousValue = displayedValue;
                displayValue();
            } 

            // Divide in One Button
            else if (this.id === 'inOne') {
                displayedValue = 1 / currentValue;
                currentValue = displayedValue;
                inputString = '';
                currentValue = 0;
                previousValue = displayedValue;
                displayValue();
            } 

            // Square Root Button
            else if (this.id === 'sqroot') {
                displayedValue = Math.sqrt(currentValue);
                currentValue = displayedValue;
                inputString = '';
                currentValue = 0;
                previousValue = displayedValue;
                displayValue();
            } 

            // +/- Button
            else if (this.id === 'progn') {
                if (currentValue != 0) {
                    displayedValue = currentValue * -1;
                    currentValue = displayedValue;
                    lastEnteredValue = currentValue;
                    inputString = currentValue.toString();
                    displayValue(); 
                }
            }
        } 
    } // End of Action Buttons
    
    //Equals Button
    else if (this.className === 'equals') {

        //without entered operator
        if (operator === '') {
            previousValue = lastEnteredValue;
            currentValue = 0;
            inputString = '';
            
        }//Without new entered value
        else if (currentValue === 0){
            displayedValue = operate(previousValue, lastEnteredValue); 
            previousValue = displayedValue;
            displayValue();
            currentValue = 0;
            displayedValue = 0;
            inputString = '';

        }//With entered current value
         else if (currentValue != 0 ){
            workingOperator = operator;
            displayedValue = operate(previousValue, currentValue); 
            previousValue = displayedValue;
            displayValue();
            currentValue = 0;
            displayedValue = 0;
            inputString = '';
        }
    } //End of Equals Button
    
    //Memory buttons
    else if (this.className === 'memory') {
        if (this.value === 'mClear') {
            memory = 0;
        }
        if (this.value === 'mAdd') {
            if (currentValue == 0) {
                memory += previousValue;
                displayedValue = previousValue;}
            if (currentValue != 0) {
                memory += currentValue;
                displayedValue = currentValue;
            }    

            displayValue();
            currentValue = 0;
            inputString = '';

        }
        if (this.value === 'mRead') {
            displayedValue = memory; 
            displayValue(); 
            inputString = '';
            currentValue = 0;

        }
        if (this.value === 'mSubtract') {
            if (currentValue == 0) {
                memory -= previousValue;
                displayedValue = previousValue;}
            if (currentValue != 0) {
                memory -= currentValue;
                displayedValue = currentValue;
            }   
            displayValue();
            currentValue = 0;
            inputString = '';

        }
        if (this.value === 'mSet') {
            if (currentValue == 0) {
                memory = previousValue;
                displayedValue = previousValue;}
            if (currentValue != 0) {
                memory = currentValue;
                displayedValue = currentValue;
                displayValue(); 
                inputString = '';
                currentValue = 0;
            }
        }
    }

}));  // End of Button Click eventListener 


//Dot Checker
function dotCheck(element) {
    return element == '';
}

//Putting values to display   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
function displayValue() {
    display.innerText = displayedValue;

}

//Doing the math operations   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
function operate(valueOne, valueTwo){
    if (workingOperator === 'add') {
        return valueOne + valueTwo;
    } else if (workingOperator === 'subtract'){
        return valueOne - valueTwo;
    } else if (workingOperator === 'multiply'){
        return valueOne * valueTwo;
    } else if (workingOperator === 'divide'){
        return valueOne / valueTwo;
    } else if (workingOperator === 'progn'){
        return valueOne * -1;
    } 
}

// Delete end of entered numbers, one by one
function deleteLength(array) {
    if (array.length > 1) {
        return array.slice(0,array.length-1);
        } else {
        return array = [0];
        }
}
