# Mixed Messages ✉️
## Description

**Mixed Messages** is my first portfolio project written entirely in javascript. It's a program that randomly outputs a different, random  
✨*inspirational message*✨ every time it's run. I like reading motivational quotes myself so that is why I chose to use these messages.

## A quick rundown of how I did it

1. I created an object **messageParts** to store three different arrays: **firstPart**, **secondPart**, and **thirdPart** - each containing three elements. The arrays correspond to different parts of the **message**
2. I used two functions **generateRandomNumber()** and **generateRandomMessage()** as the logic for randomly selecting an index of each array and then concatenating their values together, returning the result
3. Finally, I used a function **outputMessage()** that takes in the result of calling **generateRandomMessage()** and uses if...else and another array to check if the result has already been printed before. If it has, a new message is generated and recursively checked. If it hasn't, then the message is printed. Also, if all 84 possible combinations have been printed then the program tells the user that they've been **100% inspired** and no more messages are output.
4. I also used git to version control 

## Struggles and how I overcame them

The main struggle was trying to code the last function **outputMessage()**, shown below:

<img width="897" alt="Mixed Messages output function" src="https://user-images.githubusercontent.com/86082012/171468320-079fe6dc-5cb1-413a-bc5b-f083143da90b.png">


I tried to challenge myself with this one by using a recursive function, which I had only done in python. It turned out that the syntax is basically identical and this ended up being the easiest component of the function.
The actual hardest part was making sure that previously defined variables wouldn't be read as undefined when I incorporated them. The first time I added **generateRandomMessage()** as an argument it told me that the **messageParts**
object was *undefined* and it still told me so even when I edited the function 5 times. After fixing this I encountered another error where the message was not being printed. None of this was actually hard in the traditional sense it
was just simple mistakes and type errors that I wasn't paying attention to. I used a lot of stack overflow and made many branches in order to test new code. Next time I need to be more aware of the simple relationships between different functions and
variables that may cause problems.

## Thank you! 🙃

Thank you for taking the time to read this (this is my first readme file as well!) and I hope that you liked my first JS portfolio project. I'll be building many more in the following weeks!
