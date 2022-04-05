import { request } from "../../utils/utils.js";
import deletePermissaoBtnClickHandler from "../eventHandlers/deletePermissaoBtnClickHandler.js";

/**
 * Esta função devolve uma linha da tabela com os dados de uma permissão.
 * @returns {HTMLTableRowElement}
 */
function permissoesTableRow(permissao) {
  // Validar parâmetros
  if (!permissao.hasOwnProperty("rfid")) {
    console.error("Parâmetro incorreto em " + Function.name);
  }

  let tr = document.createElement("tr");
  let deleteButton = document.createElement("button");

  deleteButton.classList.add(
    "apagarPermissao-button",
    "btn",
    "btn-sm",
    "btn-danger",
    "me-1"
  );
  deleteButton.setAttribute("type", "button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.addEventListener("click", (e) =>
    deletePermissaoBtnClickHandler(permissao.rfid)
  );

  let idTD, nameTD, rfidTD, actionTD;
  idTD = document.createElement("td");
  nameTD = document.createElement("td");
  actionTD = document.createElement("td");

  idTD.innerText = permissao.id;

  request(
    "POST",
    "functions/getPersonName.php",
    {
      rfid: permissao.rfid,
    },
    null
  )
    .then(({ name }) => {
      nameTD.innerText = `${name} (${permissao.rfid})`;
    })
    .catch((err) => console.error(err));

  tr.appendChild(idTD);
  tr.appendChild(nameTD);
  tr.appendChild(actionTD);
  actionTD.appendChild(deleteButton);

  return tr;
}

export { permissoesTableRow };
