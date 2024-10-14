import readlineSync from 'readline-sync';

// Функция для запуска любой игры
const runGame = (gameDescription, generateRound, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let round = 0; round < roundsCount; round += 1) {
    // Генерация вопроса и правильного ответа
    const [question, correctAnswer] = generateRound();
    
    // Выводим вопрос пользователю
    console.log(`Question: ${question}`);
    
    // Получаем ответ пользователя
    const userAnswer = readlineSync.question('Your answer: ');

    // Проверяем правильность ответа
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  // Если пользователь правильно ответил на все вопросы
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;