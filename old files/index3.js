let rechenTerm = "";
let Formelzeichen;
let anzeigeTerm = ""


function initCalc(input) {

  // 1. Formelzeichen ermitteln 
  if (input) {

    let re = /^\s*\d+\s*[\+\-\*\/\^]{1}\s*\d+\s*$/;
    console.log(re.test(input));
    if (!re.test(input)) {
      alert('Input an operation like this (x (operant) y)')
      return;
    }


    if (input.includes('+')) {
      Formelzeichen = '+';
      console.log(`The operant is: ${Formelzeichen}`)
    }
    if (input.includes('-')) {
      Formelzeichen = '-';
      console.log(`The operant is: ${Formelzeichen}`)
    }
    if (input.includes('*')) {
      Formelzeichen = '*';
      console.log(`The operant is: ${Formelzeichen}`)
    }
    if (input.includes('/')) {
      Formelzeichen = '/';
      console.log(`The operant is: ${Formelzeichen}`)
    }
    if (input.includes('^')) {
      Formelzeichen = '^';
      console.log(`The operant is: ${Formelzeichen}`)
    }

    // 2. Formelzeichen als Seperator

    const arrayOfStrings = input.split(Formelzeichen);

    // 3. Konvertierung in Nummern

    const numbers = arrayOfStrings
      .map((s) => parseInt(s))
      .filter(n => !isNaN(n))

    console.log('Numbers', numbers);

    // 4. Einsetzen in Formel

    let answer

    switch (Formelzeichen) {
      case '-':
        answer = sub(numbers);
        console.log(`The result is: ${answer}`)
        break;

      case '+':
        answer = sum(numbers)
        console.log(`The result is: ${answer}`);
        break;

      case '*':
        answer = mult(numbers)
        console.log(`The result is: ${answer}`);
        break;

      case '/':
        answer = div(numbers)
        console.log(`The result is: ${answer}`);
        break;

      case '^':
        answer = pow(numbers)
        console.log(`The result is: ${answer}`);
        break;

      default:
        answer = "No operator found!";
        break
    }
    document.getElementById("rightTerm").value = answer;
    rechenTerm = "";

  }

};


function writeIntoRightTerm(char) {
  console.log(char)

  let re = /[\+\-\*\/\^]{1}/
  if (re.test(char)) {
    console.log("isChar")
    rechenTerm += char;
    document.getElementById("rightTerm").value = ""
    return;
  }
  if (char === 'C') {
    rechenTerm = rechenTerm.slice(0, -1)
    document.getElementById("rightTerm").value = anzeigeTerm;
  } else {
    if (char.length > 1) {
      rechenTerm = "";
    }
    rechenTerm += char;
    document.getElementById("rightTerm").value = anzeigeTerm;
  }
}


///Calculator functions
// Addition
function sum(arr) {
  let a = arr[0];
  let b = arr[1];

  return a + b;
}

// Subtraktion  
function sub(arr) {
  let a = arr[0];
  let b = arr[1];

  return a - b;
}

// Multiplikation
function mult(arr) {
  let a = arr[0];
  let b = arr[1];

  return a * b;
}

// Division
function div(arr) {
  let a = arr[0];
  let b = arr[1];

  return a / b;
}

// Hoch
function pow(arr) {
  let a = arr[0];
  let b = arr[1];
  let answer = 1;

  for (let i = 0; i < b; i++) {
    answer *= a
  }
  return answer;
}



