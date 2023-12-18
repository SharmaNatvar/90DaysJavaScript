// Describe Closure concept in javaScript as best as you could

function outerFunction() {
    let outerVariable = 'Hello';

    function innerFunction() {
        let innervariable = 'world';
        console.log(outerVariable + ' ' + innervariable);
    }

    return innerFunction;
}

const closure = outerFunction();
closure();