var idade = 46
console.log (`Você te ${idade} anos.`)
if(idade < 16){
    console.log('Não vota')
} else {
    if(idade < 18 || idade > 65 ){
        console.log('Voto opcional')
}else
console.log('Voto obrigatorio')
}