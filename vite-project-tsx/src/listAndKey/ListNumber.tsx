import { v4 as uuidv4 } from 'uuid';

interface Props {
  number: number[];
}

function ListNumber(props: Props) {
  const number = props.number;

  return (
    <ul>
      {number.map((number) => (
        <li key={uuidv4()}>{number}</li>
      ))}
    </ul>
  );
}

export default ListNumber;
