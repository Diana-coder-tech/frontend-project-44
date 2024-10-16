import runGame from '../index.js';

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
    const start = Math.floor(Math.random() * 10) + 1; // Старт прогрессии от 1 до 10
  const step = Math.floor(Math.random() * 3) + 1; // Шаг прогрессии от 1 до 3
  const length = Math.floor(Math.random() * 6) + 5; // Длина прогрессии от 5 до 10

  const hiddenIndex = Math.floor(Math.random() * length); 
  const question = generateProgression(start, step, length);
  const correctAnswer = question[hiddenIndex].toString();
  question[hiddenIndex] = '..'; // Заменяем элемент прогрессии на '..'

  return [question.join(' '), correctAnswer];
};

  // Описание игры для вывода в приветствии
const description = 'What number is missing in the progression?';

// Запуск игры
export default () => runGame(description, generateRound);