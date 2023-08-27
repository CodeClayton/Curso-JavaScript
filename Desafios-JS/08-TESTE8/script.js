function converter(){
    var dol = Number(prompt("Antes de mais nada, quanto está valendo o dolar hoje?"))
    var din = Number(prompt("Quantos R$ você tem em sua carteira?"))
    var res = document.getElementById('res')
    var s = din/dol
    res.innerHTML = `<p><h2>Você tem em sua carteira US$${s.toFixed(2)} dollares!</h2>`



}