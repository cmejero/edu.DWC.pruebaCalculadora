function calcular(){
    const n1 = document.getElementById('n1').Value;
    console.log(n1)
    let n2 = document.getElementById('n2').Value;
    console.log(n2)
    const operando = document.getElementById('operando').Value;
    console.log(operando)
    const calculo = eval(n1 + operando + n2);
    console.log(typeof calculo)
    document.querySelector('#resultado').innerHTML= "<b>" + calculo + "</b>";
}