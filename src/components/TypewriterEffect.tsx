import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
      }
    }, typeSpeed);

    if (!isDeleting && currentText === word) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((current) => (current + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterEffect;