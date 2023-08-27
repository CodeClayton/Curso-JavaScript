let valores = [8,9,6,3,5,1,7]
/*for(let pos =0; pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for(let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontado')
}else{
console.log(`O valor 8 esta na posição ${pos}`)
}