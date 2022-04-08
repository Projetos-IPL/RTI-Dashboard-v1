import { request } from "../../utils/utils.js";

/**
 * Esta função devolve uma linha da tabela com os dados de um histórico.
 * @returns {HTMLTableRowElement}
 */
function historicoTableRow(historico) {
  // Validar parâmetros
  if (!historico.hasOwnProperty("sensorType")) {
    console.error("Parâmetro incorreto em " + Function.name);
  }

  let tr = document.createElement("tr");

  let sensorTD, valueTD, timeTD;
  sensorTD = document.createElement("td");
  valueTD = document.createElement("td");
  timeTD = document.createElement("td");

  request(
    "POST",
    "functions/getSensorName.php",
    { sensorType: historico.sensorType },
    null
  ).then((data) => {
    sensorTD.innerText = data.name;
  });

  valueTD.innerText = historico["value"];

  // converter timestamp de segundos para milisegundos
  timeTD.innerText = new Date(historico.timestamp * 1000).toLocaleString(
    "pt-PT"
  );

  tr.appendChild(sensorTD);
  tr.appendChild(valueTD);
  tr.appendChild(timeTD);

  return tr;
}

export { historicoTableRow };
