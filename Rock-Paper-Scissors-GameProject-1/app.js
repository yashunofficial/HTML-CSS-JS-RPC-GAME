let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")

const genCompChoice =()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random() * 3);
    return options[randomidx];
};

const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was Drawn. Play Again!"
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log(`You win. Your ${userChoice} beats ${compChoice}`);
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText=`You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const PlayGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    //generate camputer choice
    const compChoice= genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            compChoice==="paper"? false: true;
        }else if(userChoice ==="paper"){
        userWin =  compChoice==="scissors"? false: true;
    
        }else{
        userWin=compChoice==="rock"?false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        
        const userChoice=choice.getAttribute("id");
       // console.log("choice was click",userChoice);
        PlayGame(userChoice);
    })
})