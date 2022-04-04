import utils from "../utils/utils.js";

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
      primNome: primeiroNome.value,
      ultNome: ultimoNome.value,
      rfid: parseInt(etiquetaRfid.value),
    };

    utils
      .request("POST", "pessoas.php", formData, null)
      .then((data) => {
        var modal = bootstrap.Modal.getInstance(
          document.getElementById("pessoa-modal")
        );

        clearModalInputs();
        modal.hide();

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);

        errorsDiv.innerHTML += `<p class='text-danger'>&bull; ${err.message}</p>`;
      });
  }
});

utils
  .request("GET", "pessoas.php", null, null)
  .then((data) => populateTable(data))
  .catch((err) => console.error(err));

function clearModalInputs() {
  document.getElementById("input-primeiroNome").value = "";
  document.getElementById("input-ultimoNome").value = "";
  document.getElementById("input-rfid").value = "";
}
