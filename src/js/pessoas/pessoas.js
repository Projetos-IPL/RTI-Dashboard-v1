import { request } from "../utils/utils.js";
import { noPeopleAvailableRow, populateTable } from "./utils/utils.js";
import addPersonBtnClickHandler from "./eventHandlers/addPersonBtnClickHandler.js";
import logout from "../common/logout.js";

// Carregar pessoas
request("GET", "pessoas.php", null, null)
  .then((data) => {
    if (data.length === 0) {
      document
        .getElementById("table-pessoas")
        .appendChild(noPeopleAvailableRow());
    } else {
      populateTable(data);
    }
  })
  .catch((err) => alert(err.message));

document
  .getElementById("adicionarPessoa-button")
  .addEventListener("click", (e) => addPersonBtnClickHandler(e));

document
  .getElementById("logout-button")
  .addEventListener("click", (event) => logout(event));
