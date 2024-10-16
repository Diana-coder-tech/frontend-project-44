import runGame from '../index.js';
import getRandomNumber from '../utils.js';

// Функция для генерации случайного оператора
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

// Функция для расчета результата выражения
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

// Функция для генерации раунда игры (вопрос и правильный ответ)
const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();

  return [question, correctAnswer];
};

// Описание игры для вывода в приветствии
const description = 'What is the result of the expression?';

// Запуск игры
export default () => runGame(description, generateRound);
