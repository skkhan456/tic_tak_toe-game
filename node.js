let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".para");
let newgam=document.querySelector(".msg");
let reset=document.querySelector(".reset");
let msg_container=document.querySelector(".msg-container");

let count=0;
// create array for winning cases
const winnerarr=[[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

let turnO=true;

const gamedraw=()=>{
    msg.innerHTML="Game Draw";
    msg_container.classList.remove("hide");
    
}

// traverse boxes and add event listner to each box
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }

        box.disabled=true;  // os box pe dubara click karne pe kuch nhi hoga vo block state me h 
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});

// disabling the all button after getting winner of game 
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let showwinner=(winner)=>{
    msg.innerHTML=`Congratulation, winner is ${winner}`;
    msg_container.classList.remove("hide");
}


let checkwinner=()=>{
    for(let pattern of winnerarr){
        // store indexes of boxes 
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML; 
        // pattern[i] store index of winner sequence

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log('winner ' + pos1val);
                disableboxes();
                showwinner(pos1val);
            }
        }
        
    }
}

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

// adding functionality to new game start button
const newgame=()=>{
    turnO=true;
    enabledboxes();
    msg_container.classList.add("hide"); // dubara hide add kro
}

const resetgame=()=>{
    turnO=true;
    enabledboxes();
    msg_container.classList.add("hide"); // dubara hide add kro
}






newgam.addEventListener('click',newgame);
reset.addEventListener('click',resetgame);