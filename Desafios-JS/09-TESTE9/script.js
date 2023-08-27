function desconto(){
    var prod = prompt("Qual é o produto que você esta comprando?")
    var val = Number(prompt(`Qual é o preço do ${prod} ?`))
    var des = val*0.10
    var tot = val - des 
    var res = document.getElementById('res')
    res.innerHTML = `<h1> Calculando desconto dfe 10% para ${prod}`
    res.innerHTML += `<p>O preço original era R$${val}.`
    res.innerHTML += `<p> Você acaba de ganhar R$${des.toFixed(2)} de desconto (10%)`
    res.innerHTML += `No fim, você vai pagar R$${tot.toFixed(2)} no produto ${prod}. `
}