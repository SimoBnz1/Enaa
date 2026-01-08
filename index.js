let prompt =require("prompt-sync")();




let Taches =[];
let isDone =false;
let id =1 ;

function AddTach(){

    
    let disc=prompt("Description de Tach :");
    let TisDone=prompt("Is done or not - Y/N :");
    
    if (TisDone==="Y") {
        isDone=true 
    }else{
        isDone=false 
    }

    let tache={
        id:id,
        discrption:disc,
        isDone:isDone

    }
    Taches.push(tache)
    id++
}
function ModifieTach(id2){
    let idM=Number(id2);
    let ta = Taches.find(t=>t.id===idM);
    

    let NouvDisc= prompt("Donner Nouvelle description :");
    
    if (ta) {
        ta.discrption=NouvDisc;
    }else{  
        console.log("this tach not in Liste");
    }
}


function RecherchTach (id1){
    let idT =Number(id1);
    let ta = Taches.find(t=>t.id===idT);
    if (ta) {
        console.table(ta);
    }else{  
        console.log("this tach not in Liste");
    }
}

function SupprTa(id3){
    let idS=Number(id3);
    let ta=Taches.filter(t=>t.id!==idS)
    if(ta){
        Taches=ta;
        console.log("Tach est suprrime");
        
    }else{
        console.log("this tach not in Liste");

    }
   


}


function changeStat(id4){
    let idC = Number(id4);
    let ta = Taches.find(t=>t.id===idC);
    let TisDone=prompt("Is done or not - Y/N :");
    
    if (TisDone==="Y") {
        ta.isDone=true 
    }else{
        ta.isDone=false 
    }
}


while (true) {
    
    
    console.log("0->Pour Quite :\n 1-> Affiher les taches :\n 2->Ajouter une tache :\n 3-> Rechercher une tâche \n 4-> Modifier une tâche \n 5->Supprimer une tâche \n 6-> Changer le statut d'une tâche"); 
    let choi=Number(prompt("choisis une taches :"));
    

    if (choi ===0) {
    break; 
    }

    switch(choi){
    
        case 1:
            console.log("liste des taches :");
            console.table(Taches);
            break;
        case 2:
            AddTach();
            break;
        case 3:
            let id =Number(prompt("donner L'id de la Tache : "))
            RecherchTach(id);
            break;
        case 4:
            let idM =Number(prompt("donner L'id de la Tache : "))
            ModifieTach(idM)
            break;
        case 5:
            let idS =Number(prompt("donner L'id de la Tache : "))
            SupprTa(idS)
            break;
        case 6:
            let idST=Number(prompt("donner L'id de la Tache : "))
            changeStat(idST)
            break

            }
        

        
    

}






