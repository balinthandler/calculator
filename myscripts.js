let previousValue = 0;
let currentValue = 0;
let displayedValue = 0;
let currentValueArray = [];
let operator = '';
let prevOperator = '';
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
        currentValueArray.push(this.value);
        currentValue = parseFloat(currentValueArray.join(''));
        displayedValue = currentValue;
        displayValue();  
        console.log('Current value : ' + currentValue);          
    }
    //Operator buttons
    else if (this.className === 'operator') {
        if operator == ''
        operator = this.value;
        console.log('Operator: ' + operator);

        
        //Operators
            if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
                currentValueArray = []; 
                if (previousValue != 0) {
                    displayedValue = operate(previousValue, currentValue); 
                    previousValue = displayedValue;
                    currentValue = 0;
                    displayValue();
                    } else {
                    previousValue = currentValue;
                    currentValue = 0;
                    console.log('Previous value: ' + previousValue);
                    console.log('Current value: ' + currentValue);
                }
            }
        
    }
    //Modifier buttons
    if (this.className === 'modifier') {
        //Equals Button
        if (this.id === 'equals'){
            displayedValue = operate(previousValue, currentValue); 
            previousValue = displayedValue;
            currentValue = 0;
            displayValue();
            console.log();    
        }
        //Clear Button
        if (this.id === 'clear') {
            previousValue = 0;
            displayedValue = 0;
            currentValue = 0; 
            currentValueArray = []; 
            operator = ''; 
            prevOperator = '';

            displayValue();
        }
        }

    //Memory buttons
    else if (this.className === 'memory') {
        if (this.value === 'mClear') {memory = 0;}
        if (this.value === 'mAdd') {displayedValue += memory; displayValue()}
        if (this.value === 'mRead') {displayedValue = memory; displayValue()}
        if (this.value === 'mSubtract') {displayedValue -= memory; displayValue()}
        if (this.value === 'mSet') {memory = parseInt(displayedValue); currentValueArray = [];}
        console.log('Memory: ' + memory);
    }
}));   


//Putting values to display   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
function displayValue() {
    display.innerText = displayedValue;

}

//Doing the math function   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
function operate(a,b){
    if (operator === 'add') {
        return a+b;
    } else if (operator === 'subtract'){
        return a-b;
    } else if (operator === 'multiply'){
        return a*b;
    } else if (operator === 'divide'){
        return a/b;
    } else if (operator === 'progn'){
        return b*-1;
    } else if (operator === 'percent'){
        return 100/b;
    } else if (operator === 'inOne'){
        return 1/b;
    }
}
//  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
