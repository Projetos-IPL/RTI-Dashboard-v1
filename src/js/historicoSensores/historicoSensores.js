import logout from "../common/logout.js";
import { request } from "../utils/utils.js";
import noHistoricosAvailableRow from "./elements/noHistoricosAvailableRow.js";
import { populateTable } from "./utils/utils.js";

let HistoricoSensores;

request("GET", "registosDeSensor.php", null, null).then((data) => {
  if (data.length === 0) {
    document
      .getElementById("table-historico")
      .appendChild(noHistoricosAvailableRow());
  } else {
    HistoricoSensores = data;
    populateTable(data);
  }
});

document.getElementById("dropdown-sensor").addEventListener("change", (e) => {
  const option = parseInt(e.target.value);

  let historico_novo = HistoricoSensores.filter((e) => {
    return e.sensorType === option;
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
