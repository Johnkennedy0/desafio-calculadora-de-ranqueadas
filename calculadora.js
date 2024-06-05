function saldo(vitoria, derrota){
    return vitoria - derrota
}
let resul = saldo(106, 5)
let elo = ""

if(resul <= 10){
    elo = " Ferro"
}else if(resul > 11 && resul <= 20){
    elo = " Bronze"
}else if(resul > 20 && resul <= 50){
    elo =  " Prata"
}else if(resul > 50 && resul <= 80){
    elo = " Ouro"
}else if(resul > 80 && resul <= 90){
    elo = " Diamante"
}else if(resul > 90 && resul <= 100){
    elo = " Lendário"
}else if (resul >= 100){
    elo = " Imortal"
}
    
console.log("O Herói de saldo " + resul + " está no elo " + elo)
