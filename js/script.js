function calcularPorcentagem() {
  let porcentagem = parseFloat(document.getElementById('porcentagem').value);
  let valor = parseFloat(document.getElementById('valor').value);

  if(isNaN(porcentagem) || isNaN(valor) || porcentagem === 0 || valor ===0 ){
    alert('Por favor, preencha todos os campos corretamente!');
    return;
  }

  let resultado = (porcentagem / 100) * valor;

  document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(2)}`;  
  document.getElementById("calcular").style.display = "none";
  document.getElementById("resetar").style.display = "inline-block";
}

function resetarCampos() {
    document.getElementById('porcentagem').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('resetar').style.display = "none";
    document.getElementById('calcular').style.display = "inline-block";
}