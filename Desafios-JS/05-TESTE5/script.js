function calcular(){
    var prod = prompt("Que produto você está comprando?")
    var prec = Number(prompt(`Quanto custa o ${prod} que você está comprando?`))
    var val = Number(prompt(`Qual foi o valor que deu para pagar o ${prod}?`)) 
if(prec > val){
    alert("Impossivel, o produto é mais caro!")
}else{
    alert(`Você comprou ${prod} que custou R$${prec},00.
    Deu R$${val},00 em dinheiro e vai receber R$${val-prec},00 de troco.
    Volte sempre! `)
}

}