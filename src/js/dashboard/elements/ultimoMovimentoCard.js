import { request } from "../../utils/utils.js";

function ultimoMovimentoCard(movimentos) {
  movimentos.sort((a, b) => {
    return b.timestamp * 1000 - a.timestamp * 1000;
  });
  movimentos = movimentos.splice(0, 1);

  const cardWrapper = document.createElement("div");

  const name = document.createElement("h4");
  name.classList.add("card-title");

  request(
    "POST",
    "functions/getPersonName.php",
    { rfid: movimentos[0].rfid },
    null
  ).then((data) => (name.innerText = data.name));

  const date = document.createElement("small");
  date.classList.add("text-muted");
  date.innerText = new Date(movimentos[0].timestamp * 1000).toLocaleString(
    "pt-PT"
  );

  const statusWrapper = document.createElement("h4");
  statusWrapper.classList.add("mt-3");

  const statusBadge = document.createElement("span");
  statusBadge.classList.add(
    "badge",
    movimentos[0].access ? "bg-success" : "bg-danger"
  );

  const statusBadgeIcon = document.createElement("i");
  statusBadgeIcon.classList.add(
    "fas",
    "me-2",
    movimentos[0].access ? "fa-check" : "fa-ban"
  );
  const statusBadgeText = document.createElement("span");
  statusBadgeText.innerText = movimentos[0].access ? "Permitido" : "Negado";

  statusBadge.append(statusBadgeIcon, statusBadgeText);

  statusWrapper.append(statusBadge);

  cardWrapper.append(name, date, statusWrapper);
  return cardWrapper;
}

export default ultimoMovimentoCard;
