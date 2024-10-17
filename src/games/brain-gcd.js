import runGame from '../index.js';
import getRandomNumber from '../utils.js';

// Функция для вычисления НОД (алгоритм Евклида)
const gcd = (number1, number2) => {
  while (number2 !== 0) {
    [number1, number2] = [number2, number1 % number2];
  }
  return number1;
};

// Функция для генерации раунда игры (вопрос и правильный ответ)
const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
// Описание игры для вывода в приветствии
const description = 'Find the greatest common divisor of given numbers.';

// Запуск игры
export default () => runGame(description, generateRound);
