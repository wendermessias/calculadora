let resultado = document.getElementById("resultado");

function insert(num) {
  resultado.innerHTML += num;
}

function clean() {
  resultado.innerHTML = "";
}

function back() {
  resultado.innerHTML = resultado.innerHTML.substring(
    0,
    resultado.innerHTML.length - 1
  );
}

function calcular() {
  if (resultado) {
    const total = eval(resultado.innerHTML);
    resultado.innerHTML = total;
  }
}
