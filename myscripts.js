let previousValue = 0;
let currentValue = 0;
let displayedValue = 0;
let currentValueArray = [];
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
        currentValueArray.push(this.value);
        currentValue = parseFloat(currentValueArray.join(''));
        displayedValue = currentValue;
        displayValue();  
        console.log('Current value : ' + currentValue);          
    }
    //Operator buttons
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

            //Operators
            if (workingOperator === 'add' || workingOperator === 'subtract' || workingOperator === 'multiply' || workingOperator === 'divide') {
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
    // Action buttons
    else if (this.className === 'action') {
            if (currentValue != 0) {
                if (this.id === 'percent') {
                    displayedValue = currentValue / 100;
                    currentValue = displayedValue;
                    currentValueArray = [];
                    displayValue();

                } else if (this.id === 'square') {
                    displayedValue = currentValue * currentValue;
                    currentValue = displayedValue;
                    currentValueArray = [];
                    displayValue();
                } else if (this.id === 'inOne') {
                    displayedValue = 1 / currentValue;
                    currentValue = displayedValue;
                    currentValueArray = [];
                    displayValue();
                } else if (this.id === 'sqroot') {
                    displayedValue = Math.sqrt(currentValue);
                    currentValue = displayedValue;
                    currentValueArray = [];
                    displayValue();
          /*      } else if (this.id === 'delete') {
                    displayedValue = (currentValue.toString()).slice(1,1);
                    currentValue = displayedValue;
                    displayValue();
                }else if (this.id === 'progn') {
                    displayedValue = currentValue * -1;
                    currentValue = displayedValue;
                    displayValue(); 
                }

            } 
    }

    //Modifier buttons
    if (this.className === 'modifier') {
        //Equals Button
        if (this.id === 'equals' && previousValue != 0){
            displayedValue = operate(previousValue, currentValue); 
            previousValue = displayedValue;
            displayValue();
            currentValue = 0;
            previousValue = 0;
            displayedValue = 0;
            currentValueArray = [];
            operator = 0;
            prevOperator = 0;
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

//Doing the math operations   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
function operate(a,b){
    if (workingOperator === 'add') {
        return a+b;
    } else if (workingOperator === 'subtract'){
        return a-b;
    } else if (workingOperator === 'multiply'){
        return a*b;
    } else if (workingOperator === 'divide'){
        return a/b;
    } else if (workingOperator === 'progn'){
        return b*-1;
    } 
}

//  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

