import { permissoesTableRow } from "../elements/permissoesTableRow.js";

/**
 * Esta função insere os dados de permiss~ies na tabela de permissões.
 * @param permissoesList Array de permissões
 */
function populateTable(permissoesList) {
  if (!(permissoesList instanceof Array)) {
    return;
  }

  for (let i = 0; i < permissoesList.length; i++) {
    let tbody = document.querySelector("#permissoes-table");
    const permissoesTR = permissoesTableRow(permissoesList[i]);
    tbody.appendChild(permissoesTR);
  }
}

export default populateTable;
