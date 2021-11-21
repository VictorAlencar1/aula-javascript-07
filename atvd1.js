function questao1(){
    var cidades = ["Recife", "Olinda", "Jaboatão", "Caruaru", "Paulista", "Camaragibe", "Piedade"];
    console.log(cidades.reverse());
    cidades.splice(3, 1, "Petrolina", "Gravatá");
    console.log(cidades)
  }
  
  function questao2(){
    var num = [1,4,8,6,9,2,6,7,3,0,5];
    let index = num.indexOf(9);
    console.log(index)
    let posicao = num.slice(4);
    console.log(posicao);
  }