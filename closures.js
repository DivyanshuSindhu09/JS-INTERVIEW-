//! closure gives us access to scope of outer function from inner function

function closure() {
    const name = "devansh"
    function inner() {
        console.log(name)
        //! lexical scope 
    }
    inner()
}

closure()

function makeFunction() {
    const name = "Divyanshu"

    function printName() {
        console.log(name)
    }

    return printName
}

const executeFunction = makeFunction()

executeFunction() //Divyanshu
//! function k reference k sath sath uska outer scope bhi pass hogya


// document.querySelector("#red").addEventListener("click" ,function () {
//     document.body.style.backgroundColor = "red"
// })
// document.querySelector("#green").addEventListener("click" ,function () {
//     document.body.style.backgroundColor = "green"
// })


//! practical use case

function clickHandler(color) {
    
    return function () {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("red").addEventListener("click", clickHandler("red"))
document.getElementById("green").addEventListener("click", clickHandler("green"))