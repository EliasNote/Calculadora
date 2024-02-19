let operation = ['','',''];
let display_number = document.getElementById("display-number");
let counter = 0
console.log(Math.sqrt(25))

function calc(selected) {
    console.log(selected.getAttribute('value'))
    if (selected.className == "keyboard number") {
        
        if (operation[counter] == '0') {
            operation[counter] = selected.getAttribute('value')
            
        } else {
            operation[counter] += selected.getAttribute('value')
        }
        display_number.innerText = operation.join('')
        console.log(operation)
    } else if (selected.className == "keyboard operator") {
        counter = 1
        if (operation[2] || operation[1]) {
            calculator()
        }
        operation[counter] = selected.getAttribute('value')
        counter = 2
        display_number.innerText = operation.join('')
        console.log(operation)
    } else if (selected.className == "keyboard clear") {
        clear(selected.getAttribute('value'))
    } else {
        calculator ()
    }
}

function calculator() {
    if (!operation[0]) {
        operation[0] = '0';
    }
    if (operation[1] == "/" && operation[2]) {
        operation[0] = String(parseFloat(operation[0]) / parseFloat(operation[2]));
    } else if (operation[1] == "x" && operation[2]) {
        operation[0] = String(parseFloat(operation[0]) * parseFloat(operation[2]));
    } else if (operation[1] == "-" && operation[2]) {
        operation[0] = String(parseFloat(operation[0]) - parseFloat(operation[2]));
    } else if (operation[1] == "+" && operation[2]) {
        operation[0] = String(parseFloat(operation[0]) + parseFloat(operation[2]));
    } else if (operation[1] == "²") {
        console.log("asdasd")
        if (operation[2]) {
            operation[0] = String(parseFloat(operation[2]) ** 2);
        } else {
            operation[0] = String(parseFloat(operation[0]) ** 2);
        }
    }
    operation[1] = '', operation[2] = ''
    display_number.innerText = operation.join('')
    counter = 1
}

function clear(option) {
    if (option == "CE" || option == "C") {
        operation = ['','',''];
        counter = 0;
        display_number.innerText = 0;
    } else {
        if (operation[0].length == 1 && !operation[1] && !operation[2]) {
            operation[0] = '0'
        } else if (operation[2]) {
            operation[2] = operation[2].slice(0, operation[2].length-1);
        } else if (operation[1]) {
            operation[1] = operation[1].slice(0, operation[1].length-1);
        } else {
            console.log(operation)
            operation[0] = operation[0].slice(0, operation[0].length-1);
        }
        display_number.innerText = operation.join('')
        if (operation[2]) {
            counter = 2;
        } else if (operation[1]) {
            counter = 1;
        } else {
            counter = 0;
        }
    }

}