import { request } from "../../utils/utils.js";
import { validatePermissaoForm, clearModalInput } from "../utils/utils.js";

function addPermissaoSaveHandler() {
  const errorsDiv = document.getElementById("errors-container");
  errorsDiv.style.display = "none";
  errorsDiv.innerHTML = "";

  const pessoa = document.getElementById("input-pessoa");
  const permissao = document.getElementById("input-permissao");

  const formData = {
    rfid: pessoa.value,
  };

  let formValidity = validatePermissaoForm(formData);

  if (!formValidity.valid) {
    errorsDiv.style.display = "block";
    let invalidFieldsFormatted = [];

    formValidity.invalidFields.forEach((field) => {
      switch (field) {
        case "rfid":
          invalidFieldsFormatted.push("Pessoa");
          break;
      }
    });

    errorsDiv.innerHTML += `<p class='text-danger'>&bull; Os campos ${invalidFieldsFormatted.join(
      ", "
    )} não podem estar vazios.</p>`;
  } else {
    let modalSaveBtn = document.getElementById("modal-save");
    modalSaveBtn.disabled = true;
    request("POST", "permissoes.php", formData, null)
      .then((data) => {
        let modal = bootstrap.Modal.getInstance(
          document.getElementById("permissoes-modal")
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

export { addPermissaoSaveHandler };
