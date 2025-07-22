"use strict"

console.log(this)
// {} -> inside node, global object

console.log(this)
// window object -> browser, global object

function devansh () {
    console.log(this)
    // undefined in strict mode
    // global object without strict mode
}
devansh()

/*
this substitution ->
if the value of this keyword is undefined
this keyword will be replaced with globalObject 
only in non strict mode

*/

// the value depends upon how you call the function
devansh() //undefined in strict mode
window.devansh() //window object in strict mode

const para = {
    x : 69,
    y : function obj () {
        console.log(this)
        console.log(this.x)
    }
}

para.y()
//69
// the value of this becomes the object 'para'

const ams = {
    x : 69,
    y : () => {
        console.log(this)
    }
}

ams.y()
// the value of this will be window object 

const student = {
    name : 'Divyanshu Sindhu',
    print : function printName () {
        console.log(this.name)
    }
}

student.print() //Divyanshu Sindhu

// ----------------Call, apply and bind
// used to overwrite this value

const secondStudent = {
    name : 'Devansh Jaat'
}

student.print.call(secondStudent) //Devansh Jaat
// inside print method the value of this becomes secondStudent



// inside arrow function there is no this binding, the value of this inside arrow functions 
// behaves as value of this in its enclosing lexical context

const obj = {
  name: "Divyanshu",
  regular: function() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.regular(); // Output: "Divyanshu"

// DOM

const button = document.querySelector('#btn')

button.addEventListener('click', () => {
    console.log(this)
})

// HTML BUTTON ELEMENT AND GLOBAL