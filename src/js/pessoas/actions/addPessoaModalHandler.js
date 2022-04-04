function addPessoaModalHandler(event) {
  event.preventDefault();

  document.getElementById("modal-title").innerHTML = "Adicionar Pessoa";

  document.getElementById("input-primeiroNome").disabled = false;
  document.getElementById("input-ultimoNome").disabled = false;
  document.getElementById("input-rfid").disabled = false;
  document.getElementById("modal-save").disabled = false;
  document.getElementById("modal-cancel").disabled = false;

  const modal = new bootstrap.Modal(
    document.getElementById("pessoa-modal")
  ).toggle();
}
