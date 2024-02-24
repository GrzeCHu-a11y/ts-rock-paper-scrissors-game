const items: NodeList = document.querySelectorAll(".item");

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
    console.log("computer", computerItem, "player", playerItem)

    if (playerItem === computerItem) {
        console.log("draw")
    } else if (playerItem === "scissors" && computerItem === "rock" || playerItem === "paper" && computerItem === "scissors" || playerItem === "rock" && computerItem === "paper") {
        console.log("player lose")
    } else console.log("player win")
}

items.forEach((item) => item.addEventListener("click", getPlayerChoice))