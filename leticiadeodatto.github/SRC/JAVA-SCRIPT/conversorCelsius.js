// Adiciona funcionalidade para alternar as opções de conversão
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

p1.onchange = function() {
  if (p1.value == "Celcius") {
    p2.value = "Fahrenheint";
  } else {
    p2.value = "Celcius";
  }
};

p2.onchange = function() {
  if (p2.value == "Fahrenheint") {
    p1.value = "Celcius";
  } else {
    p1.value = "Fahrenheint";
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
  if (p1.value == "Celcius") {
    resultado = tx * 1.8 + 32;
    conversoJanela.innerHTML = `<strong>${tx} Celcius = ${resultado.toFixed(2)} Fahrenheint</strong>`;
  } else {
    resultado = (tx - 32) / 1.8;
    conversoJanela.innerHTML = `<strong>${tx} Fahrenheint = ${resultado.toFixed(2)} Celcius</strong>`;
  }
}
