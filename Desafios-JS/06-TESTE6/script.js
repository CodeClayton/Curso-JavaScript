function converter(){
   var res = document.querySelector("div#res")
    var dis = prompt("Digite a distância em metros (m)")
    var num = dis
    res.innerHTML=`<p><h1>A distância de ${num} metros, corresponde a...</p>`
    res.innerHTML += `${num/1000} quilômetros (Km) <br>`
    res.innerHTML += `<p> ${num/100} hectômetros (Hm)<br>`
    res.innerHTML += `<p> ${num*10} decâmetros (Dam)<br>`
    res.innerHTML += `<p> ${num*10} decimetros (dm)<br>`
    res.innerHTML += ` ${num*100} centimetros (cm)<br>`
    res.innerHTML += `<p> ${num*1000} milímetros (mm)`
}