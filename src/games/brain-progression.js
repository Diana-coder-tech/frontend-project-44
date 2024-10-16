import runGame from '../index.js';
import getRandomNumber from '../utils.js';

// Функция для генерации арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

// Генерация прогрессии (вопроса)
const generateRound = () => {
  // Генерация случайного старта, шага и длины прогрессии
  const start = () => {
    return getRandomNumber(1, 10);
  };

  const step = () => {
    return getRandomNumber(1, 3);
  };

  const length = () => {
    return getRandomNumber(5, 10);
  };

  const hiddenIndex = Math.floor(Math.random() * length());
  const question = generateProgression(start(), step(), length());
  const correctAnswer = question[hiddenIndex].toString();
  question[hiddenIndex] = '..'; // Заменяем элемент прогрессии на '..'

  return [question.join(' '), correctAnswer];
};

// Описание игры для вывода в приветствии
const description = 'What number is missing in the progression?';

// Запуск игры
export default () => runGame(description, generateRound);
