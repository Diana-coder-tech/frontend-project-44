import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export default () => {
    const name = userName();
    console.log('Hello, ' + name + '!');
};
  


    