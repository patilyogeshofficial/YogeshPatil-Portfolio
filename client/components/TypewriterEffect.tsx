import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

export function TypewriterEffect({
  phrases,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenPhrases = 2000,
  className = "",
}: TypewriterEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentPhrase.length) {
            setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          } else {
            // Finished deleting, move to next phrase
            setIsDeleting(false);
            setCurrentPhraseIndex((prevIndex) =>
              prevIndex === phrases.length - 1 ? 0 : prevIndex + 1,
            );
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typeSpeed,
    deleteSpeed,
    delayBetweenPhrases,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
}
