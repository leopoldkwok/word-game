import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters. 👍');
    }

    console.log({ guess });

    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
