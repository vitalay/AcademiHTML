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
