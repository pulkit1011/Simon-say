let gameSeq=[];// array for record the seq of game
let userSeq=[]; // seq of user

let btns =["yellow", "red","purple","green"];// select random button through index

let h2 =document.querySelector("h2");

let started =false;
let level =0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    
    }
});
function btnflase(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250);
}

//.......................Level 2.....................
function levelup(){
    userSeq=[]; // when level is up user seq is empty start from 0
    level++;
    h2.innerText=`Level ${level}`;

      // random btn choose
      let randomIDX = Math.floor(Math.random()*3);//select random index
      let randColor =btns[randomIDX];// select random color through index in array btns
      let randbtn =document.querySelector(`.${randColor}`); // select color through class name .
    //    console.log(randomIDX);
    //    console.log(randColor);
    //    console.log(randbtn);
      gameSeq.push(randColor); // store random color in array
      console.log(gameSeq);

    btnflase(randbtn); // pass this random button in function as an argument
}
//...................Level 3 (ADD event listner).................
function checkAns(idx){
    //    console.log("curr level" , level); //this level is fix
  
    if(userSeq[idx]=== gameSeq[idx]){
        // console.log("same value"); game seq ki middle me hai to koi change nhi jst check
        if(userSeq.length == gameSeq.length){
           setTimeout(levelup(), 1000);
        }
    }else{
        h2.innerHTML= `Game over! Your Score was <b>${level}</b> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn= this;
    btnflase(btn); // user click karega to bhi button flash hoga
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1); // to check the Last button preesed by user right or not

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);

}

// final level  RESET Game //
function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level =0;
}
