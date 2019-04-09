//Javascript String
const logName = function(name) {
  console.log(`Hello, ${name}!`);
};

const nameA = "Jokowi";
const nameB = "Prabowo";

logName(nameA);

//Javascript Number
const personAge = (ageA, ageB) => {
  return ageA + ageB;
};

const nameD = personAge(11, 25);
const nameE = personAge(12, 17);

console.log(nameD);
console.log(nameE);

//Javascript Boolean
const ourAge = age => {
  if (age <= 17) {
    console.log("Anda masuk masa usia remaja");
  } else if (age >= 17) {
    console.log("Anda masuk masa usia dewasa");
  } else {
    console.log("Anda mahkluk planet Namec");
  }
};

ourAge(12);

//Javascript Array
const addMark = (text, mark, times) => {
  let newText = text;

  for (let i = 2; i < times; i++) {
    newText += mark;
  }

  console.log(newText);
};

addMark("Hello", "!", "5");

// Javascript Loops
const tree = num => {
  for (let i = 0; i <= num; i++) {
    let count = "";

    for (let j = num; j >= i; j--) {
      count += " ";
    }
    for (let k = 0; k <= i * 2; k++) {
      count += "^";
    }
    console.log(count);
  }
};

tree(7);
