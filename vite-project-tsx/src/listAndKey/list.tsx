
const numbers: number[] = [2, 2, 3, 7, 5];

const listItem = numbers.map((number, index) => <li key={index}>{number}</li>);

console.log(listItem);
const listNumber = <ul>{listItem}</ul>;

console.log(listNumber);
