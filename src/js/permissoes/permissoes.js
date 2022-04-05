import logout from "../common/logout.js";
import { request } from "../utils/utils.js";
import {
  noPermissoesAvailableRow,
  populateTable,
} from "../permissoes/utils/utils.js";
import addPermissaoBtnClickHandler from "./eventHandlers/addPermissaoBtnClickHandler.js";

let PESSOAS = [];

// GET para o modal das permissões
request("GET", "pessoas.php", null, null).then((data) => {
  if (data.length === 0) {
    document
      .getElementById("permissoes-table")
      .appendChild(noPermissoesAvailableRow());
  } else {
    PESSOAS = data;
  }
});

// Carregar pessoas
request("GET", "permissoes.php", null, null)
  .then((data) => {
    if (data.length === 0) {
      document
        .getElementById("permissoes-table")
        .appendChild(noPermissoesAvailableRow());
    } else {
      populateTable(data);
    }
  })
  .catch((err) => console.log(err));

document
  .getElementById("adicionarPermissao-button")
  .addEventListener("click", (e) => addPermissaoBtnClickHandler(e, PESSOAS));

document
  .getElementById("logout-button")
  .addEventListener("click", (event) => logout(event));
