import { request } from "../../utils/utils.js";

/**
 * Esta função devolve uma linha da tabela com os dados de um histórico.
 * @returns {HTMLTableRowElement}
 */
function movimentoTableRow(movimento) {
  // Validar parâmetros
  if (!movimento.hasOwnProperty("rfid")) {
    console.error("Parâmetro incorreto em " + Function.name);
  }

  let tr = document.createElement("tr");

  let idTD, nameTD, timeTD, resultTD;
  idTD = document.createElement("td");
  nameTD = document.createElement("td");
  timeTD = document.createElement("td");
  resultTD = document.createElement("td");

  idTD.innerText = movimento.id;

  // converter timestamp de segundos para milisegundos
  timeTD.innerText = new Date(movimento.timestamp * 1000).toLocaleString(
    "pt-PT"
  );

  var color = movimento.access ? "success" : "danger";
  var icon = movimento.access ? "check" : "ban";
  var text = movimento.access ? "Permitido" : "Negado";

  resultTD.innerHTML = `<span class="text-${color}"><i class="fas fa-${icon} me-1"></i> ${text}</span>`;

  request(
    "POST",
    "functions/getPersonName.php",
    {
      rfid: movimento.rfid,
    },
    null
  )
    .then(({ name }) => {
      nameTD.innerText = `${name} (${movimento.rfid})`;
    })
    .catch((err) => console.error(err));

  tr.appendChild(idTD);
  tr.appendChild(nameTD);
  tr.appendChild(timeTD);
  tr.appendChild(resultTD);

  return tr;
}

export { movimentoTableRow };
