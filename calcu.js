let prompt =require("prompt-sync")();


function addition (a,b){
    return a+b ;
};

function subs(a,b){
    return a-b ;
}

function multip(a,b){
    return a*b ;
}

function puissance (a,b){
    return Math.pow(a,b);
}

function factto (a){
    if(a<0){
        console.log("error !!! nombre est negatif");
    }
    let res=1;
    for(i=2;i<=a;i++){
        res*=i
    }
    return res;
}

function div(a,b){
    if(b===0){
        console.log("error!!! nombre negatif");
        return null;
    }
    return a/b ;

}

function racin(a){
    if (a<0){
        console.log("error!!!! nombre negatif");
        return null
    }
    return Math.sqrt(a);

}

let His = [];

function Histoo(a,b,res,oper){
    His.push({
        nombre1 :a,
        nombre2:b,
        operation : oper,
        resultat : res

    })
}


while (true){
    let a =Number(prompt("donner promier nombre :"));
    let b=Number(prompt("donner deuxiem nombre :"));


    let oper = prompt("Operation (+,-,*,/,^,√,!, 0 pour quitter) : ");
    if (oper==="0"){
        console.log("Fin !!!");
        break
    }

    switch (oper){
        case "+":
            res = addition(a,b);
            break;
        case "-":
             res =subs (a,b);
            break;

        case "*":
            res = multip(a,b);

            break;
        case "/":
            res = div(a,b);
            break;
        case "^":
            res = factto (a);
            break;
        case "√":
            res=racin(a);
            break;

        case "!":
            res = puissance(a,b);
            break;
        default:
            console.log("error !!!");
            continue
     
    }
    console.log("Resultat est :",res);
    Histoo(a,b,res,oper);

    let AffichHis =prompt("Afficher Historique O/N :");
    if (AffichHis==="O"){
        console.log(His);

    }
    

}



