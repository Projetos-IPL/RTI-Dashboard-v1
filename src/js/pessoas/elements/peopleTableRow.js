import updatePersonBtnClickHandler from "../eventHandlers/updatePersonBtnClickHandler.js";
import deletePersonbtnClickHandler from "../eventHandlers/deletePersonBtnClickHandler.js";

/**
 * Esta função devolve uma linha da tabela com os dados de uma pessoa.
 * @returns {HTMLTableRowElement}
 */
function peopleTableRow(person) {
  // Validar parâmetros
  if (
    !person.hasOwnProperty("primNome") ||
    !person.hasOwnProperty("ultNome") ||
    !person.hasOwnProperty("rfid")
  ) {
    console.error("Parâmetro incorreto em " + Function.name);
  }

  let tr = document.createElement("tr");

  let editButton, deleteButton;
  editButton = document.createElement("button");
  deleteButton = document.createElement("button");

  editButton.classList.add(
    "alterarPessoa-button",
    "btn",
    "btn-sm",
    "btn-warning",
    "me-2"
  );
  editButton.setAttribute("type", "button");
  editButton.innerHTML = '<i class="fas fa-pencil text-white"></i>';
  editButton.addEventListener("click", (e) =>
    updatePersonBtnClickHandler(e, person)
  );

  deleteButton.classList.add(
    "apagarPessoa-button",
    "btn",
    "btn-sm",
    "btn-danger",
    "me-1"
  );
  deleteButton.setAttribute("type", "button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.addEventListener("click", (e) =>
    deletePersonbtnClickHandler(person.rfid)
  );

  let nameTD, rfidTD, actionTD;
  nameTD = document.createElement("td");
  rfidTD = document.createElement("td");
  actionTD = document.createElement("td");

  nameTD.innerText = `${person.primNome} ${person.ultNome}`;
  rfidTD.innerText = person.rfid;

  tr.appendChild(nameTD);
  tr.appendChild(rfidTD);
  tr.appendChild(actionTD);
  actionTD.appendChild(editButton);
  actionTD.appendChild(deleteButton);

  return tr;
}

export { peopleTableRow };
