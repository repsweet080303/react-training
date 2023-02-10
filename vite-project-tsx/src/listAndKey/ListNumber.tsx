// import { v4 as uuidv4 } from 'uuid';

interface Props {
  number: number[];
}

function ListNumber(props: Props) {
  const number = props.number;

  return (
    <ul>
      {number.map((number, i) => (
        <li key={i} className='list-item'>
          {number}
        </li>
      ))}
    </ul>
  );
}

export default ListNumber;
