let rechenTerm = "";
let Formelzeichen;
let anzeigeTerm = ""


function initCalc() {

  // 1. Formelzeichen ermitteln 

  let re = /^\s*\d+\s*[\+\-\*\/\^]{1}\s*\d+\s*$/;
  console.log(re.test(rechenTerm));
  if (!re.test(rechenTerm)) {
    alert('Input an operation like this (x (operant) y)')
    return;
  }


  if (rechenTerm.includes('+')) {
    Formelzeichen = '+';
    console.log(`The operant is: ${Formelzeichen}`)
  }
  if (rechenTerm.includes('-')) {
    Formelzeichen = '-';
    console.log(`The operant is: ${Formelzeichen}`)
  }
  if (rechenTerm.includes('*')) {
    Formelzeichen = '*';
    console.log(`The operant is: ${Formelzeichen}`)
  }
  if (rechenTerm.includes('/')) {
    Formelzeichen = '/';
    console.log(`The operant is: ${Formelzeichen}`)
  }
  if (rechenTerm.includes('^')) {
    Formelzeichen = '^';
    console.log(`The operant is: ${Formelzeichen}`)
  }

  // 2. Formelzeichen als Seperator

  const arrayOfStrings = rechenTerm.split(Formelzeichen);

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
  anzeigeTerm = answer + "";
  document.getElementById("rightTerm").value = anzeigeTerm;
  rechenTerm = answer + "";

}

function writeIntoRightTerm(char) {
  console.log(char)

  let re = /[\+\-\*\/\^]{1}/
  if (re.test(char)) {
    console.log("isChar")

    let re2 = /^\s*\d+\s*[\+\-\*\/\^]{1}\s*\d+\s*$/;
    if (re2.test(rechenTerm)) {
      initCalc()
    }

    rechenTerm += char;
    anzeigeTerm = ""
    document.getElementById("rightTerm").value = anzeigeTerm;

    return;
  }
  if (char === 'C') {
    rechenTerm = rechenTerm.slice(0, -1)
    anzeigeTerm = anzeigeTerm.slice(0, -1)
    document.getElementById("rightTerm").value = anzeigeTerm;
  } else {
    if (char.length > 1) {
      rechenTerm = "";
    }
    rechenTerm += char;
    anzeigeTerm += char
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



