import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    const name = userName;
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    

    let correctAnswersCount = 0;
    const roundsToWin = 3;

    while (correctAnswersCount < roundsToWin) {

        const number = getRandomNumber();
        console.log(`Question: ${number}`);   

        const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
        const correctAnswer = isEven(number) ? 'yes' : 'no';
        
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }  
    }
    console.log(`Congratulations, ${name}!`);
};
 export default brainEvenGame;
