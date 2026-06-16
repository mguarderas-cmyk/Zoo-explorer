const species = [
  {
    id: "guayacan",
    name: "Guayacan",
    type: "planta",
    icon: "G",
    role: "Arbol nativo que ofrece sombra, refugio y alimento para insectos polinizadores.",
    care: "Observar humedad del suelo y evitar pisar sus raices."
  },
  {
    id: "colibri",
    name: "Colibri",
    type: "animal",
    icon: "C",
    role: "Ave polinizadora que ayuda a mantener flores y frutos dentro del ecosistema.",
    care: "Mirar a distancia, no perseguirlo y cuidar las plantas con flores."
  },
  {
    id: "helecho",
    name: "Helecho",
    type: "planta",
    icon: "H",
    role: "Planta que ayuda a conservar humedad y proteger microhabitats.",
    care: "Mantenerlo en sombra parcial y no arrancar sus hojas."
  },
  {
    id: "mariposa",
    name: "Mariposa",
    type: "animal",
    icon: "M",
    role: "Indicadora de biodiversidad y polinizadora de plantas del campus.",
    care: "Evitar tocar sus alas y proteger las flores donde se alimenta."
  },
  {
    id: "sabila",
    name: "Sabila",
    type: "planta",
    icon: "S",
    role: "Planta resistente que enseña adaptacion y uso responsable de recursos.",
    care: "Regar con moderacion y revisar que reciba suficiente luz."
  },
  {
    id: "lombriz",
    name: "Lombriz de tierra",
    type: "animal",
    icon: "L",
    role: "Mejora el suelo al airearlo y transformar materia organica.",
    care: "No retirarla del suelo y mantener areas con hojarasca."
  }
];

const missions = [
  {
    title: "Observador silencioso",
    text: "Elige una especie, mirala durante tres minutos y anota un comportamiento o cambio visible."
  },
  {
    title: "Guardian del cuidado",
    text: "Identifica una accion pequena que ayude a proteger una planta o animal del campus."
  },
  {
    title: "Mapa vivo",
    text: "Registra donde encontraste una especie y compara si aparece en la misma zona otro dia."
  }
];

const grid = document.querySelector("#speciesGrid");
const missionList = document.querySelector("#missionList");
const form = document.querySelector("#observationForm");
const speciesSelect = form.elements.species;
const logList = document.querySelector("#logList");
const clearLog = document.querySelector("#clearLog");
const filterButtons = document.querySelectorAll("[data-filter]");

function renderSpecies(filter = "todas") {
  const visibleSpecies = filter === "todas"
    ? species
    : species.filter((item) => item.type === filter);

  grid.innerHTML = visibleSpecies.map((item) => `
    <article class="species-card">
      <div class="species-art" aria-hidden="true">${item.icon}</div>
      <div class="species-body">
        <h3>${item.name}</h3>
        <p>${item.role}</p>
        <p>${item.care}</p>
        <span class="tag">${item.type}</span>
      </div>
    </article>
  `).join("");
}

function renderMissions() {
  missionList.innerHTML = missions.map((mission, index) => `
    <article class="mission">
      <span class="tag">Mision ${index + 1}</span>
      <h3>${mission.title}</h3>
      <p>${mission.text}</p>
    </article>
  `).join("");
}

function loadEntries() {
  return JSON.parse(localStorage.getItem("zooExplorerEntries") || "[]");
}

function saveEntries(entries) {
  localStorage.setItem("zooExplorerEntries", JSON.stringify(entries));
}

function renderLog() {
  const entries = loadEntries();

  if (entries.length === 0) {
    logList.innerHTML = `<p class="empty">Aun no hay observaciones guardadas.</p>`;
    return;
  }

  logList.innerHTML = entries.map((entry) => `
    <article class="log-item">
      <div class="log-meta">${entry.date} · ${entry.explorer} · ${entry.speciesName}</div>
      <p>${entry.note}</p>
    </article>
  `).join("");
}

function populateSpeciesSelect() {
  speciesSelect.innerHTML = species.map((item) => `
    <option value="${item.id}">${item.name}</option>
  `).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSpecies(button.dataset.filter);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const selectedSpecies = species.find((item) => item.id === formData.get("species"));
  const entry = {
    explorer: formData.get("explorer").trim(),
    speciesName: selectedSpecies.name,
    note: formData.get("note").trim(),
    date: new Date().toLocaleDateString("es-EC", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
  };

  const entries = [entry, ...loadEntries()].slice(0, 8);
  saveEntries(entries);
  form.reset();
  renderLog();
});

clearLog.addEventListener("click", () => {
  saveEntries([]);
  renderLog();
});

populateSpeciesSelect();
renderSpecies();
renderMissions();
renderLog();
