document
  .getElementById("adicionarPessoa-button")
  .addEventListener("click", (e) => addPessoaModalHandler(e));

Array.from(document.getElementsByClassName("alterarPessoa-button")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("modal-title").innerHTML = "Alterar Pessoa";

      document.getElementById("input-primeiroNome").disabled = true;
      document.getElementById("input-ultimoNome").disabled = true;
      document.getElementById("input-rfid").disabled = false;
      document.getElementById("modal-save").disabled = false;
      document.getElementById("modal-cancel").disabled = false;

      const modal = new bootstrap.Modal(
        document.getElementById("pessoa-modal")
      ).toggle();
    });
  }
);
