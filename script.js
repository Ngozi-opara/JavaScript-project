let simpleCalculator = true;
while (simpleCalculator = true) {
    let operations = window.prompt("Select an operation to perform: Type '1' for Addition '2' for Subtraction '3' for Multiplication '4' for Division");
    
    let num1 = window.prompt('Enter a number :');
    let num2 = window.prompt('Enter another number :');

    if (operations == "1") {
       
       let sum = parseFloat(num1) + parseFloat(num2);
       alert('The sum is ' + sum);
    }
       
    else if (operations == "2") {
     
       let difference = parseFloat(num1) - parseFloat(num2);
       alert('The difference is ' + difference);
   }
       
    else if (operations == "3") {
      
       let product = parseFloat(num1) * parseFloat(num2);
       alert('The product is ' + product);
    }
       
     else if (operations == "4") {
   
      let quotient = parseFloat(num1) / parseFloat(num2)
       alert('The quotient is ' + quotient); 
     }
    else {
        alert("Invalid input. Stop");
    }
    let reRun = window.prompt("Would you like to perform another operation? " + ["Yes", "No"]);
    if (reRun == "Yes") {
       
    }
    if (reRun == "No") {
        break;
    }
}