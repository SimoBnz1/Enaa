let playrs = "X";
let tabgame = ["","","","","","","","",""];

let stategame =true ;


let messg = document.getElementById('message');

let cases = document.querySelectorAll('.btn');

    cases.forEach((c,index) => {
    
    c.addEventListener("click",()=> {
        if (!stategame) return;
 
        if(playrs==="X"){
            tabgame[index]=playrs;
           ;
            c.innerHTML="X";
            playrs="O";
            messg.innerHTML = "Tour de joueur " + playrs
            c.disabled =true;
            

        }else{
            tabgame[index]=playrs;
            
            c.innerHTML="O"
            playrs="X"
            messg.innerHTML = "Tour de joueur " + playrs;
            c.disabled=true;
            
            
        }
        if(tabgame[0]!=="" && tabgame[0]===tabgame[1]&&tabgame[1]===tabgame[2]  ){
        messg.innerHTML=`le joueur ${tabgame[2]} a gagné 🎉`;
        cases[0].style.backgroundColor = "lightgreen";
        cases[1].style.backgroundColor = "lightgreen";
        cases[2].style.backgroundColor = "lightgreen";

        stategame =false
        
        }
        else if(tabgame[3]!=="" && tabgame[3]===tabgame[4]&&tabgame[3]===tabgame[5] ){
           messg.innerHTML=`le joueur ${tabgame[3]} a gagné 🎉`;
           cases[3].style.backgroundColor = "lightgreen";
           cases[4].style.backgroundColor = "lightgreen";
           cases[5].style.backgroundColor = "lightgreen";
           stategame =false
        }
        else if(tabgame[6]!=="" && tabgame[6]===tabgame[7]&&tabgame[7]===tabgame[8] ){
           messg.innerHTML=`le joueur ${tabgame[6]} a gagné 🎉`;
           cases[6].style.backgroundColor = "lightgreen";
           cases[7].style.backgroundColor = "lightgreen";
           cases[8].style.backgroundColor = "lightgreen";
           stategame =false
           
        }



        else if(tabgame[0]!=="" && tabgame[0]===tabgame[3]&&tabgame[3]===tabgame[6] ){
           messg.innerHTML=`le joueur ${tabgame[0]} a gagné 🎉`;
           cases[0].style.backgroundColor = "lightgreen";
           cases[3].style.backgroundColor = "lightgreen";
           cases[6].style.backgroundColor = "lightgreen";
           stategame =false
           
        }
        else if(tabgame[1]!=="" && tabgame[1]===tabgame[4]&&tabgame[4]===tabgame[7] ){
           messg.innerHTML=`le joueur ${tabgame[1]} a gagné 🎉`;
           cases[1].style.backgroundColor = "lightgreen";
           cases[4].style.backgroundColor = "lightgreen";
           cases[7].style.backgroundColor = "lightgreen";
           stategame =false
           
        }
        else if(tabgame[2]!=="" && tabgame[2]===tabgame[5]&&tabgame[5]===tabgame[8] ){
           messg.innerHTML=`Le joueur ${tabgame[2]} a gagné 🎉`;  
           cases[2].style.backgroundColor = "lightgreen";
           cases[5].style.backgroundColor = "lightgreen";
           cases[8].style.backgroundColor = "lightgreen";
           stategame =false 

           
        }



        else if(tabgame[0]!=="" && tabgame[0]===tabgame[4]&&tabgame[4]===tabgame[8] ){
           messg.innerHTML=`le joueur ${tabgame[0]} a gagné 🎉`;
           cases[0].style.backgroundColor = "lightgreen";
           cases[4].style.backgroundColor = "lightgreen";
           cases[8].style.backgroundColor = "lightgreen";
           stategame =false
           
        }
        else if(tabgame[2]!=="" && tabgame[2]===tabgame[4]&&tabgame[4]===tabgame[6] ){
           messg.innerHTML=`le joueur ${tabgame[2]} a gagné 🎉`;
           cases[2].style.backgroundColor = "lightgreen";
           cases[4].style.backgroundColor = "lightgreen";
           cases[6].style.backgroundColor = "lightgreen";
           stategame =false
           
        }

      

        else if (!tabgame.includes("")&&stategame===true){
             messg.innerHTML= "Égalité Teadlna a Khoya 🤝";
             stategame=false
        }


        if (tabgame[index]==="X"){
            c.style.color="blue";
        }else{
            c.style.color="red"
        };
        


        
    }


    )
     
   
    
});


let rest = document.getElementById('rest')
rest.addEventListener("click",()=>{
    tabgame = ["","","","","","","","",""];
    playrs = "X";
    stategame = true;
    messg.innerHTML = "Tour de joueur X";
    cases.forEach(c=>{
         c.innerHTML="",
        playrs="X",
        c.disabled=false,
        c.style.color="",
        c.style.backgroundColor=""
    }
    
    )




})

console.log(`this is type  of array `.typeof(Array))