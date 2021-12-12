const calculadora = document.getElementById('calculadora');

calculadora.addEventListener('click', configura);


function configura({
    target
}) {
    const display = document.getElementById('display');
    const limpar = ["Infinity", "0"]
    if (limpar.includes(display.innerText)) {
        display.innerText = ""
    }
    display.classList.remove('erro');
    let ignora = ["display", "calculadora"];
    if (ignora.includes(target.id)) return

    const value = target.dataset.value;

    if (value == "ac") {
        display.innerText = ""
    } else
    if (value == "del") {
        let text = display.innerText;
        display.innerText = text.substring(0, text.length - 1);
    } else
    if (value == "=") {
        calcula(display);
    } else {
        display.innerText += value
    }

}

function calcula(display) {
    try {
        display.innerText = Function("return " + display.innerText)() || 0
    } catch (e) {
        if (e.name == 'SyntaxError') {
            display.innerText = ""
            display.classList.add('erro')
        }
    }

}