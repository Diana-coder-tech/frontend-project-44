import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция для проверки, является ли число простым
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  // Описание игры для вывода в приветствии
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Функция для генерации раунда игры (вопрос и правильный ответ)

const generateRound = () => {
        
    const question = getRandomNumber();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
        
    return [question, correctAnswer.toLowerCase()];
};
   
 export default () => runGame(description, generateRound);
