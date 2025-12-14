import { useState } from 'react';

const useWordle = (solution: string | null) => {
  const length = solution ? solution.length : 0;

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('') || null;
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  type KeyColor = 'green' | 'yellow' | 'grey';

  type GuessLetter = {
    key: string;
    color: KeyColor;
  };
  type UsedKeys = Record<string, KeyColor>;

  //Dar formato al string del intento para que sea un array  [{letter: "a", color: "grey"}]
  const formatGuess = () => {
    let solutionArray = [...solution!];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: 'grey' };
    });

    //checar por verdes
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green';
        solutionArray[i] = null!;
      }
    });

    //checar por amarillos
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = null!;
      }
    });
    return formattedGuess;
  };

  //agregar nuevo intento al estado del juego
  //agregar intento al historial
  //agregar turno
  const addNewGuess = (formattedGuess: []) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => prevTurn + 1);
    setUsedKeys((prevUsedKeys: UsedKeys) => {
      const newKeys: UsedKeys = { ...prevUsedKeys };

      formattedGuess.forEach((l: GuessLetter) => {
        const currentColor = newKeys[l.key];

        if (l.color === 'green') {
          newKeys[l.key] = 'green';
          return;
        }

        if (l.color === 'yellow' && currentColor !== 'green') {
          newKeys[l.key] = 'yellow';
          return;
        }

        if (
          l.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[l.key] = 'grey';
        }
      });

      return newKeys;
    });
    setCurrentGuess('');
  };

  //llevar conteo del actual intento
  const handleKeyup = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      //no permitir mas de 5 intentos
      if (turn > 5) {
        console.log('no more guesses');
        return;
      }
      //no permitir palabras duplicadas
      if (history.includes(currentGuess)) {
        console.log('you already tried that word');
        return;
      }
      //checar que la pala tenga la longitud correcta
      if (currentGuess.length !== length) {
        console.log(`word must be ${length} chars long`);
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
      return;
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^\p{L}$/u.test(key)) {
      if (currentGuess.length < length) {
        setCurrentGuess((prev) => prev + key.toLowerCase());
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys };
};
export default useWordle;
