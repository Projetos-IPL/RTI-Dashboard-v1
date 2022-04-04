function populateTable(personList) {
  if (!(personList instanceof Array)) {
    return;
  }

  for (let i = 0; i < personList.length; i++) {
    let person = personList[i];

    let tbody = document.querySelector("#table-pessoas");
    let tr = document.createElement("tr");
    let nameTD = document.createElement("td");
    let rfidTD = document.createElement("td");

    let actionTD = document.createElement("td");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    editButton.classList.add("btn", "btn-sm", "btn-warning", "me-2");
    editButton.setAttribute("type", "button");
    editButton.innerHTML = '<i class="fas fa-pencil text-white"></i>';

    deleteButton.classList.add("btn", "btn-sm", "btn-danger", "me-1");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    tbody.appendChild(tr);
    tr.appendChild(nameTD);
    tr.appendChild(rfidTD);

    tr.appendChild(actionTD);
    actionTD.appendChild(editButton);
    actionTD.appendChild(deleteButton);

    nameTD.innerText = `${person.primNome} ${person.ultNome}`;
    rfidTD.innerText = person.rfid;
  }
}
