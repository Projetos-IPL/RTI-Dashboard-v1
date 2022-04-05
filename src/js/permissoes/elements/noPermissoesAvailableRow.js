function noPermissoesAvailableRow() {
  const errorTr = document.createElement("tr");
  const errorTd = document.createElement("td");
  errorTd.colSpan = 3;

  errorTr.appendChild(errorTd);
  errorTd.innerText = "Sem permissões registadas!";

  return errorTr;
}

export default noPermissoesAvailableRow;
