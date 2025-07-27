const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

const answer = factorial(3);
console.log(answer);

const sequenceSum = (begin, end) => {
  if (begin <= end) {
    return sequenceSum(begin + 1, end) + begin;
  }
  else {
    return 0;
  }
}
console.log(sequenceSum(1, 5));
console.log(sequenceSum(4, 10));
console.log(sequenceSum(-3, 2));
console.log(sequenceSum(7, 2));


const name = 'Hexlet'
const getLetter = (name, value) => name[value-1] || ''
console.log(getLetter(name, 11));
console.log(getLetter(name, 1));
console.log(getLetter(name, 0));
console.log(getLetter(name, 6) );
 // ''

 // 'H'
 // ''
// 't'

const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1]
  if (lastChar === '?') {
    return 'question'
  }

  return 'general'
}
console.log(getTypeOfSentence('Hodor?'));
console.log(getTypeOfSentence('Hodor'));

 // general
 // question
const getTypeOfSentence1 = (sentence) => {
  const lastChar = sentence[sentence.length - 1]
  let sentenceType

  if (lastChar === '!') {
    sentenceType = 'exclamation'
  }
  else {
    sentenceType = 'normal'
  }

  if (lastChar === '?') {
    sentenceType = 'question'
  }

  return `Sentence is ${sentenceType}`
}

getTypeOfSentence1('Who?') // Sentence is question
getTypeOfSentence1('No') // Sentence is normal
getTypeOfSentence1('No!') // Sentence is exclamation
//----------------------------------
const factoriala = (n) => {
  if (n === 0) {
    return 1;
  }

  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };

  return iter(n, 1);
};
console.log(factoriala(3));