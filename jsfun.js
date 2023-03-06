// 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

const age = 18;

if (age >= 18) {
  console.log('¡Enhorabuena, tienes ' + age + ' años y puedes conducir!.');
} else {
  console.log('¡Lo siento mucho!, tienes ' + age + ' años y aún no puedes conducir :(.');
}



// 2. Pide una nota (número). Muestra la calificación según la nota:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

const qualification = 8;

if (qualification < 3) {
  console.log('Calificación : Muy deficiente');
} else if (qualification >= 3 && qualification < 5) {
  console.log('Calificación : Insuficiente');
} else if (qualification >= 5 && qualification < 6) {
  console.log('Calificación : Suficiente');
} else if (qualification >= 6 && qualification < 7) {
  console.log('Calificación : Bien');
} else if (qualification >= 7 && qualification < 9) {
  console.log('Calificación : Notable');
} else if (qualification >= 9 && qualification <= 10) {
  console.log('Calificación : Sobresaliente');
} else {
  console.log('Calificación no válida');
}



// 3. Completa las condiciones de los if, del siguiente script para que los mensajes se muetren siempre de forma correcta

const numero1 = 5;
const numero2 = 8;

if (numero1 <= numero2) {
  console.log('numero1 no es mayor que numero2');
}
if (numero2 > 0) {
  console.log('numero2 es positivo');
}
if (numero1 < 0 || numero1 != 0) {
  console.log('numero1 es negativo o distinto de cero');
}
if(numero1 + 1 <= numero2) {
  console.log('Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2');
}



// 4. Dardos

let dart1Value = 8;
const dart1InitialValue = dart1Value;
let dart2Value = 12;
const dart2InitialValue = dart2Value;
let dart3Value = 17;
const dart3InitialValue = dart3Value;

const dart1Shoot = 'triple';
const dart2Shoot = 'bull\'s eye simple';
const dart3Shoot = 'double';

switch (dart1Shoot) {
  case 'simple':
    dart1Value *= 1;
    break;
  case 'double':
    dart1Value *= 2;
    break;
  case 'triple':
    dart1Value *= 3;
    break;
  case 'bull\'s eye simple':
    dart1Value = 25;
    break;
  case 'bull\'s eye':
    dart1Value = 50;
    break;
}

if (dart1Shoot === 'bull\'s eye') {
  console.log('You get a ' + dart1Shoot + '!!! Dart 1 is 50 points!');
} else if (dart1Shoot === 'bull\'s eye simple') {
  console.log('You get a ' + dart1Shoot + '!!! Dart 1 is 25 points!');
} else {
  console.log('You get a ' + dart1Shoot + ' on ' + dart1InitialValue +'!!! Dart 1 is ' + dart1Value + ' points!');
}


switch (dart2Shoot) {
  case 'simple':
    dart2Value *= 1;
    break;
  case 'double':
    dart2Value *= 2;
    break;
  case 'triple':
    dart2Value *= 3;
    break;
  case 'bull\'s eye simple':
    dart2Value = 25;
    break;
  case 'bull\'s eye':
    dart2Value = 50;
    break;
}

if (dart2Shoot === 'bull\'s eye') {
  console.log('You get a ' + dart2Shoot + '!!! Dart 2 is 50 points!');
} else if (dart2Shoot === 'bull\'s eye simple') {
  console.log('You get a ' + dart2Shoot + '!!! Dart 2 is 25 points!');
} else {
  console.log('You get a ' + dart2Shoot + ' on ' + dart2InitialValue +'!!! Dart 2 is ' + dart2Value + ' points!');
}


switch (dart3Shoot) {
  case 'simple':
    dart3Value *= 1;
    break;
  case 'double':
    dart3Value *= 2;
    break;
  case 'triple':
    dart3Value *= 3;
    break;
  case 'bull\'s eye simple':
    dart3Value = 25;
    break;
  case 'bull\'s eye':
    dart3Value = 50;
    break;
}

if (dart3Shoot === 'bull\'s eye') {
  console.log('You get a ' + dart3Shoot + '!!! Dart 3 is 50 points!');
} else if (dart3Shoot === 'bull\'s eye simple') {
  console.log('You get a ' + dart3Shoot + '!!! Dart 3 is 25 points!');
} else {
  console.log('You get a ' + dart3Shoot + ' on ' + dart3InitialValue +'!!! Dart 3 is ' + dart3Value + ' points!');
}


const totalPoints = dart1Value + dart2Value + dart3Value;
console.log('Congratulations! Your Final Score is ' + totalPoints + ' points!!!');