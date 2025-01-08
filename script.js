let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let turnO = true;
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawContainer = document.querySelector(".draw-container");
let drawGametext = document.querySelector("#draw");
let drawBtn = document.querySelector("#draw-btn");
let turn = document.querySelector("#turn");
let all = document.querySelector(".all");
let audio = document.querySelector("#ting");
let backgroundAudio = document.querySelector("#music");
let gameOver = document.querySelector("#gameover");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            turn.innerText = "Turn of X";
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
            box.style.color = "#00ff99";
            turn.innerText = "Turn of O";
        }
        box.disabled = true;
        checkWinner();
    });
});
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        audio.play();
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                box.disabled = true;
            }
        }
    }
}


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


showWinner = (pos1val) => {
    gameOver.play();
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations!, Winner is ${pos1val}`;
    msg.style.fontSize = "32px";
    all.classList.add("hide");
    disableBoxes();
    resetGameall();
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    all.classList.remove("hide");
};





resetGameall = () => { newgameBtn.addEventListener("click", resetGame);};
resetBtn.addEventListener("click", resetGame);