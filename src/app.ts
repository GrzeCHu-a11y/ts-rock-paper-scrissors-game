const items: NodeList = document.querySelectorAll(".item");

const options: string[] = ["scissors", "paper", "rock"];

const getPlayerChoice = (e: MouseEvent) => {
    const id: string | null = (e.target as HTMLElement).id
    computerChoice()
}

const computerChoice = () => {
    const randomIndex: number = Math.floor(Math.random() * 3)
    console.log(options[randomIndex])
}


items.forEach((item) => item.addEventListener("click", getPlayerChoice))