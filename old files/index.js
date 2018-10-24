
function initCalc(input) {

  // 1. Formelzeichen ermitteln 
  if (input) {
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
    }
    document.getElementById("result").innerHTML = answer;

  }

};


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