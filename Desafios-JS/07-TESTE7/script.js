function converter(){
   var res = document.querySelector("div#res")
    var dis = Number(prompt("Digite um temperatura em ºC (Celsius)"))
    var num = dis
    var fah = num*1.8+32
    var kelv = 273.15+num
    //.toFixed limita as casas decimais
    var kel = kelv.toFixed(2)
    res.innerHTML=`<p><h1>A temperatura de ${num}ºC, corresponde a...</p>`
    res.innerHTML += `${fah}°F (Fahrenheit) <br>`
    res.innerHTML += `<p> ${kel}ºK (Kelvin) <br>`
    
}