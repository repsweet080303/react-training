const numbers: number[] = [2, 2, 3, 7, 5];

const listItem = numbers.map((number, index) => <li key={index}>{number}</li>);
const listNumber = <ul>{listItem}</ul>;
