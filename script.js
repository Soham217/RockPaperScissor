let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".rock, .paper, .scissor");
let myStatus = document.querySelector(".status");
let userPoints = document.querySelector("#user-points");
let compPoints = document.querySelector("#comp-points");
let val = ["rock","paper","scissor"];

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click" , () =>{
        console.log(choice);
        let choiceId = choice.getAttribute("class");
        console.log(choiceId);
        let compChoice = getChoice();
        console.log(compChoice)
        if(choiceId===compChoice){
            myStatus.innerText = "Choices Drawn!";
        }
        else if((choiceId==="rock" && compChoice==="scissor") || (choiceId==="paper" && compChoice==="stone") || (choiceId==="scissor" && compChoice==="paper")){
            userScore++;
            userPoints.innerText = userScore;
            myStatus.innerText = "You win!";
        }
        else{
            compScore++;
            compPoints.innerText = compScore;
            myStatus.innerText = "Computer Wins!"
        }
    } );
})

const getChoice = () => {
    let ind = Math.floor(Math.random()*3);
    return val[ind];
}