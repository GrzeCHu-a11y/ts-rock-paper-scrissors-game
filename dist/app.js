const items = document.querySelectorAll(".item");
const options = ["scissors", "paper", "rock"];
const getPlayerChoice = (e) => {
    const id = e.target.id;
    computerChoice();
};
const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    console.log(options[randomIndex]);
};
items.forEach((item) => item.addEventListener("click", getPlayerChoice));
