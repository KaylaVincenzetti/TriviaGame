var questions = [
    {
        questions: "What is the most spoken language in the world?",
        answerChoices: ["english", "spanish", "chinese"],
        correctAnswer: "chinese"
    },
    {
        questions: "Which chart-topping songstress lent her voice to Smurfette in 2011's The Smurfs movie?",
        answerChoices: ["katy perry", "selena gomez", "lady gaga"],
        correctAnswer: "katy perry"
    },
    {
        questions: "Questions Which U.S. state has the longest coastline?",
        answerChoices: ["california", "alaska", "texas"],
        correctAnswer: "alaska"
    },
    {
        questions: "With over 35 million residents, what is the most populous city in the world?",
        answerChoices: ["tokyo", "mumbai", "shanghai"],
        correctAnswer: "tokyo"
    },
    {
        questions: "Who is the pre-Civil War author of a short story about a beating heart beneath the floorboards?",
        answerChoices: ["Herman Melville", "Walt Whitman", "Edgar Allan Poe"],
        correctAnswer: "Edgar Allan Poe"
    }
];


/* I don't understand what's going on in this loop at all and cannot get anything to work. I followed the example my tutor gave me and can
only get the radio buttons for the answers to load on the html. I don't know enough JavaScript/Jquery to code this game and I can't look at 
examples of code and write my code based off that example. */
for (var i = 0; i < questions.length; i++) {
    var p = $("p");
    p.text(questions[i].question);
    for (var j = 0; j < questions[i].answerChoices.length; j++) {
        p.append("<input type='radio' name='question-" + i + "'value='" + questions[i].answerChoices[j] + "''>" + questions[i].answerChoices[j])
    }
}