import runGame from "../index.js";
import getRandomNumber from "../utils.js";

// Функция для генерации арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

// Генерация прогрессии (вопроса)
const generateRound = () => {
  // Генерация случайного старта, шага и длины прогрессии
  const minStart = 1;
  const maxStart = 10;
  const start = getRandomNumber(minStart, maxStart);
  const minStep = 1;
  const maxStep = 3;
  const step = getRandomNumber(minStep, maxStep);
  const minLength = 5;
  const maxLength = 10;
  const length = getRandomNumber(minLength, maxLength);
  const hiddenIndex = getRandomNumber(0, length - 1);
  const question = generateProgression(start, step, length);
  const correctAnswer = question[hiddenIndex];
  question[hiddenIndex] = ".."; // Заменяем элемент прогрессии на '..'

  return [question.join(" "), correctAnswer.toString()];
};

// Описание игры для вывода в приветствии
const description = "What number is missing in the progression?";

// Запуск игры
export default () => runGame(description, generateRound);
