document
  .getElementById("adicionarPermissao-button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal-title").innerHTML = "Adicionar Permissões";

    document.getElementById("input-pessoa").disabled = false;
    document.getElementById("input-permissao").disabled = false;
    document.getElementById("modal-save").disabled = false;
    document.getElementById("modal-cancel").disabled = false;

    const modal = new bootstrap.Modal(
      document.getElementById("permissoes-modal")
    ).toggle();
  });

Array.from(document.getElementsByClassName("alterarPermissoes-button")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("modal-title").innerHTML = "Alterar Permissões";

      document.getElementById("input-pessoa").disabled = true;
      document.getElementById("input-permissao").disabled = false;
      document.getElementById("modal-save").disabled = false;
      document.getElementById("modal-cancel").disabled = false;

      const modal = new bootstrap.Modal(
        document.getElementById("permissoes-modal")
      ).toggle();
    });
  }
);

document.getElementById("modal-save").addEventListener("click", (e) => {
  e.preventDefault();

  let errors = false;
  const errorsDiv = document.getElementById("errors-container");
  errorsDiv.innerHTML = "";

  const pessoa = document.getElementById("input-pessoa");
  const permissao = document.getElementById("input-permissao");

  if (pessoa.value === "") {
    errors = true;
    errorsDiv.innerHTML +=
      "<p class='text-danger'>&bull; Selecione uma pessoa!</p>";
  }

  if (!errors) {
    const formData = {
      id: Date.now(),
      rfid: pessoa.value,
      hasPermission: permissao.value,
    };

    console.log(formData);

    var modal = bootstrap.Modal.getInstance(
      document.getElementById("permissoes-modal")
    );

    clearModalInputs();

    modal.hide();
  }
});

function clearModalInputs() {
  document.getElementById("input-pessoa").value = "";
  document.getElementById("input-permissao").checked = false;
}
