function questao1(){
    var palavra1 = "Aprendendo ";
    var palavras = "strings em JavaScript";
    let resultado = palavra1.concat(palavras);
    console.log(resultado);
  }
  
  function questao2(){
    let palavra1 = "palavra1";
    let palavra2 = "palavra2";
    let palavra3 = "palavra3";
    var frase1 = "Esta é a frase com a ";
    var frase2 = "Esta é a frase com a ";
    var frase3 = "Esta é a frase com a ";
    let str1 = frase1.concat(palavra1);
    console.log(str1);
    let str2 = frase2.concat(palavra2);
    console.log(str2);
    let str3 = frase3.concat(palavra3);
    console.log(str3);
  }
  
  function questao3(){
    let vetor = ["a", "b", "a", "a", "c", "b"];
    vetor.sort();
    console.log(vetor);
    console.log(vetor.reverse());
  }