import '../styles/button.css';

function Button() {
  function handleEvent(event) {
    event.preventDefault();

    console.log('Event handled');
  }

  return (
    <button className='btn__add' onClick={handleEvent}>
      Add user
    </button>
  );
}

export default Button;
