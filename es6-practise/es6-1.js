// 1st home work
const name = "Abid";
let age = 19;

// 2nd home work
const aboutMe = `My name is Tajwar Saiyeed ${name}. I'm ${age} years old.`;
console.log(aboutMe);

// 3rd home work

const devideByFive = (x) => x / 5;
console.log(devideByFive(15));

// 4th home work

const myFun = (num1, num2) => (num1 + 2) * (num2 + 2);

const result = myFun(10, 0);
console.log(result);

// 5th home work

const threePerameter = (x, y, z) => x * y * z;
console.log(threePerameter(2, 2, 2));

// 6th home work
// arrow function multiple line code

const multipleLineArrow = (n1, n2) => {
  n1 = n1 + 2;
  n2 = n2 + 2;
  return n1 * n2;
};

const run = multipleLineArrow(10, 10);
console.log(run);
