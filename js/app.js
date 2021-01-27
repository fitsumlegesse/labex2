alert("Welcome to my program ! I will be asking you to guess five facts about me. Answer by typing true or false or simply t or f.");

var scoreTracker = 0;
var userName = prompt("First thing first. What is your name?");
console.log("Hello, " + userName +" ! below is a list of questions you got right");

var q1 = prompt("I was born and raised in the United States").toLocaleLowerCase();
if(q1 === 'false' || q1 === 'f')
{
    
    console.log("You guessed that right.");
    scoreTracker++;
}else if(q1 === 'true' || q1 === 't')
{
    alert("Incorrect guess. maybe next time.")
    console.log("Incorrect guess. maybe next time.")
    
}else{
    alert("Incorrect input. Input should be true or false or simply t or f.")
};


var q2 = prompt("I like playing soccer.").toLocaleLowerCase();

if(q2 === 'true' || q2 === 't')
{
    
    console.log("You guessed that right.");
    scoreTracker++;
}else if(q2 === 'false' || q2 === 'f')
{
    alert("Incorrect guess. maybe next time.")
    console.log("Incorrect guess. maybe next time.")
    
}else{
    alert("Incorrect input. Input should be true or false or simply t or f.")
};

var q3 = prompt("I took a drama course in high school.").toLocaleLowerCase();

if(q3 === 'true' || q3 === 't')
{
   
    console.log("You guessed that right.");
    scoreTracker++;
}else if(q1 === 'false' || q1 === 'f')
{
    alert("Incorrect guess. I took a drama course in souphmore year of my high school.")
    console.log("Incorrect guess. I took a drama course in souphmore year of my high school.")
    
}else{
    alert("Incorrect input. Input should be true or false or simply t or f.")
};

var q4 = prompt("I'm in it for the money").toLocaleLowerCase();

if(q4 === 'true' || q4 === 't')
{
    console.log("You guessed that right.");
    scoreTracker++;
}else if(q4 === 'false' || q4 === 'f')
{
    alert("Incorrect guess. Sike im in it for the money.")
    console.log("Incorrect guess. Sike im in it for the money.")
    
}else{
    alert("Incorrect input. Input should be true or false or simply t or f.")
};

var q5 = prompt("I dont stress at all.").toLocaleLowerCase();

if(q5 === 'false' || q5 === 'f')
{
    console.log("You guessed that right.");
    scoreTracker++;
}else if(q5 === 'true' || q5 === 't')
{
    alert("Incorrect guess. Your answer is stressing me right now.")
    console.log("Incorrect guess. Your answer is stressing me right now.")
    
}else{
    alert("Incorrect input. Input should be true or false or simply t or f.")
};

console.log("You scored " + scoreTracker+" out of 5.")

//DOM Manipulatiion 


