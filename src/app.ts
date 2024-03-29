const items: NodeList = document.querySelectorAll(".item");
const statsContainer: HTMLElement = document.querySelector(".stats-container");
const h3PlayerChosenItem: HTMLElement = document.querySelector(".player-chosen-item");
const h3ComputerChosenItem: HTMLElement = document.querySelector(".computer-chosen-item");
const h2Status: HTMLElement = document.querySelector(".status-h2");
const statusContainer: HTMLElement = document.querySelector(".status");
const playerResultH4: HTMLElement = document.querySelector(".player-result-h4");
const computerResultH4: HTMLElement = document.querySelector(".computer-result-h4");

const options: string[] = ["scissors", "paper", "rock"];

let playerWins: number = 0;
let computerWins: number = 0;

const getPlayerChoice = (e: MouseEvent) => {
    const playerItem: string | null = (e.target as HTMLElement).id
    computerChoice(playerItem)
}

const computerChoice = (playerItem: string) => {
    const randomIndex: number = Math.floor(Math.random() * 3)
    const computerItem = options[randomIndex];
    checkWinner(computerItem, playerItem)
}

const checkWinner = (computerItem: string, playerItem: string) => {

    let status: string = "";

    if (playerItem === computerItem) {
        status = "Draw";
    } else if (playerItem === "scissors" && computerItem === "rock" || playerItem === "paper" && computerItem === "scissors" || playerItem === "rock" && computerItem === "paper") {
        status = "Computer win";
        computerWins++
    } else {
        status = "You win";
        playerWins++
    }

    render(playerItem, computerItem, status)
}

const render = (playerItem: string, computerItem: string, status: string | null) => {
    h3PlayerChosenItem.innerText = `You hose: ${playerItem}` 
    h3ComputerChosenItem.innerText = `Computer hose: ${computerItem}` 

    playerResultH4.innerText = `You: ${playerWins}`
    computerResultH4.innerText = `Computer: ${computerWins}`

    h2Status.innerText = status;
    
    if (status === "You win") {
        statusContainer.style.backgroundColor = "#36F356";
        
    } else if (status === "Computer win") {
        statusContainer.style.backgroundColor = "#F3363C";
    } else if (status === "Draw") {
        statusContainer.style.backgroundColor = "#C7C5C5"; 
    }
}

items.forEach((item) => item.addEventListener("click", getPlayerChoice))