import FancyBorder from './FancyBorder';

interface Props {
  title: string;
  message: string;
  children: any;
}

function Dialog(props: Props) {
  return (
    <>
      <FancyBorder color='red'>
        <h1 className='dialog-title'>{props.title}</h1>
        <p className='dialog-message'>{props.message}</p>
        {props.children}
      </FancyBorder>
    </>
  );
}

export default Dialog;
