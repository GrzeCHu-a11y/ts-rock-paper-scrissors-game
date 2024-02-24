const items: NodeList = document.querySelectorAll(".item");
const statsContainer: HTMLElement = document.querySelector(".stats-container");
const h3PlayerChosenItem: HTMLElement = document.querySelector(".player-chosen-item");
const h3ComputerChosenItem: HTMLElement = document.querySelector(".computer-chosen-item");
const h2Status: HTMLElement = document.querySelector(".status-h2");

const options: string[] = ["scissors", "paper", "rock"];

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
    } else {
        status = "You win";
    }

    render(playerItem, computerItem, status)
}

const render = (playerItem: string, computerItem: string, status: string | null) => {
    h3PlayerChosenItem.innerText = `You hose: ${playerItem}` 
    h3ComputerChosenItem.innerText = `Computer hose: ${computerItem}` 
    h2Status.innerText = status;
}

items.forEach((item) => item.addEventListener("click", getPlayerChoice))