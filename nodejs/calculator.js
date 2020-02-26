// document.body.addEventListener('click', function (e) {
//     e.stopPropagation();
// } else if (condition === 2) {
//     e.stopImmediatePropagation( );
// }
// console.log('A');
// });

function calculate(operator, res) {
    var a, b;
    a = document.getElementById("text1").value;
    b = document.getElementById("text2").value;
    var result = eval(a + operator + b);
    document.getElementById(res).value = result;
    // return result;
}


function calculator(a, b, o) {
    var is_operator = (o === '+') || (o === '-') || (o === '/') || (o === '*');
    var result = null;

    if (is_operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        result = eval(a + o + b);
        if (result.indexOf("NaN") != -1) {
            result = "Aargh! I don't understand";
        }
    }

    return result;
}

console.log('+', calculator(2, 3, '+'));

// function clear() {
//     document.getElementById("calc").reset();
// }
