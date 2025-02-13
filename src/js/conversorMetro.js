// Seleção dos elementos
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

// Função para alternar entre as opções de conversão
p1.onchange = function() {
  if (p1.value == "Metro") {
    p2.value = "Centímetro";
  } else {
    p2.value = "Metro";
  }
};

p2.onchange = function() {
  if (p2.value == "Centímetro") {
    p1.value = "Metro";
  } else {
    p1.value = "Centímetro";
  }
};

// Função para realizar a conversão
function gerar() {
  const txt1 = document.querySelector('input#pequena');
  const conversoJanela = document.querySelector('h1#conversoJanela');
  
  const tx = parseFloat(txt1.value);
  if (isNaN(tx)) {
    conversoJanela.innerHTML = "<strong>Por favor, insira um número válido.</strong>";
    return;
  }

  let resultado;
  if (p1.value == "Metro") {
    resultado = tx * 100;
    conversoJanela.innerHTML = `<strong>${tx} m = ${resultado.toFixed(2)} cm</strong>`;
  } else {
    resultado = tx / 100;
    conversoJanela.innerHTML = `<strong>${tx} cm = ${resultado.toFixed(2)} m</strong>`;
  }
}