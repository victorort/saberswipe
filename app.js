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

const moreFacts = [
  {
    id: "ciencia-2",
    category: "Ciencia",
    title: "Una hipotesis no es una corazonada cualquiera",
    body: "En ciencia, una hipotesis propone una explicacion que puede ponerse a prueba. Si no hay forma de comprobarla o refutarla, queda fuera del terreno cientifico.",
    extra: "La clave no es sonar inteligente, sino poder medir algo."
  },
  {
    id: "ciencia-3",
    category: "Ciencia",
    title: "La correlacion no demuestra causa",
    body: "Dos cosas pueden ocurrir a la vez sin que una cause la otra. Puede existir una tercera variable oculta o una coincidencia estadistica.",
    extra: "Pregunta util: que mecanismo conectaria realmente esos datos?"
  },
  {
    id: "ciencia-4",
    category: "Ciencia",
    title: "El error tambien informa",
    body: "Un experimento que no sale como se esperaba puede ser valioso si muestra que una explicacion era incompleta o que habia una variable no controlada.",
    extra: "Fracasar con metodo puede ahorrar anos de confusion."
  },
  {
    id: "cultura-2",
    category: "Cultura general",
    title: "La imprenta no solo hizo libros",
    body: "Tambien facilito panfletos, periodicos, mapas, biblias, manuales y propaganda. Al multiplicar copias, multiplico discusiones.",
    extra: "Cuando baja el coste de copiar ideas, cambia la sociedad."
  },
  {
    id: "cultura-3",
    category: "Cultura general",
    title: "El calendario gregoriano corrigio un desfase",
    body: "Ajusto errores acumulados del calendario juliano para acercar mejor el ano civil al ano solar. No todos los paises lo adoptaron al mismo tiempo.",
    extra: "Medir el tiempo tambien es una decision cultural."
  },
  {
    id: "cultura-4",
    category: "Cultura general",
    title: "Una lengua no es solo vocabulario",
    body: "Cada idioma arrastra formas de ordenar ideas, humor, gestos, historia y expresiones que no siempre se traducen de manera exacta.",
    extra: "Traducir bien es entender cultura, no solo palabras."
  },
  {
    id: "curioso-2",
    category: "Datos curiosos",
    title: "Los platanos son bayas botanicas",
    body: "En botanica, una baya se define por como se forma el fruto. Por esa definicion, el platano cuenta como baya, aunque en cocina no lo parezca.",
    extra: "La clasificacion cientifica y el lenguaje diario no siempre coinciden."
  },
  {
    id: "curioso-3",
    category: "Datos curiosos",
    title: "El olor de la lluvia tiene nombre",
    body: "Ese aroma caracteristico tras llover se llama petricor. Aparece por compuestos liberados desde el suelo y por aceites de algunas plantas.",
    extra: "Una palabra preciosa para una sensacion muy comun."
  },
  {
    id: "curioso-4",
    category: "Datos curiosos",
    title: "El vidrio puede ser muy resistente",
    body: "El vidrio comun se rompe por pequenas grietas y tensiones. Controlando su fabricacion, puede volverse fuerte, flexible o muy util en tecnologia.",
    extra: "Fragil no significa inutil: depende del material y del uso."
  },
  {
    id: "geo-2",
    category: "Geografia",
    title: "El Nilo fluye hacia el norte",
    body: "Aunque solemos imaginar los rios bajando hacia abajo en el mapa, lo importante es la pendiente. El Nilo avanza hacia el Mediterraneo.",
    extra: "La orientacion del mapa puede enganar la intuicion."
  },
  {
    id: "geo-3",
    category: "Geografia",
    title: "Los Andes son una cordillera enorme",
    body: "Recorren gran parte del borde occidental de Sudamerica y atraviesan varios paises. Influyen en clima, ciudades, agricultura y transporte.",
    extra: "La geografia fisica condiciona la historia humana."
  },
  {
    id: "geo-4",
    category: "Geografia",
    title: "Un pais puede tener varias capitales",
    body: "Algunos estados reparten funciones entre ciudades. Sudafrica, por ejemplo, tiene sedes distintas para funciones administrativas, legislativas y judiciales.",
    extra: "La capitalidad puede ser politica, historica o funcional."
  },
  {
    id: "capitales-2",
    category: "Capitales",
    title: "La capital de Marruecos es Rabat",
    body: "Casablanca es la ciudad mas grande y muy conocida por su actividad economica, pero la capital politica de Marruecos es Rabat.",
    extra: "Ciudad famosa y capital no siempre son la misma cosa."
  },
  {
    id: "capitales-3",
    category: "Capitales",
    title: "La capital de Suiza es Berna",
    body: "Zurich y Ginebra son muy conocidas internacionalmente, pero Berna cumple la funcion de capital federal de Suiza.",
    extra: "Suiza es buen ejemplo de pais muy descentralizado."
  },
  {
    id: "capitales-4",
    category: "Capitales",
    title: "La capital de Brasil es Brasilia",
    body: "Brasilia fue construida en el siglo XX para llevar la capital al interior del pais y equilibrar el desarrollo lejos de la costa.",
    extra: "Rio de Janeiro fue capital antes, pero ya no lo es."
  },
  {
    id: "politica-2",
    category: "Politica",
    title: "Estado y gobierno no son lo mismo",
    body: "El Estado incluye instituciones permanentes, territorio, poblacion y leyes. El gobierno es el equipo que dirige temporalmente parte de ese Estado.",
    extra: "Confundirlos puede nublar debates politicos."
  },
  {
    id: "politica-3",
    category: "Politica",
    title: "Ganar no lo legitima todo",
    body: "En democracia, ganar elecciones importa, pero tambien respetar reglas, derechos, controles y libertades. La legitimidad se sostiene con practicas continuas.",
    extra: "Las instituciones se prueban sobre todo cuando hay conflicto."
  },
  {
    id: "politica-4",
    category: "Politica",
    title: "Un sistema federal reparte poder",
    body: "En un sistema federal, regiones o estados tienen competencias propias protegidas por la constitucion. No todo depende del gobierno central.",
    extra: "Estados Unidos, Alemania y Mexico son ejemplos federales."
  },
  {
    id: "historia-2",
    category: "Historia",
    title: "La Edad Media no fue igual en todas partes",
    body: "Duro muchos siglos y tuvo comercio, universidades, arte, guerras, agricultura, ciudades y cambios regionales enormes.",
    extra: "Las etiquetas historicas simplifican periodos complejos."
  },
  {
    id: "historia-3",
    category: "Historia",
    title: "La Ruta de la Seda fue una red",
    body: "No fue un unico camino. Conecto Asia, Oriente Medio, Africa y Europa para mover bienes, ideas, religiones y tecnologias.",
    extra: "La seda era famosa, pero no era lo unico que viajaba."
  },
  {
    id: "historia-4",
    category: "Historia",
    title: "La Revolucion Industrial cambio la vida diaria",
    body: "Carbon, maquinas, fabricas, transporte y nuevas formas de trabajo transformaron produccion, ciudades, horarios y relaciones sociales.",
    extra: "No fue solo tecnologia: tambien fue cambio social."
  },
  {
    id: "religion-2",
    category: "Religion",
    title: "El budismo no se centra en un dios creador",
    body: "Muchas tradiciones budistas ponen el foco en el sufrimiento, el deseo, la conciencia, la practica y el camino hacia la liberacion.",
    extra: "No encaja del todo en categorias occidentales simples."
  },
  {
    id: "religion-3",
    category: "Religion",
    title: "El calendario religioso ordena comunidades",
    body: "Fiestas, ayunos, peregrinaciones y ritos marcan ritmos sociales. Muchas sociedades han medido el tiempo con referencias religiosas.",
    extra: "Calendario y creencias suelen ir de la mano."
  },
  {
    id: "religion-4",
    category: "Religion",
    title: "Los simbolos religiosos tienen capas",
    body: "Un mismo simbolo puede representar identidad, memoria, poder, esperanza, duelo o pertenencia. Su significado depende mucho del contexto.",
    extra: "Interpretar simbolos exige mirar historia y comunidad."
  },
  {
    id: "fisica-2",
    category: "Fisica",
    title: "La inercia explica por que cuesta cambiar movimiento",
    body: "Un objeto tiende a mantener su estado de reposo o movimiento si no actua una fuerza neta. Por eso notas un empujon cuando un coche frena.",
    extra: "Newton convirtio intuiciones diarias en leyes matematicas."
  },
  {
    id: "fisica-3",
    category: "Fisica",
    title: "La energia no desaparece",
    body: "La energia se transforma: movimiento, calor, luz, sonido o energia quimica. En sistemas cerrados, la cantidad total se conserva.",
    extra: "Lo dificil suele ser seguir a donde se ha ido."
  },
  {
    id: "fisica-4",
    category: "Fisica",
    title: "La luz se comporta como onda y particula",
    body: "Segun el experimento, la luz muestra propiedades de onda o de particula. Esta dualidad fue clave para la mecanica cuantica.",
    extra: "La realidad microscopica no siempre respeta nuestra intuicion."
  },
  {
    id: "astro-2",
    category: "Astronomia",
    title: "Una estrella nace en nubes de gas",
    body: "Las estrellas se forman cuando regiones de gas y polvo colapsan por gravedad. Al aumentar presion y temperatura, puede comenzar la fusion nuclear.",
    extra: "La gravedad es escultora a escala cosmica."
  },
  {
    id: "astro-3",
    category: "Astronomia",
    title: "Venus gira de forma muy lenta",
    body: "Venus tarda mas en girar sobre si mismo que en orbitar alrededor del Sol. Ademas, su rotacion va en sentido contrario al de muchos planetas.",
    extra: "Un dia venusiano es una rareza del sistema solar."
  },
  {
    id: "astro-4",
    category: "Astronomia",
    title: "La Luna se aleja poco a poco",
    body: "La Luna se distancia de la Tierra unos centimetros al ano por interacciones gravitatorias y mareas. Es lento, pero medible.",
    extra: "La relacion Tierra-Luna cambia con el tiempo."
  },
  {
    id: "socio-2",
    category: "Sociologia",
    title: "El capital social tambien importa",
    body: "Las redes de confianza, apoyo y contactos pueden influir en oportunidades laborales, seguridad, salud y aprendizaje.",
    extra: "No todo recurso cabe en una cuenta bancaria."
  },
  {
    id: "socio-3",
    category: "Sociologia",
    title: "Las instituciones moldean habitos",
    body: "Escuelas, empresas, familias, medios y leyes ensenan maneras de comportarse. Muchas rutinas sociales se aprenden sin darnos cuenta.",
    extra: "Lo cotidiano tambien tiene estructura."
  },
  {
    id: "socio-4",
    category: "Sociologia",
    title: "La movilidad social mide cambios de posicion",
    body: "Estudia si una persona o familia puede cambiar de nivel educativo, economico o profesional respecto a su origen.",
    extra: "Es una forma de observar oportunidades reales."
  },
  {
    id: "psico-2",
    category: "Psicologia",
    title: "La atencion es limitada",
    body: "El cerebro no procesa todo con la misma profundidad. Selecciona informacion, ignora parte del entorno y se cansa con multitarea intensa.",
    extra: "Concentrarse tambien es decidir que no mirar."
  },
  {
    id: "psico-3",
    category: "Psicologia",
    title: "El sesgo de confirmacion filtra pruebas",
    body: "Tendemos a buscar y valorar mas la informacion que confirma lo que ya creemos. Esto puede reforzar errores sin que lo notemos.",
    extra: "Una buena costumbre: buscar el mejor argumento contrario."
  },
  {
    id: "psico-4",
    category: "Psicologia",
    title: "Nombrar una emocion ayuda a regularla",
    body: "Poner palabras a lo que sentimos puede reducir confusion y facilitar respuestas mas utiles. No elimina la emocion, pero la vuelve mas manejable.",
    extra: "Decir 'estoy frustrado' ya organiza parte del caos."
  },
  {
    id: "sexo-2",
    category: "Sexologia",
    title: "La salud sexual incluye informacion y cuidado",
    body: "No trata solo de evitar riesgos. Incluye bienestar, respeto, comunicacion, placer responsable, prevencion, identidad y acceso a informacion fiable.",
    extra: "Hablar con claridad suele mejorar la seguridad y la confianza."
  },
  {
    id: "sexo-3",
    category: "Sexologia",
    title: "El deseo no funciona igual en todas las personas",
    body: "Puede variar por edad, estres, salud, vinculo, contexto, medicacion y emociones. Compararse con una norma imaginaria suele crear presion innecesaria.",
    extra: "La comunicacion honesta vale mas que adivinar."
  },
  {
    id: "sexo-4",
    category: "Sexologia",
    title: "La educacion sexual tambien previene mitos",
    body: "Aprender anatomia, consentimiento, anticoncepcion, infecciones y relaciones sanas reduce desinformacion y decisiones tomadas por miedo o presion.",
    extra: "Informacion precisa es una forma de autocuidado."
  },
  {
    id: "bio-2",
    category: "Biologia",
    title: "El ADN es una biblioteca con instrucciones",
    body: "El ADN almacena informacion para construir y regular organismos. Los genes son segmentos con funciones concretas, pero el ambiente tambien influye.",
    extra: "Biologia no es destino simple: hay interacciones."
  },
  {
    id: "bio-3",
    category: "Biologia",
    title: "Las bacterias no son siempre enemigas",
    body: "Muchas bacterias viven en nuestro cuerpo y ayudan a digerir, proteger la piel o competir contra microorganismos daninos.",
    extra: "El microbioma es parte de nuestra vida biologica."
  },
  {
    id: "bio-4",
    category: "Biologia",
    title: "La fotosintesis sostiene gran parte de la vida",
    body: "Plantas, algas y algunas bacterias convierten luz, agua y dioxido de carbono en energia quimica, liberando oxigeno como resultado.",
    extra: "Sin fotosintesis, la atmosfera y la comida serian muy distintas."
  },
  {
    id: "info-2",
    category: "Informatica",
    title: "Internet no es la web",
    body: "Internet es la red de redes que conecta dispositivos. La web es uno de sus servicios, basado en paginas y enlaces que visitas con navegador.",
    extra: "Correo, videojuegos online y mensajeria tambien usan Internet."
  },
  {
    id: "info-3",
    category: "Informatica",
    title: "Cifrar no es esconder por arte de magia",
    body: "El cifrado transforma informacion usando claves matematicas. Sin la clave adecuada, leer el mensaje deberia ser impracticable.",
    extra: "Es una base de pagos, mensajeria y seguridad web."
  },
  {
    id: "info-4",
    category: "Informatica",
    title: "Un bug puede estar en la idea",
    body: "A veces el programa hace exactamente lo que se le pidio, pero la regla estaba mal pensada. Por eso especificar bien importa tanto como programar.",
    extra: "Depurar tambien es revisar supuestos."
  },
  {
    id: "economia-2",
    category: "Economia",
    title: "El coste de oportunidad esta en cada decision",
    body: "Elegir una opcion implica renunciar a otra. El coste de oportunidad es el valor de la mejor alternativa que dejas pasar.",
    extra: "No solo se paga con dinero: tambien con tiempo y energia."
  },
  {
    id: "economia-3",
    category: "Economia",
    title: "Oferta y demanda no explican todo",
    body: "Son herramientas potentes, pero tambien importan leyes, poder de mercado, informacion, cultura, tecnologia, expectativas y desigualdad.",
    extra: "La economia real suele tener muchas capas."
  },
  {
    id: "economia-4",
    category: "Economia",
    title: "Productividad no es trabajar mas horas",
    body: "La productividad mide cuanto valor se produce con recursos dados. Puede mejorar con tecnologia, organizacion, formacion o mejores procesos.",
    extra: "Trabajar mas no siempre equivale a producir mejor."
  },
  {
    id: "filosofia-2",
    category: "Filosofia",
    title: "La etica pregunta que deberiamos hacer",
    body: "No solo describe conductas: examina razones, consecuencias, deberes, virtudes y formas de vivir mejor con otras personas.",
    extra: "Una pregunta simple puede abrir un debate enorme."
  },
  {
    id: "filosofia-3",
    category: "Filosofia",
    title: "Socrates usaba preguntas como herramienta",
    body: "El metodo socratico explora ideas haciendo preguntas que revelan contradicciones, supuestos o definiciones poco claras.",
    extra: "Pensar bien muchas veces empieza por preguntar mejor."
  },
  {
    id: "filosofia-4",
    category: "Filosofia",
    title: "El problema mente-cuerpo sigue abierto",
    body: "La filosofia de la mente pregunta como se relacionan conciencia, cerebro, experiencia subjetiva y mundo fisico.",
    extra: "Sabemos mucho del cerebro, pero la experiencia sigue siendo dificil."
  },
  {
    id: "salud-2",
    category: "Salud",
    title: "Caminar tambien cuenta como ejercicio",
    body: "La actividad fisica moderada, sostenida y frecuente puede mejorar salud cardiovascular, animo, sueno y energia.",
    extra: "Lo sostenible suele ganar a lo perfecto."
  },
  {
    id: "salud-3",
    category: "Salud",
    title: "La hidratacion depende del contexto",
    body: "No todo el mundo necesita la misma cantidad de agua. Influyen temperatura, actividad, dieta, edad y salud.",
    extra: "La sed, el color de la orina y el calor dan pistas utiles."
  },
  {
    id: "salud-4",
    category: "Salud",
    title: "El descanso mejora decisiones",
    body: "Dormir poco afecta atencion, memoria, impulsividad y regulacion emocional. Muchas decisiones parecen mas dificiles cuando estamos agotados.",
    extra: "A veces pensar mejor empieza por descansar."
  }
];

facts.push(...moreFacts);

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
  hobbyType: "Todos",
  feedLimit: 24
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
  const renderedFacts = visibleFacts.slice(0, state.feedLimit);

  feed.innerHTML = renderedFacts
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

function resetFeedPosition() {
  state.feedLimit = 24;
  renderFeed();
  feed.scrollTo({ top: 0, behavior: "smooth" });
}

function loadMoreFeedCards() {
  const visibleFacts = getVisibleFacts();
  if (state.feedLimit >= visibleFacts.length) {
    return;
  }

  const previousHeight = feed.scrollHeight;
  state.feedLimit += 18;
  renderFeed();
  feed.scrollTop += feed.scrollHeight - previousHeight;
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

  resetFeedPosition();
}

categoryStrip.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  renderCategories();
  resetFeedPosition();
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

feed.addEventListener("scroll", () => {
  const distanceToBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight;
  if (distanceToBottom < feed.clientHeight * 1.5) {
    loadMoreFeedCards();
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
