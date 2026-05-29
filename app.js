const facts = [
  {
    id: "ciencia-1",
    category: "Ciencia",
    title: "El metodo cientifico no prueba verdades absolutas",
    body: "La ciencia funciona acumulando evidencia y descartando explicaciones debiles. Una teoria fuerte no es intocable: es la que mejor resiste pruebas, predice resultados y puede corregirse con datos nuevos.",
    extra: "Idea clave: una buena pregunta cientifica debe poder ponerse a prueba."
  },
  {
    id: "cultura-1",
    category: "Cultura general",
    title: "La imprenta cambio la velocidad del mundo",
    body: "La imprenta de tipos moviles permitio copiar libros mucho mas rapido que a mano. Eso abarato el conocimiento y ayudo a expandir alfabetizacion, ciencia, religion, politica y educacion.",
    extra: "Piensa en ella como una red social lenta, pero revolucionaria."
  },
  {
    id: "curioso-1",
    category: "Datos curiosos",
    title: "Los mapas no son neutrales",
    body: "Todo mapa deforma algo: areas, distancias, formas o direcciones. La proyeccion de Mercator sirve muy bien para navegar, pero agranda mucho las zonas cercanas a los polos.",
    extra: "Por eso Groenlandia parece enorme aunque Africa sea muchisimo mayor."
  },
  {
    id: "geo-1",
    category: "Geografia",
    title: "Estambul esta en dos continentes",
    body: "La ciudad turca se extiende a ambos lados del Bosforo: una parte esta en Europa y otra en Asia. Su posicion explica gran parte de su importancia historica y comercial.",
    extra: "El Bosforo conecta el mar Negro con el mar de Marmara."
  },
  {
    id: "politica-1",
    category: "Politica",
    title: "Separar poderes limita abusos",
    body: "En muchos sistemas democraticos, el poder se reparte entre ejecutivo, legislativo y judicial. La idea es que ninguna institucion concentre toda la autoridad sin controles.",
    extra: "No siempre funciona perfecto, pero es una arquitectura pensada para frenar excesos."
  },
  {
    id: "historia-1",
    category: "Historia",
    title: "La historia no avanza en linea recta",
    body: "Los cambios historicos suelen mezclar tecnologia, economia, clima, ideas, conflictos y azar. Una revolucion rara vez nace de una sola causa.",
    extra: "Preguntar 'que factores se juntaron?' suele dar mejores respuestas que buscar una unica razon."
  },
  {
    id: "religion-1",
    category: "Religion",
    title: "Las religiones tambien son sistemas culturales",
    body: "Ademas de creencias espirituales, muchas religiones organizan calendarios, rituales, arte, normas sociales, comidas, arquitectura y formas de pertenencia comunitaria.",
    extra: "Estudiarlas ayuda a entender historia, politica, filosofia y simbolos."
  },
  {
    id: "fisica-1",
    category: "Fisica",
    title: "La gravedad no es solo una fuerza en relatividad",
    body: "En la relatividad general, la gravedad puede entenderse como curvatura del espacio-tiempo. Los objetos siguen trayectorias condicionadas por esa geometria.",
    extra: "Una imagen util: la masa cambia el 'terreno' por el que se mueven las cosas."
  },
  {
    id: "astro-1",
    category: "Astronomia",
    title: "Mirar lejos es mirar al pasado",
    body: "La luz tarda tiempo en viajar. Cuando observas una estrella a 100 anos luz, ves la luz que salio de alli hace aproximadamente 100 anos.",
    extra: "Los telescopios son, en cierto modo, maquinas de mirar historia cosmica."
  },
  {
    id: "socio-1",
    category: "Sociologia",
    title: "Lo normal tambien se aprende",
    body: "Muchas cosas que parecen naturales son normas sociales aprendidas: saludos, horarios, formas de vestir, distancia personal o expectativas de genero.",
    extra: "La sociologia pregunta quien define lo normal y a quien beneficia."
  },
  {
    id: "psico-1",
    category: "Psicologia",
    title: "La memoria reconstruye",
    body: "Recordar no es reproducir una grabacion exacta. El cerebro reconstruye recuerdos con fragmentos, emociones, contexto y expectativas.",
    extra: "Por eso dos personas pueden recordar distinto el mismo momento."
  },
  {
    id: "sexo-1",
    category: "Sexologia",
    title: "El consentimiento debe ser claro y reversible",
    body: "Una relacion sana necesita comunicacion, respeto y consentimiento libre. Consentir una cosa no significa consentirlo todo, y cualquier persona puede cambiar de opinion.",
    extra: "La educacion sexual tambien trata de limites, cuidado, salud y confianza."
  },
  {
    id: "bio-1",
    category: "Biologia",
    title: "La evolucion no busca perfeccion",
    body: "La seleccion natural favorece rasgos que ayudan a sobrevivir y reproducirse en un ambiente concreto. No disena organismos perfectos; trabaja con variaciones disponibles.",
    extra: "Un rasgo util en un contexto puede ser inutil o costoso en otro."
  },
  {
    id: "info-1",
    category: "Informatica",
    title: "Un algoritmo es una receta precisa",
    body: "Un algoritmo describe pasos para resolver un problema. Puede ordenar datos, buscar rutas, recomendar contenido o comprimir imagenes.",
    extra: "La parte dificil suele ser definir bien el problema antes de programar la solucion."
  },
  {
    id: "capitales-1",
    category: "Capitales",
    title: "Canada no tiene capital en Toronto",
    body: "La capital de Canada es Ottawa. Toronto es la ciudad mas poblada del pais, pero capital politica y ciudad mas grande no siempre coinciden.",
    extra: "Otro ejemplo: Australia tiene Canberra, no Sidney ni Melbourne."
  },
  {
    id: "economia-1",
    category: "Economia",
    title: "Inflacion no significa que todo suba igual",
    body: "La inflacion mide un aumento general de precios, pero algunos productos pueden subir mucho, otros poco y otros incluso bajar.",
    extra: "Por eso la inflacion personal puede sentirse distinta segun en que gastes."
  },
  {
    id: "filosofia-1",
    category: "Filosofia",
    title: "Una falacia puede sonar convincente",
    body: "Una falacia es un razonamiento defectuoso que parece valido. Detectarlas ayuda a pensar mejor y a no caer en argumentos llamativos pero debiles.",
    extra: "Ejemplo comun: atacar a la persona en vez de responder a su argumento."
  },
  {
    id: "salud-1",
    category: "Salud",
    title: "Dormir tambien consolida aprendizaje",
    body: "Durante el sueno, el cerebro procesa informacion, regula emociones y fortalece ciertos recuerdos. Estudiar sin descansar suele rendir peor.",
    extra: "Aprender no es solo meter datos: tambien hay que dejar que se asienten."
  }
];

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
      "Haz formas simples: cuña, cuchara pequena o colgante.",
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

const categoryOrder = [
  "Todos",
  "Ciencia",
  "Cultura general",
  "Datos curiosos",
  "Geografia",
  "Capitales",
  "Politica",
  "Historia",
  "Religion",
  "Fisica",
  "Astronomia",
  "Sociologia",
  "Psicologia",
  "Sexologia",
  "Biologia",
  "Informatica",
  "Economia",
  "Filosofia",
  "Salud"
];

const state = {
  category: "Todos",
  favorites: new Set(JSON.parse(localStorage.getItem("saberswipe:favorites") || "[]")),
  hobbyType: "Todos"
};

const feed = document.querySelector("#feed");
const categoryStrip = document.querySelector("#categoryStrip");
const favoritesList = document.querySelector("#favoritesList");
const favoritesEmpty = document.querySelector("#favoritesEmpty");
const hobbyList = document.querySelector("#hobbyList");
const hobbyFilter = document.querySelector("#hobbyFilter");
const shuffleButton = document.querySelector("#shuffleButton");

function saveFavorites() {
  localStorage.setItem("saberswipe:favorites", JSON.stringify([...state.favorites]));
}

function getVisibleFacts() {
  if (state.category === "Todos") {
    return facts;
  }

  return facts.filter((fact) => fact.category === state.category);
}

function renderCategories() {
  categoryStrip.innerHTML = categoryOrder
    .map((category) => {
      const active = category === state.category ? " active" : "";
      return `<button class="pill${active}" type="button" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function renderFeed() {
  const visibleFacts = getVisibleFacts();

  feed.innerHTML = visibleFacts
    .map((fact, index) => {
      const isSaved = state.favorites.has(fact.id);
      return `
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
              <span class="mini-tag">${index + 1} de ${visibleFacts.length}</span>
              <span class="mini-tag">Lectura rapida</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
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

function shuffleFacts() {
  for (let index = facts.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [facts[index], facts[swapIndex]] = [facts[swapIndex], facts[index]];
  }

  renderFeed();
  feed.scrollTo({ top: 0, behavior: "smooth" });
}

categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  renderCategories();
  renderFeed();
  feed.scrollTo({ top: 0, behavior: "smooth" });
});

feed.addEventListener("click", (event) => {
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

  saveFavorites();
  renderFeed();
  renderFavorites();
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

shuffleButton.addEventListener("click", shuffleFacts);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

renderCategories();
renderFeed();
renderFavorites();
renderHobbies();
