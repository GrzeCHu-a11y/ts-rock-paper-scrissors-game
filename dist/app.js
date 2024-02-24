const items = document.querySelectorAll(".item");
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
    console.log("computer", computerItem, "player", playerItem);
    if (playerItem === computerItem) {
        console.log("draw");
    }
    else if (playerItem === "scissors" && computerItem === "rock" || playerItem === "paper" && computerItem === "scissors" || playerItem === "rock" && computerItem === "paper") {
        console.log("player lose");
    }
    else
        console.log("player win");
};
items.forEach((item) => item.addEventListener("click", getPlayerChoice));
