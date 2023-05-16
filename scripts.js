function calculateIndex() {
  const numApplicants = parseFloat(document.getElementById("num-aplicants").value);
  const numDesistences = parseFloat(document.getElementById("num-desistences").value);
  const index = (numDesistences / numApplicants) * 100;
  document.getElementById("result").innerHTML = `Índice de desistências do processo seletivo: ${index.toFixed(2)}%`;
}

