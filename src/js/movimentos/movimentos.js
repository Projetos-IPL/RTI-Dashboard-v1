import logout from "../common/logout.js";
import { request } from "../utils/utils.js";
import noMovimentosAvailableRow from "./elements/noMovimentosAvailableRow.js";
import { populateTable } from "./utils/utils.js";

request("GET", "registos.php", null, null).then((data) => {
  if (data.length === 0) {
    document
      .getElementById("table-movimentos")
      .appendChild(noMovimentosAvailableRow());
  } else {
    populateTable(data);
  }
});

document
  .getElementById("logout-button")
  .addEventListener("click", (event) => logout(event));
