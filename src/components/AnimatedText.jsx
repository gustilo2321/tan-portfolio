import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = () => {
  const words = ["photographer", "developer", "designer"]; // Words to animate
  const [currentWord, setCurrentWord] = useState(words[0]); // Current word displayed
  const [isDeleting, setIsDeleting] = useState(false); // Deleting state
  const [index, setIndex] = useState(0); // Index for current word
  const [text, setText] = useState(''); // Text to display

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[index % words.length]; // Get the current word
      const updatedText = isDeleting
        ? fullWord.substring(0, text.length - 1) // Delete one character
        : fullWord.substring(0, text.length + 1); // Add one character

      setText(updatedText); // Update the displayed text

      // Manage the typing and deleting process
      if (!isDeleting && updatedText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false); // Stop deleting
        setIndex(index + 1); // Move to the next word
      }
    };

    const typingSpeed = isDeleting ? 75 : 150; // Speed for typing and deleting
    const timer = setTimeout(handleTyping, typingSpeed); // Set a timer for typing effect
    return () => clearTimeout(timer); // Cleanup the timer
  }, [text, isDeleting, index]); // Re-run effect when these variables change

  return (
    <span className="highlight-animated">{text}</span> // Display the animated word
  );
};

export default AnimatedText;
