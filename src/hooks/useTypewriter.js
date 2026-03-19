import { useState, useEffect } from 'react'

/**
 * Custom hook that cycles through an array of strings with a typewriter animation.
 * @param {string[]} words - Array of words/phrases to cycle through
 * @param {number} typeSpeed - Milliseconds per character while typing (default: 90)
 * @param {number} deleteSpeed - Milliseconds per character while deleting (default: 50)
 * @param {number} pause - Milliseconds to pause at the end of each word (default: 2000)
 * @returns {string} The current display text
 */
export function useTypewriter(words, typeSpeed = 90, deleteSpeed = 50, pause = 2200) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (isPausing) {
      const pauseTimeout = setTimeout(() => {
        setIsPausing(false)
        setIsDeleting(true)
      }, pause)
      return () => clearTimeout(pauseTimeout)
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        const next = currentWord.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === currentWord) {
          setIsPausing(true)
        }
      } else {
        // Deleting
        const next = currentWord.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPausing, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return displayText
}
