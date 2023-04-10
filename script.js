//alert simples

alert("olá Mundo") 


//alert de confirmação
let msg=confirm("você é um aluno ?")

//alert passando valores em campos

let msg1= prompt("digite seu nome")
document.write("meu nome é: ",msg1, "!")
document.write("<br>")
document.write("teste <br>")

//condição if



if(10>7){
     document.write("dez é maior que 7")
}


let valor=20 

if(valor>10){
     document.write("<br>")
     document.write("o ", valor, " é menor que 10")

}else{
     document.write/("<br>")
     document.write("O valor é menor")
}

//estrutura capaz de classificar um individuo com base em sua idade


document.write("<br>")

let idade= prompt("Digite sua idade: ")

if(idade<= 12){
     document.write(" É uma criança")
}else if (idade <= 17){
     document.write(" É um adolescente")
}else if (idade <= 29){
     document.write(" É um jovem")
}else{
     document.write(" É um adulto")
}

document.write("<br>")

let numero=prompt("digite um valor: ")

if(numero > 10){
     document.write("é maior")
}else if (numero == 10){
     document.write("é igual")
}else{
     document.write("é menor")
}

//&&, ||,

//adicionando a estrutura de swich semelhante ao matchcase do pyhton

document.write("<br>")

let entrada = parseInt(prompt("Digite uma opção: "))

switch(entrada){
     case 1: 
          document.write("primeira opçao")
          break;
     case 2:
          document.write ("segunda opção")
          break;
     case 2:
          document.write ("terceira opção")
          break;
     case 3:
          document.write ("quarta opção")
          break;
     case 4:
          document.write ("quinta opção")
          break;
     default:
          document.write("nenhuma das opções válidas")
          break;
}



//&&, ||,



for (let i=0; i < 10; i++){
     document.write(i);//  document.write("O Valor i vai até: " , i);
    document.write ("<br>")
}








