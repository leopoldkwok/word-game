import React, { useState } from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 characters. 👍');
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        id='guess-input'
        type='text'
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
