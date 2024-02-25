const items = document.querySelectorAll(".item");
const statsContainer = document.querySelector(".stats-container");
const h3PlayerChosenItem = document.querySelector(".player-chosen-item");
const h3ComputerChosenItem = document.querySelector(".computer-chosen-item");
const h2Status = document.querySelector(".status-h2");
const statusContainer = document.querySelector(".status");
const options = ["scissors", "paper", "rock"];
const getPlayerChoice = (e) => {
    const playerItem = e.target.id;
    computerChoice(playerItem);
};
const computerChoice = (playerItem) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerItem = options[randomIndex];
    checkWinner(computerItem, playerItem);
};
const checkWinner = (computerItem, playerItem) => {
    let status = "";
    if (playerItem === computerItem) {
        status = "Draw";
    }
    else if (playerItem === "scissors" && computerItem === "rock" || playerItem === "paper" && computerItem === "scissors" || playerItem === "rock" && computerItem === "paper") {
        status = "Computer win";
    }
    else {
        status = "You win";
    }
    render(playerItem, computerItem, status);
};
const render = (playerItem, computerItem, status) => {
    h3PlayerChosenItem.innerText = `You hose: ${playerItem}`;
    h3ComputerChosenItem.innerText = `Computer hose: ${computerItem}`;
    h2Status.innerText = status;
    if (status === "You win") {
        statusContainer.style.backgroundColor = "#36F356";
    }
    else if (status === "Computer win") {
        statusContainer.style.backgroundColor = "#F3363C";
    }
    else if (status === "Draw") {
        statusContainer.style.backgroundColor = "#C7C5C5";
    }
};
items.forEach((item) => item.addEventListener("click", getPlayerChoice));
