const contentPack = window.SABERSWIPE_CONTENT;
const facts = contentPack.facts;
const categoryOrder = ["Todos", ...contentPack.categories];
const favoriteStorageKey = `saberswipe:favorites:${contentPack.id}`;

const hobbies = [
  {
    name: "Dibujo con lapiz",
    type: "Creativo",
    time: "15 minutos al dia",
    cost: "Muy bajo",
    why: "Entrena observacion, paciencia y coordinacion sin necesitar mucho material.",
    steps: [
      "Consigue un lapiz, goma y papel normal.",
      "Durante una semana dibuja solo objetos simples de casa.",
      "Practica sombras con una sola fuente de luz.",
      "Guarda cada dibujo para ver progreso real."
    ]
  },
  {
    name: "Talla sencilla en madera blanda",
    type: "Manual",
    time: "30 minutos por sesion",
    cost: "Bajo",
    why: "Es tactil, calmado y permite crear objetos pequenos desde casa si se hace con seguridad.",
    steps: [
      "Empieza con madera blanda, guantes y una navaja o cuchillo de talla basico.",
      "Trabaja piezas pequenas y corta siempre lejos del cuerpo.",
      "Haz formas simples: cuna, cuchara pequena o colgante.",
      "Lija y termina con aceite mineral si quieres un acabado limpio."
    ]
  },
  {
    name: "Calistenia basica",
    type: "Cuerpo",
    time: "20 minutos, 3 dias por semana",
    cost: "Gratis",
    why: "Mejora fuerza y movilidad usando tu propio peso corporal.",
    steps: [
      "Empieza con sentadillas, flexiones inclinadas y plancha.",
      "Haz pocas repeticiones con buena tecnica.",
      "Anota una progresion semanal pequena.",
      "Descansa al menos un dia entre sesiones intensas."
    ]
  },
  {
    name: "Ajedrez desde cero",
    type: "Mente",
    time: "10 minutos al dia",
    cost: "Gratis",
    why: "Entrena calculo, paciencia y reconocimiento de patrones.",
    steps: [
      "Aprende movimientos y valor relativo de las piezas.",
      "Practica mates basicos: rey y torre, dos torres, dama.",
      "Resuelve tres puzzles faciles al dia.",
      "Revisa una partida corta y busca un error propio."
    ]
  },
  {
    name: "Programacion web",
    type: "Tecnologia",
    time: "25 minutos al dia",
    cost: "Gratis",
    why: "Permite crear herramientas, paginas y pequenas apps utiles con un ordenador normal.",
    steps: [
      "Aprende HTML para estructura, CSS para estilo y JavaScript para interaccion.",
      "Haz una pagina personal de una sola pantalla.",
      "Anade un boton que cambie algo en la pagina.",
      "Crea un mini proyecto semanal, aunque sea pequeno."
    ]
  },
  {
    name: "Escritura breve",
    type: "Creativo",
    time: "12 minutos al dia",
    cost: "Gratis",
    why: "Mejora expresion, claridad mental y creatividad sin preparacion.",
    steps: [
      "Elige una libreta o archivo fijo.",
      "Escribe 100 palabras al dia sobre una escena o idea.",
      "Una vez por semana revisa y mejora un texto.",
      "Crea una lista de temas para no depender de la inspiracion."
    ]
  },
  {
    name: "Cocina de supervivencia elegante",
    type: "Manual",
    time: "1 receta por semana",
    cost: "Bajo",
    why: "Es practica, disfrutable y se nota enseguida en la vida diaria.",
    steps: [
      "Domina huevos, arroz, pasta, verduras salteadas y una salsa simple.",
      "Repite la misma receta dos veces antes de cambiar.",
      "Aprende una tecnica por semana: cortar, sofreir, reducir o emulsionar.",
      "Haz una lista de diez comidas que puedas preparar sin pensar demasiado."
    ]
  },
  {
    name: "Fotografia con movil",
    type: "Creativo",
    time: "10 fotos al dia",
    cost: "Gratis",
    why: "Convierte el telefono en una herramienta para entrenar mirada, luz y composicion.",
    steps: [
      "Haz fotos solo con luz natural durante una semana.",
      "Practica encuadres: simetria, lineas, primer plano y contraste.",
      "Edita poco: recorte, exposicion y color.",
      "Elige una foto diaria y escribe por que funciona."
    ]
  }
];

const state = {
  category: "Todos",
  currentIndex: 0,
  favorites: new Set(JSON.parse(localStorage.getItem(favoriteStorageKey) || "[]")),
  hobbyType: "Todos"
};

const deck = document.querySelector("#deck");
const categoryStrip = document.querySelector("#categoryStrip");
const favoritesList = document.querySelector("#favoritesList");
const favoritesEmpty = document.querySelector("#favoritesEmpty");
const hobbyList = document.querySelector("#hobbyList");
const hobbyFilter = document.querySelector("#hobbyFilter");
const shuffleButton = document.querySelector("#shuffleButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const progressLabel = document.querySelector("#progressLabel");

function saveFavorites() {
  localStorage.setItem(favoriteStorageKey, JSON.stringify([...state.favorites]));
}

function getVisibleFacts() {
  if (state.category === "Todos") {
    return facts;
  }

  return facts.filter((fact) => fact.category === state.category);
}

function clampCurrentIndex() {
  const visibleFacts = getVisibleFacts();
  state.currentIndex = Math.max(0, Math.min(state.currentIndex, visibleFacts.length - 1));
}

function renderCategories() {
  categoryStrip.innerHTML = categoryOrder
    .map((category) => {
      const active = category === state.category ? " active" : "";
      return `<button class="pill${active}" type="button" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function renderDeck() {
  const visibleFacts = getVisibleFacts();
  clampCurrentIndex();
  const fact = visibleFacts[state.currentIndex];
  const isSaved = state.favorites.has(fact.id);

  deck.innerHTML = `
    <article class="fact-card" data-id="${fact.id}">
      <div class="fact-inner">
        <div class="fact-meta">
          <span class="badge">${fact.category}</span>
          <button class="save-button${isSaved ? " saved" : ""}" type="button" data-save="${fact.id}" aria-label="${isSaved ? "Quitar de favoritos" : "Guardar en favoritos"}">${isSaved ? "ok" : "+"}</button>
        </div>
        <h2>${fact.title}</h2>
        <p>${fact.body}</p>
        <p class="fact-extra">${fact.extra}</p>
        <div class="tag-row">
          <span class="mini-tag">${fact.angle}</span>
          <span class="mini-tag">Pack ${contentPack.label}</span>
        </div>
      </div>
    </article>
  `;

  progressLabel.textContent = `${state.currentIndex + 1} / ${visibleFacts.length}`;
}

function moveCard(direction) {
  const visibleFacts = getVisibleFacts();
  state.currentIndex = (state.currentIndex + direction + visibleFacts.length) % visibleFacts.length;
  renderDeck();
}

function jumpToRandomCard() {
  const visibleFacts = getVisibleFacts();
  if (visibleFacts.length <= 1) {
    return;
  }

  let nextIndex = state.currentIndex;
  while (nextIndex === state.currentIndex) {
    nextIndex = Math.floor(Math.random() * visibleFacts.length);
  }

  state.currentIndex = nextIndex;
  renderDeck();
}

function renderFavorites() {
  const savedFacts = facts.filter((fact) => state.favorites.has(fact.id));
  favoritesEmpty.hidden = savedFacts.length > 0;

  favoritesList.innerHTML = savedFacts
    .map((fact) => `
      <article class="saved-card">
        <span class="badge">${fact.category}</span>
        <h3>${fact.title}</h3>
        <p>${fact.body}</p>
      </article>
    `)
    .join("");
}

function renderHobbies() {
  const visibleHobbies = hobbies.filter((hobby) => state.hobbyType === "Todos" || hobby.type === state.hobbyType);

  hobbyList.innerHTML = visibleHobbies
    .map((hobby) => `
      <article class="hobby-card">
        <span class="badge">${hobby.type}</span>
        <h3>${hobby.name}</h3>
        <p>${hobby.why}</p>
        <div class="tag-row">
          <span class="mini-tag">${hobby.time}</span>
          <span class="mini-tag">${hobby.cost}</span>
        </div>
        <ol class="steps">
          ${hobby.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </article>
    `)
    .join("");
}

categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  state.currentIndex = 0;
  renderCategories();
  renderDeck();
});

deck.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (!button) {
    return;
  }

  const id = button.dataset.save;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }

  const isSaved = state.favorites.has(id);
  saveFavorites();
  button.classList.toggle("saved", isSaved);
  button.textContent = isSaved ? "ok" : "+";
  button.setAttribute("aria-label", isSaved ? "Quitar de favoritos" : "Guardar en favoritos");
  renderFavorites();
});

prevButton.addEventListener("click", () => moveCard(-1));
nextButton.addEventListener("click", () => moveCard(1));
shuffleButton.addEventListener("click", jumpToRandomCard);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    moveCard(-1);
  }

  if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") {
    moveCard(1);
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));

    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.target}`).classList.add("active");
  });
});

hobbyFilter.addEventListener("change", () => {
  state.hobbyType = hobbyFilter.value;
  renderHobbies();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

renderCategories();
renderDeck();
renderFavorites();
renderHobbies();
