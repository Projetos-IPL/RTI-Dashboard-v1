function noMovimentosAvailableRow() {
  const errorTr = document.createElement("tr");
  const errorTd = document.createElement("td");
  errorTd.colSpan = 4;

  errorTr.appendChild(errorTd);
  errorTd.innerText = "Sem movimentos registados!";

  return errorTr;
}

export default noMovimentosAvailableRow;
