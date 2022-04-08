import { request } from "../../utils/utils.js";

/**
 * Esta função devolve uma linha da tabela com os dados de um histórico.
 * @returns {HTMLTableRowElement}
 */
function historicoTableRow(historico) {
  // Validar parâmetros
  if (!historico.hasOwnProperty("actuatorType")) {
    console.error("Parâmetro incorreto em " + Function.name);
  }

  let tr = document.createElement("tr");

  let actuatorTD, timeTD;
  actuatorTD = document.createElement("td");
  timeTD = document.createElement("td");

  request(
    "POST",
    "functions/getActuatorName.php",
    { actuatorType: historico.actuatorType },
    null
  ).then((data) => {
    actuatorTD.innerText = data.name;
  });

  // converter timestamp de segundos para milisegundos
  timeTD.innerText = new Date(historico.timestamp * 1000).toLocaleString(
    "pt-PT"
  );

  tr.appendChild(actuatorTD);
  tr.appendChild(timeTD);

  return tr;
}

export { historicoTableRow };
