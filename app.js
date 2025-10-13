let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');

const genComputerChoice = () => {
    const options=['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return options[randomNumber];
}

const drawGame = () => {
    console.log("It's a draw");
    document.getElementById('result-message').innerText = "It's a draw!";
}

const playGame = (userchoiceid) => {
    console.log("user choice =",userchoiceid);
    const computerChoice = genComputerChoice();
    console.log("computer choice =",computerChoice);

    if(userchoiceid === computerChoice){
        drawGame();
    } else {
        let userWin=true;
        if(userchoiceid === 'rock' && computerChoice === 'paper'){

            userWin=false;
        } else if(userchoiceid === 'paper' && computerChoice === 'scissors'){
            userWin=false;
        } else if(userchoiceid === 'scissors' && computerChoice === 'rock'){
            userWin=false;
        }
        if(userWin){
            userScore++;
            console.log("user wins");
            document.getElementById('result-message').innerText = "You win!";
            document.getElementById('player-score').innerText = userScore;
        } else {
            computerScore++;
            console.log("computer wins");
            document.getElementById('result-message').innerText = "Computer wins!";
            document.getElementById('computer-score').innerText = computerScore;
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=> {
    const userchoiceid=choice.getAttribute('id');
        console.log("choice was clicked",userchoiceid);
        playGame(userchoiceid);
    });
});
