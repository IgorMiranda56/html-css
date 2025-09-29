function getUserKey() {
  return "vehicles_" + (localStorage.getItem("loggedUser") || "");
}

function loadVehicles() {
  return JSON.parse(localStorage.getItem(getUserKey()) || "[]");
}

function saveVehicles(vehicles) {
  localStorage.setItem(getUserKey(), JSON.stringify(vehicles));
}

let vehicles = loadVehicles();
let editIndex = null;

function renderTable() {
  const tbody = document.querySelector("#vehicleTable tbody");
  tbody.innerHTML = "";
  vehicles.forEach((vehicle, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${vehicle.marca}</td>
      <td>${vehicle.modelo}</td>
      <td>${vehicle.ano}</td>
      <td>
        <button onclick="editVehicle(${index})">Editar</button>
        <button onclick="deleteVehicle(${index})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function editVehicle(index) {
  const vehicle = vehicles[index];
  document.getElementById("marca").value = vehicle.marca;
  document.getElementById("modelo").value = vehicle.modelo;
  document.getElementById("ano").value = vehicle.ano;
  editIndex = index;
}

function deleteVehicle(index) {
  vehicles.splice(index, 1);
  saveVehicles(vehicles);
  renderTable();
}

document.getElementById("vehicleForm").onsubmit = function(e) {
  e.preventDefault();
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = document.getElementById("ano").value;

  if (editIndex !== null) {
    vehicles[editIndex] = { marca, modelo, ano };
    editIndex = null;
  } else {
    vehicles.push({ marca, modelo, ano });
  }
  saveVehicles(vehicles);
  renderTable();
  document.getElementById("vehicleForm").reset();
};

renderTable();

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}
