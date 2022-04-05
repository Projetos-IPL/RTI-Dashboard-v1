import { addPermissaoSaveHandler } from "./addPermissaoSaveHandler.js";

function addPermissaoBtnClickHandler(event, pessoas) {
  event.preventDefault();

  document.getElementById("modal-title").innerHTML = "Adicionar Permissão";

  const pessoaDropdown = document.getElementById("input-pessoa");
  pessoaDropdown.disabled = false;
  document.getElementById("modal-cancel").disabled = false;

  // adicionar pessoas à dropdown
  for (let i = 0; i < pessoas.length; i++) {
    var pessoa = document.createElement("option");
    pessoa.value = pessoas[i]["rfid"];
    pessoa.text = `${pessoas[i]["primNome"]} ${pessoas[i]["ultNome"]} (${pessoas[i]["rfid"]})`;
    pessoaDropdown.appendChild(pessoa);
  }

  let modalSave = document.getElementById("modal-save");
  modalSave.disabled = false;
  modalSave.innerText = "Adicionar";

  modalSave.addEventListener("click", (e) => {
    e.preventDefault();
    addPermissaoSaveHandler();
  });

  new bootstrap.Modal(document.getElementById("permissoes-modal")).toggle();
}

export default addPermissaoBtnClickHandler;
