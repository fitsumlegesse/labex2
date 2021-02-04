alert("Welcome to my website !");

var scoreTracker = 0;


function myQuestions()
{
    var userName = prompt("First thing first. What is your name?");
    alert("Hello, " + userName + ". Thank you for visiting my website. I am going to ask you a few question about myself and see how much you know about me. Answer by typing True or False or simply T or F. I will display your result at the end. ")
    
    var q1 = prompt("I was born and raised in the United States").toLocaleLowerCase();
    if(q1 === 'false' || q1 === 'f')
    {
        console.log("You guessed that right.");
        scoreTracker++;
    }else if(q1 === 'true' || q1 === 't')
    {
        alert("Incorrect guess. maybe next time.")
        // console.log("Incorrect guess. maybe next time.")
        
    }else{
        alert("Incorrect input. Input should be true or false or simply t or f.")
    };
    
    
    var q2 = prompt("I like playing soccer.").toLocaleLowerCase();
    
    if(q2 === 'true' || q2 === 't')
    {
        
        console.log("You guessed that right. Another point for you !");
        scoreTracker++;
    }else if(q2 === 'false' || q2 === 'f')
    {
        alert("Incorrect guess. I like playing soccer. ");
    
    }else{
        alert("Incorrect input. Input should be true or false or simply t or f.");
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
    
    var q6 = prompt("I dont stress at all.").toLocaleLowerCase();
    
    if(q6 === 'false' || q6 === 'f')
    {
        console.log("You guessed that right.");
        scoreTracker++;
    }else if(q6 === 'true' || q6 === 't')
    {
        alert("Incorrect guess. Your answer is stressing me right now.")
        console.log("Incorrect guess. Your answer is stressing me right now.")
        
    }else{
        alert("Incorrect input. Input should be true or false or simply t or f.")
    };
    
    var q6 = prompt("I have let people disrespect me in the past. ").toLocaleLowerCase();
    if(q6 === 'true' || q6 === 't')
    {
        console.log("You guessed that right.");
        scoreTracker++;
    }else if(q6 === 'false' || q6 === 'f')
    {
        alert("Unfortunately, I have let people direspect me in the past.");
    }else{
        alert("Incorrect input. Input should be true or false or simply t or f.")
    };
    
    var correctGuess = 26;
    var numAttem = 0;
    
    for(var i = 0; i < 4; i++){
        var q7 = prompt("Guess a number from 0 to 50. You have three attempts to get it right. ");
    
        if(q7 == correctGuess)
        {
            alert("You guessed it right. Congrats !!!");
            numAttem++;
            scoreTracker++;
            break;
        }else if (q7 > correctGuess + 10){ 
            alert("Your guess is a much higher than my number. Guess lower. ");
            numAttem++;
        }else if(q7 > correctGuess + 5 )
        {
            alert("Guess just a bit lower. Your close to my number.");
            numAttem++;
        } else if(q7 < correctGuess - 10)
        {
            alert("You guessed much lower than my number. Guess higher.");
            numAttem++;
        }else if(q7 < correctGuess - 5)
        {
            alert("You guessed just a bit lower than my number, but your close. Guess a bit higer.");
            numAttem++;
        }else{
            alert("Oh, man! Your extremly close. ! ");
            numAttem++;
        };
    }
    
    if(numAttem == 4)
    {
        alert("You have used all three of your chances. The correct answer is: ." + correctGuess);
    }else
    {
        alert("You got it right on the " + numAttem + " attempt.");
    };
    
    var yourAtt ;
    
    for(var yourAtt = 1; i < 6; i++)
    {
        var q8 = prompt("Which of the following states have I visited ? Enter the state name. California, Nevada, Texas, Arizona, Florida, Utah and Montana " );
        var staVis = ["california", "nevada", "texas", "arizona", "florida", "utah", "montana"];
        console.log(staVis[0]);
        console.log(staVis[1]);
    
        if(q8.toLowerCase() === staVis[0] || q8.toLowerCase() === staVis[1] )
        {
            alert("You got that right. ");
            scoreTracker++;
            break;
        }else{
            alert("You got that wrong.")
            yourAtt++;
        }
    }
    
    if(yourAtt == 6)
    {
        alert("You have used all six of your chances. The correct answer is: ." + staVis[0] + " and " + staVis[1]);
    }else
    {
        alert("You got it right on the " + yourAtt + " attempt.");
    };
    
    alert("You scored " + scoreTracker+" out of 8 questions.")

} //end of function 

myQuestions();
