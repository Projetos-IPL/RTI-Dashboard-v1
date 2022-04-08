import { historicoTableRow } from "../elements/historicoTableRow.js";

/**
 * Esta função insere os dados de históricos na tabela de históricos.
 * @param hsitoricosList Array de históricos
 */
function populateTable(hsitoricosList) {
  if (!(hsitoricosList instanceof Array)) {
    return;
  }

  // ordena a lista de históricos (mais recente para mais antigo)
  hsitoricosList.sort((a, b) => {
    return b.timestamp * 1000 - a.timestamp * 1000;
  });

  for (let i = 0; i < hsitoricosList.length; i++) {
    let tbody = document.querySelector("#table-historico");
    const historicoTR = historicoTableRow(hsitoricosList[i]);
    tbody.appendChild(historicoTR);
  }
}

export default populateTable;
