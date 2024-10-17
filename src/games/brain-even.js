import runGame from "../index.js";
import getRandomNumber from "../utils.js";

const isEven = (num) => num % 2 === 0;

// Описание игры для вывода в приветствии
const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

// Функция для генерации раунда игры (вопрос и правильный ответ)

const generateRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? "yes" : "no";

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
