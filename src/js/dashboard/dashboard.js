import logout from "../common/logout.js";
import { request } from "../utils/utils.js";
import { noMovimentosAvailableRow, populateTable } from "./utils/utils.js";
import ultimoMovimentoCard from "./elements/ultimoMovimentoCard.js";

// obter lista de movimentos
request("GET", "movimentos.php", null, null)
  .then((data) => {
    if (data.length === 0) {
      document
        .getElementById("ultimosMovimentos-table")
        .appendChild(noMovimentosAvailableRow());
    } else {
      const movimentos_permitidos = data.filter((e) => e.access === true);
      document.getElementById("counter-movimentosPermitidos").innerText =
        movimentos_permitidos.length;

      const movimentos_negados = data.filter((e) => e.access === false);
      document.getElementById("counter-movimentosNegados").innerText =
        movimentos_negados.length;

      const pessoas = request("GET", "pessoas.php", null, null).then((data) => {
        document.getElementById("counter-pessoas").innerText = data.length;
      });

      console.log(data);

      populateTable([...data]);

      document
        .getElementById("ultimoMovimento-card")
        .appendChild(ultimoMovimentoCard([...data]));
    }
  })
  .catch((err) => {
    console.error(err);
  });

document.getElementById("username").innerText =
  localStorage.getItem("username");

document
  .getElementById("logout-button")
  .addEventListener("click", (event) => logout(event));
