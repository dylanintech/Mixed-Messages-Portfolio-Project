//Tells the user that the message has been generated!
console.log('Generated inspirational message↓');

/* 
   Creating an object to store the three parts of the random inspirational message. 
   Elements will be mixed and matched but the parts will always go in order
*/
const messageParts = {
    firstPart: ["You should never fear because ", "The sun always shines when ", "Turn that frown upside down because "],
    secondPart: ["everything in life happens for a reason ", "you are you ", "life is beautiful "],
    thirdPart: ["and all will be well in the end.", "and you'll reach your dreams faster than you think.", "and you are loved."],
}

//Creating logic for randomly matching elements from the three parts of the message
let generateRandomNumber = () => { 
    return Math.floor(Math.random() * 3);
};
const generateRandomMessage = (messageParts) => {
    const randomFirstPart = messageParts.firstPart[generateRandomNumber()];
    const randomSecondPart = messageParts.secondPart[generateRandomNumber()];
    const randomThirdPart = messageParts.thirdPart[generateRandomNumber()];
    let randomMessage = randomFirstPart.concat(randomSecondPart, randomThirdPart);
    return randomMessage;
};

//Using generateRandomMessage() to output inspirational message to user!
console.log(generateRandomMessage(messageParts));