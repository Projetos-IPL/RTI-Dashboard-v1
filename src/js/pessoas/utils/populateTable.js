import { peopleTableRow } from "../elements/peopleTableRow.js";

/**
 * Esta função insere os dados de pessos na tablea de pessoas.
 * @param personList Array de pessoas
 */
function populateTable(personList) {
  if (!(personList instanceof Array)) {
    return;
  }

  for (let i = 0; i < personList.length; i++) {
    let tbody = document.querySelector("#table-pessoas");
    const personTR = peopleTableRow(personList[i]);
    tbody.appendChild(personTR);
  }
}

export default populateTable;
