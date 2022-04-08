import logout from "../common/logout.js";
import { request } from "../utils/utils.js";
import noHistoricosAvailableRow from "./elements/noHistoricosAvailableRow.js";
import { populateTable } from "./utils/utils.js";

let HISTORICO;

request("GET", "registosDeSensor.php", null, null).then((data) => {
  if (data.length === 0) {
    document
      .getElementById("table-historico")
      .appendChild(noHistoricosAvailableRow());
  } else {
    HISTORICO = data;
    populateTable(data);
  }
});

document.getElementById("dropdown-sensor").addEventListener("change", (e) => {
  const option = parseInt(e.target.value);

  var historico_novo = HISTORICO.filter((e) => {
    return e.sensorType === option;
  });

  var element = document.getElementById("table-historico");
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }

  populateTable(historico_novo);
});

document
  .getElementById("logout-button")
  .addEventListener("click", (event) => logout(event));
