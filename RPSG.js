// To Access all the Choices
let choices = document.querySelectorAll(".choice");

// To Access both User's and Computer's score
let user_Score = document.querySelector("#user_score");
let computer_Score = document.querySelector("#computer_score");

// To Access Message to be Displayed
let message = document.querySelector("#message");

// For all Sounds
const userClickSound = new Audio("user_click_sound.wav");
const userWinSound = new Audio("user_win.wav");

// Set both User's and Computer's score to 0
let userScore = 0;
let computerScore = 0;

// Function to be executed when a choice is selected each time
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        
        // To Access User's Choice
        let userChoice = choice.getAttribute("id");
        console.log(`You chose ${choice.getAttribute("id")}`);
        userClickSound.play();

        
        // To Access Computer's Choice
        let choices_array = ["rock","paper","scissors"];
        let choice_array_index = Math.floor(Math.random()*3);
        let computerChoice = choices_array[choice_array_index];
        console.log(`Computer chose ${computerChoice}`);

        choices.forEach((choice)=>{
            choice.style.opacity = "100%";
            choice.style.border = "0px";
        });
        choices[choice_array_index].style.opacity = "60%";
        choices[choice_array_index].style.border = "5px solid black";
        
        // To comapare User's Choice and Computer's Choice and to decide Scores
        
        // In Case of Draw
        if(userChoice === computerChoice){
            console.log("It's a DRAW");
            message.innerText = `It's a DRAW because computer chose ${computerChoice}`;
            message.style.backgroundColor = "black";
        }
        else{
            let userWin = true;
            // If User chooses Rock
            if(userChoice === "rock"){
                userWin = computerChoice === "scissors"? true : false;
            }
            // If User chooses Paper
            else if(userChoice === "paper"){
                userWin = computerChoice === "rock"? true : false;
            }
            // If User chooses Scissors
            else if(userChoice === "scissors"){
                userWin = computerChoice === "paper"? true : false;
            }
            
            // If User Wins
            if(userWin == true){
                console.log("You WON");
                userScore++;
                computer_Score.classList.remove('computer_score_zoom');
                user_Score.classList.add('user_score_zoom');
                userWinSound.play();
                user_Score.innerText = userScore;
                console.log(userScore);
                message.innerText = `You Won beause Computer chose ${computerChoice}`;
                message.style.backgroundColor = "green";
            }
            
            // If User Loses
            if(userWin == false){
                console.log("You LOST");
                computerScore++;
                user_Score.classList.remove('user_score_zoom');
                computer_Score.classList.add('computer_score_zoom');
                computer_Score.innerText = computerScore;
                console.log(computerScore);
                message.innerText = `You Lost because Computer chose ${computerChoice}`;
                message.style.backgroundColor = "red";
            }
        }
    });
});