import logout from "../common/logout.js";
import { request } from "../utils/utils.js";
import noHistoricosAvailableRow from "./elements/noHistoricosAvailableRow.js";
import { populateTable } from "./utils/utils.js";

let HistoricoAtuadores;

request("GET", "registosDeAtuador.php", null, null).then((data) => {
  if (data.length === 0) {
    document
      .getElementById("table-historico")
      .appendChild(noHistoricosAvailableRow());
  } else {
    HistoricoAtuadores = data;
    populateTable(data);
  }
});

document.getElementById("dropdown-atuador").addEventListener("change", (e) => {
  const option = parseInt(e.target.value);

  let historico_novo = HistoricoAtuadores.filter((e) => {
    return e.actuatorType === option;
  });

  let element = document.getElementById("table-historico");
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }

  populateTable(historico_novo);
});

document
  .getElementById("logout-button")
  .addEventListener("click", (event) => logout(event));
