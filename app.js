let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let winnerText = document.querySelector("#winner-text");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0) {
            box.innerText = "X";
            turn0 = false;
        }
        else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const resetgame = () => {
    turn0 = true;
    enableboxes();
}
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
}
const showWinner = (winner) => {
    winnerText.innerText = "Congratulations " + winner + " is the winner";
    msgContainer.classList.remove("hide");
}
const checkwinner = () => {
for(let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" &&  pos2 != "" && pos3 != "") {
        if(pos1 === pos2 && pos2 === pos3) {
            console.log(pos1 + " " + "is the winner");
            disableboxes();
            showWinner(pos1);
        }
    }
}
}
resetBtn.addEventListener("click", resetgame);
newBtn.addEventListener("click", resetgame);