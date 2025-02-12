// Adiciona funcionalidade para alternar as opções de conversão
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

p1.onchange = function() {
  if (p1.value == "Estados Unidos, Dollar (USD)") {
    p2.value = "Brasil, Real (BRL)";
  } else {
    p2.value = "Estados Unidos, Dollar (USD)";
  }
};

p2.onchange = function() {
  if (p2.value == "Brasil, Real (BRL)") {
    p1.value = "Estados Unidos, Dollar (USD)";
  } else {
    p1.value = "Brasil, Real (BRL)";
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
  if (p1.value == "Estados Unidos, Dollar (USD)") {
    resultado = tx * 5.52;
    conversoJanela.innerHTML = `<strong>${tx} USD = ${resultado.toFixed(2)} BRL</strong>`;
  } else {
    resultado = tx * 0.18;
    conversoJanela.innerHTML = `<strong>${tx} BRL = ${resultado.toFixed(2)} USD</strong>`;
  }
}
