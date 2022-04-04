import { updatePersonSaveHandler } from "./updatePersonSaveHandler.js";

/**
 *
 * @param e
 * @param primNome
 * @param ultNome
 * @param rfid
 */
function updatePersonBtnClickHandler(e, { primNome, ultNome, rfid }) {
  e.preventDefault();
  document.getElementById("modal-title").innerHTML = "Alterar Pessoa";

  const primNomeInput = document.getElementById("input-primeiroNome");
  primNomeInput.disabled = true;
  primNomeInput.value = primNome;

  const ultNomeInput = document.getElementById("input-ultimoNome");
  ultNomeInput.disabled = true;
  ultNomeInput.value = ultNome;

  const rfidInput = document.getElementById("input-rfid");
  rfidInput.disabled = false;
  rfidInput.value = rfid;

  document.getElementById("modal-cancel").disabled = false;

  const modalSave = document.getElementById("modal-save");
  modalSave.disabled = false;
  modalSave.innerText = "Atualizar";
  modalSave.addEventListener("click", (e) => {
    e.preventDefault();
    updatePersonSaveHandler(rfid);
  });

  new bootstrap.Modal(document.getElementById("pessoa-modal")).toggle();
}

export default updatePersonBtnClickHandler;
