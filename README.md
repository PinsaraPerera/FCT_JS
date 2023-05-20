# FCT_JS
chat bot using javaScript

let first_number = prompt("Enter the first number");
let second_number = prompt("Enter the first number");

let answer = Number(first_number) + Number(second_number);
console.log("The answer is : "+ answer);
alert(answer);

const cal = ()=> {
        const PI = 3.14;
        let radius = prompt("Enter the radius of the circle");
        let perimeter = 2*PI*Number(radius);
        let area = PI*Number(radius)*Number(radius);
        console.log("The perimeter is: "+ perimeter);
        console.log("The area is: "+ area);
};
