function reajuste(){
    var res = document.getElementById("res")
    var nome = prompt("Qual é o nome do funcionario?")
    var sal = Number(prompt(`Qual é o salário de ${nome} ?`).replace(",","."))
    var des = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`).replace("%"," "))
    var totdes = des*sal/100
    var tot = totdes + sal
    tot = tot.toLocaleString('pt-BR')
    sal = sal.toLocaleString('pt-BR')
    totdes = totdes.toLocaleString('pt-BR')
    
    res.innerHTML += `<p> O salário atual era R$${sal}. `
    res.innerHTML += `<p> Com um aumento de ${des}%, o salário vai aumentar R$${totdes} no próximo mês`
    res.innerHTML += `<p> E a partir daí, <strong>${nome}</strong> vai passar a ganhar <strong>R$${tot}</strong> . `

}