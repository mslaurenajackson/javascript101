let userName = prompt('Tell the magic 8 ball your name:'  );

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = prompt("Ask the magic 8 Ball a question:" );

console.log(`${userName} has asked -${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
    case 3:
     eightBall = 'Cannot predict now';
    break;
     case 4:
    eightBall ='Do not count on it';
    break;
     case 5:
    eightBall ='My sources say no';
    break;
     case 6:
    eightBall ='Outlook not so good';
    break;
     case 7:
    console.log('Signs point to yes');
    break;

}

document.getElementById('answer').textContent = `The Magic 8 Ball says: ${eightBall}`;










