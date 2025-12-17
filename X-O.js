let playrs = "X";
let tabgame = ["","","","","","","","",""];
let stategame =true ;



let messg = document.getElementById('message');

let cases = document.querySelectorAll('.btn');

cases.forEach((c,index) => {
    
    c.addEventListener("click",()=> {
        if(playrs==="X"){
            tabgame[index]=playrs;
            c.innerHTML="X";
            playrs="O";
            c.disabled =true;
            

        }else{
            tabgame[index]=playrs;
            c.innerHTML="O"
            playrs="X"
            c.disabled=true;
            
            
        }
    }


    )
    if(tabgame[0]!==0 && tabgame[0]===tabgame[1]===tabgame[2] ){
        messg.innerHTML="vous est ganne";
        stategame =false
    }
    
});

let rest = document.getElementById('rest')