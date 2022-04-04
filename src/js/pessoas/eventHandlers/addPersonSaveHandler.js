import { request } from "../../utils/utils.js";
import { validatePersonForm, clearModalInput } from "../utils/utils.js";

function addPersonSaveHandler() {
  const errorsDiv = document.getElementById("errors-container");
  errorsDiv.style.display = "none";
  errorsDiv.innerHTML = "";

  const primeiroNome = document.getElementById("input-primeiroNome");
  const ultimoNome = document.getElementById("input-ultimoNome");
  const etiquetaRfid = document.getElementById("input-rfid");

  const formData = {
    primNome: primeiroNome.value,
    ultNome: ultimoNome.value,
    rfid: etiquetaRfid.value,
  };

  let formValidity = validatePersonForm(formData);

  if (!formValidity.valid) {
    errorsDiv.style.display = "block";
    let invalidFieldsFormatted = [];
    formValidity.invalidFields.forEach((field) => {
      switch (field) {
        case "primNome":
          invalidFieldsFormatted.push("Primeiro Nome");
          break;
        case "ultNome":
          invalidFieldsFormatted.push("Último Nome");
          break;
        case "rfid":
          invalidFieldsFormatted.push("RFID");
          break;
      }
    });

    errorsDiv.innerHTML += `<p class='text-danger'>&bull; Os campos ${invalidFieldsFormatted.join(
      ", "
    )} não podem estar vazios.</p>`;
  } else {
    let modalSaveBtn = document.getElementById("modal-save");
    modalSaveBtn.disabled = true;
    request("POST", "pessoas.php", formData, null)
      .then((data) => {
        let modal = bootstrap.Modal.getInstance(
          document.getElementById("pessoa-modal")
        );

        clearModalInput();
        modal.hide();

        window.location.reload();
      })
      .catch((err) => {
        errorsDiv.style.display = "block";
        errorsDiv.innerHTML += `<p class='text-danger'>&bull; ${err.message}</p>`;
      })
      .finally(() => {
        modalSaveBtn.disabled = false;
      });
  }
}

export { addPersonSaveHandler };
