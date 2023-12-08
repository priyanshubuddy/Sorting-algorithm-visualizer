import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const initialText = 'SORTING VISUALIZER';
  const [text1, setText1] = useState('SORTING');
  const [text2, setText2] = useState('VISUALIZER');

  const shuffleText = (inputText, maxChars) => {
    const textArray = inputText.split('').map((char) => ({ char, order: Math.random() }));
    textArray.sort((a, b) => a.order - b.order);
    const shuffledText = textArray.map((item) => item.char).join('');
    return shuffledText.slice(0, maxChars);
  };

  const shuffleEffect = () => {
    const maxCharsInText2 = initialText.length - text1.length;
    setText1(shuffleText(text1, text1.length));
    setText2(shuffleText(text2, maxCharsInText2));
  };

  const showSortingVisualizer = () => {
    setText1('SORTING');
    setText2('VISUALIZER');
  };

  useEffect(() => {
    const shuffleTimer = setTimeout(() => {
      shuffleEffect();
      const visualizerTimer = setTimeout(() => {
        showSortingVisualizer();
      }, 1000);
      return () => clearTimeout(visualizerTimer);
    }, 50);

    return () => clearTimeout(shuffleTimer);
  }, [text1, text2, initialText]);

  return (
    <div className="header-container" onDoubleClick={shuffleEffect}>
      <div className="text">{text1}</div>
      <div className="text">{text2}</div>
    </div>
  );
};

export default Header;
