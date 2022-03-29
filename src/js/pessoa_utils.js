document
  .getElementById("adicionarPessoa-button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal-title").innerHTML = "Adicionar Pessoa";

    document.getElementById("input-primeiroNome").disabled = false;
    document.getElementById("input-ultimoNome").disabled = false;
    document.getElementById("input-rfid").disabled = false;
    document.getElementById("modal-save").disabled = false;
    document.getElementById("modal-cancel").disabled = false;

    const modal = new bootstrap.Modal(
      document.getElementById("pessoa-modal")
    ).toggle();
  });

Array.from(document.getElementsByClassName("alterarPessoa-button")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("modal-title").innerHTML = "Alterar Pessoa";

      document.getElementById("input-primeiroNome").disabled = false;
      document.getElementById("input-ultimoNome").disabled = false;
      document.getElementById("input-rfid").disabled = true;
      document.getElementById("modal-save").disabled = false;
      document.getElementById("modal-cancel").disabled = false;

      const modal = new bootstrap.Modal(
        document.getElementById("pessoa-modal")
      ).toggle();
    });
  }
);

Array.from(document.getElementsByClassName("verPessoa-button")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("modal-title").innerHTML = "Visualizar Pessoa";

      document.getElementById("input-primeiroNome").disabled = true;
      document.getElementById("input-ultimoNome").disabled = true;
      document.getElementById("input-rfid").disabled = true;
      document.getElementById("modal-save").disabled = true;
      document.getElementById("modal-cancel").disabled = false;

      const modal = new bootstrap.Modal(
        document.getElementById("pessoa-modal")
      ).toggle();
    });
  }
);

document.getElementById("modal-save").addEventListener("click", (e) => {
  e.preventDefault();

  let errors = false;
  const errorsDiv = document.getElementById("errors-container");
  errorsDiv.innerHTML = "";

  const primeiroNome = document.getElementById("input-primeiroNome");
  const ultimoNome = document.getElementById("input-ultimoNome");
  const etiquetaRfid = document.getElementById("input-rfid");

  if (primeiroNome.value.length === 0) {
    errors = true;
    errorsDiv.innerHTML +=
      "<p class='text-danger'>&bull; Primeiro nome vazio!</p>";
  }

  if (ultimoNome.value.length === 0) {
    errors = true;
    errorsDiv.innerHTML +=
      "<p class='text-danger'>&bull; Último nome vazio!</p>";
  }

  if (etiquetaRfid.value.length === 0) {
    errors = true;
    errorsDiv.innerHTML +=
      "<p class='text-danger'>&bull; Etiqueta RFID vazia!</p>";
  }

  if (!errors) {
    document.getElementById("modal-save").disabled = false;
    const formData = {
      id: Date.now(),
      firstName: primeiroNome.value,
      lastName: ultimoNome.value,
      rfidTag: etiquetaRfid.value,
    };

    console.log(formData);

    var modal = bootstrap.Modal.getInstance(
      document.getElementById("pessoa-modal")
    );

    clearModalInputs();

    modal.hide();
  }
});

function clearModalInputs() {
  document.getElementById("input-primeiroNome").value = "";
  document.getElementById("input-ultimoNome").value = "";
  document.getElementById("input-rfid").value = "";
}
