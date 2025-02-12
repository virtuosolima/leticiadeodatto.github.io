function insertDisplay(data) {
  document.querySelector('#display').value += data;
}

function cleanDisplay() {
  document.querySelector('#display').value = '';
}

function backspace() {
  const display = document.querySelector('#display');
  display.value = display.value.slice(0, -1);
}

function resultado() {
  const display = document.querySelector('#display');
  try {
    // Use a expressão regular para garantir que apenas números e operadores válidos sejam avaliados.
    const expression = display.value.replace(/[^\d+\-*/().]/g, '');
    display.value = Function('return ' + expression)(); // Substituindo eval por Function()
  } catch (error) {
    display.value = 'Erro';
  }
}
