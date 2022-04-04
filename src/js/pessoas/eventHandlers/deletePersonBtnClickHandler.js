import { request } from "../../utils/utils.js";

function deletePersonBtnClickHandler(rfid) {
  request(
    "DELETE",
    "pessoas.php",
    {
      rfid,
    },
    null
  )
    .then((data) => {
      //alert("Pessoa com rfid: " + data.rfid + " foi apagada.");
      window.location.reload();
    })
    .catch((err) => {
      alert(err.message);
    });
}

export default deletePersonBtnClickHandler;
