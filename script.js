let calc = prompt("Choose: +, - (Only 1 X can be in instance!)")
let a = prompt("Write 1st number or X (Only 1 X can be in instance!)")
let b = prompt("Write 2nd number or X (Only 1 X can be in instance!)")
let c = prompt("Write result or X (Only 1 X can be in instance!)")

if (calc == "+", a == "x") {
    alert(+c - +b)
} else if (+a, b == "x") {
    alert(+c - +a)
} else if (+a, +b, c == "x") {
    alert(+a + +b)
}

else if (calc == "-", a == "x") {
    alert(+c + +b)
} else if (+a, b == "x") {
    alert(+a - +c)
} else if (+b, +a, c == "x") {
    alert(+a - +b)
}

else {
    alert("Error!")
    window.location.reload()
}