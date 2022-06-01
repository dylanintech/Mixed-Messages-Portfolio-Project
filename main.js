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
const generateRandomMessage = messageParts => {
    const randomFirstPart = messageParts.firstPart[generateRandomNumber()];
    const randomSecondPart = messageParts.secondPart[generateRandomNumber()];
    const randomThirdPart = messageParts.thirdPart[generateRandomNumber()];
    let randomMessage = randomFirstPart.concat(randomSecondPart, randomThirdPart);
    return randomMessage;
};

//Creating a function to make sure that the message is different every time!
const combinationsUsed = [];
const outputMessage = message => {
    if (combinationsUsed.indexOf(message) === -1) {
        combinationsUsed.push(message); //makes sure combination isn't used again
        return message; //what the user sees! 
    } else if (message in combinationsUsed) {
        generateRandomMessage();
        outputMessage(); //recursive call to try again with a new message 
    } else if (combinationsUsed.length === 84) {
        console.log('You\'ve been 100% inspired already!'); // prints if all of the possible combinations have been used(84)
    }
}

//Using generateRandomMessage() to output inspirational message to user!
//console.log(generateRandomMessage(messageParts));
console.log(outputMessage(generateRandomMessage(messageParts)));