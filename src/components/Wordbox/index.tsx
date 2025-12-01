import React, { useState, useEffect } from 'react';
import './style.css';

interface IWordboxProp {
  word: string;
}

const Wordbox: React.FC<IWordboxProp> = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (lettersLeft.length === 0) return;

      const expectedLetter = lettersLeft[0];

      if (e.key.toLowerCase() === expectedLetter.toLowerCase()) {
        setLettersLeft((prev) => prev.slice(1));
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [lettersLeft]);

  return <div className="wordbox">{lettersLeft}</div>;
};

export default Wordbox;
