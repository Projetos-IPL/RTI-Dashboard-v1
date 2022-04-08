import { movimentoTableRow } from "../elements/movimentoTableRow.js";

/**
 * Esta função insere os dados de movimentos na tabela de movimentos.
 * @param movimentosList Array de movimentos
 */
function populateTable(movimentosList) {
  if (!(movimentosList instanceof Array)) {
    return;
  }

  // ordena a lista de movimentos (mais recente para mais antigo)
  movimentosList.sort((a, b) => {
    return b.timestamp * 1000 - a.timestamp * 1000;
  });

  for (let i = 0; i < movimentosList.length; i++) {
    let tbody = document.querySelector("#table-movimentos");
    const movimentosTR = movimentoTableRow(movimentosList[i]);
    tbody.appendChild(movimentosTR);
  }
}

export default populateTable;
