function checkAnswer(questionNumber, answer) {
    const results = {
      1: 'a', // Peony = favorite
      2: 'b'  // Misal: WA chat is correct
    };
  
    const feedback = {
      correct: "Correct! 💕 You know me so well, love!",
      wrong: "Oops! Almost babyy~ but nice try 💫"
    };
  
    const isCorrect = results[questionNumber] === answer;
    const resultElement = document.getElementById(`result${questionNumber}`);
    resultElement.innerText = isCorrect ? feedback.correct : feedback.wrong;
  }
  