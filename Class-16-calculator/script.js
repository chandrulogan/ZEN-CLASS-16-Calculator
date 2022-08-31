let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName("button")); // need to use the array from function in order to convert the buttons in to array

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = " "
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText); // eval help us to all the math functions
                } catch (error) {
                    display.innerText = 'Syntax Error!'
                }

                break;

            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
});