let boxes = document.querySelectorAll(".box");
let restartbtn = document.querySelector("#restartbutton");
let turn0 = true;
let output = document.querySelector("#output")
const winningpattren = [
  [0 , 1 , 2],
  [0 , 3 , 6],
  [0 , 4 , 8],
  [1 , 4 , 7],
  [2 , 5 , 8],
  [2 , 4 , 6],
  [3 , 4 , 5],
  [6 , 7 , 8]
];
boxes.forEach((e) => {
  e.addEventListener("click" , () => {
    if(turn0){
      e.innerText = "O";
      turn0 = false;
    }else {
      e.innerText = "X";
      turn0 = true;
    }
     e.disabled = true;
     checkwinner()
  })
})
function checkwinner(){
  for(pattern of winningpattren){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 === pos2 && pos2 === pos3){
        output.innerText = `WINNER , ${pos1}`
        boxes.forEach((e) => {
          e.disabled = true;
        })
      }
    }
  }
}
restartbtn.addEventListener("click" , () => {
  boxes.forEach((e) => {
    e.innerText = "";
    e.disabled = false;
    output.innerText = "";
  })
})