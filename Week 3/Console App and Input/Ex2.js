const prompt = require('prompt-sync')();

const questions = [
  { question: 'What is 3 + 5?', answer: '8' },
  { question: 'What is the capital of Israel?', answer: 'Jerusalem' },
  { question: 'What year is it?', answer: '2025' }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const userAnswer = prompt(`Question ${i + 1}: ${questions[i].question} `);
  if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
    score++;
  }
}

console.log(`Final Score: ${score}/${questions.length} correct!`);