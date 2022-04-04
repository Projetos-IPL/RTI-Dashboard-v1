import { addPersonSaveHandler } from "./addPersonSaveHandler.js";

function addPersonBtnClickHandler(event) {
  event.preventDefault();

  document.getElementById("modal-title").innerHTML = "Adicionar Pessoa";
  document.getElementById("input-primeiroNome").disabled = false;
  document.getElementById("input-ultimoNome").disabled = false;
  document.getElementById("input-rfid").disabled = false;
  document.getElementById("modal-cancel").disabled = false;

  let modalSave = document.getElementById("modal-save");
  modalSave.disabled = false;
  modalSave.innerText = "Adicionar";
  modalSave.addEventListener("click", (e) => {
    e.preventDefault();
    addPersonSaveHandler();
  });

  new bootstrap.Modal(document.getElementById("pessoa-modal")).toggle();
}

export default addPersonBtnClickHandler;
