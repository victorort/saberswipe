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

const scienceDeepDiveFacts = [
  { id: "ciencia-101", category: "Ciencia", title: "La ciencia cambia cuando aparecen mejores pruebas", body: "Una idea cientifica fuerte puede revisarse si nuevos datos la contradicen. Esa capacidad de corregirse es una de sus mayores fortalezas.", extra: "Cambiar de opinion con evidencia no es debilidad: es metodo." },
  { id: "ciencia-102", category: "Ciencia", title: "Medir bien es parte del descubrimiento", body: "Muchas revoluciones cientificas llegaron cuando se pudo medir algo con mas precision. Nuevos instrumentos abren preguntas que antes ni siquiera podian verse.", extra: "Telescopios, microscopios y sensores cambian lo que sabemos." },
  { id: "ciencia-103", category: "Ciencia", title: "Un modelo no es la realidad completa", body: "Un modelo cientifico simplifica el mundo para entenderlo mejor. Puede ser util aunque no capture todos los detalles.", extra: "Un mapa no es el territorio, pero ayuda a orientarse." },
  { id: "ciencia-104", category: "Ciencia", title: "La revision por pares no garantiza perfeccion", body: "Que un estudio sea revisado por expertos mejora el control de calidad, pero no elimina errores. La ciencia tambien necesita replicacion y debate.", extra: "Un articulo no es el final: es parte de una conversacion." },
  { id: "ciencia-105", category: "Ciencia", title: "Replicar un experimento es clave", body: "Si un resultado solo aparece una vez, puede ser casualidad o error. Repetirlo en condiciones parecidas aumenta la confianza.", extra: "La ciencia se fortalece cuando otros pueden comprobarla." },
  { id: "ciencia-106", category: "Ciencia", title: "El tamano de muestra importa", body: "Estudiar pocas personas, animales u objetos puede dar conclusiones fragiles. Muestras mas grandes suelen reducir el peso del azar.", extra: "No es lo mismo preguntar a 10 personas que a 10.000." },
  { id: "ciencia-107", category: "Ciencia", title: "El sesgo puede entrar en un experimento", body: "Las expectativas del investigador pueden influir en como mide o interpreta datos. Por eso existen controles, protocolos y estudios ciegos.", extra: "Un buen metodo protege incluso de nuestros propios sesgos." },
  { id: "ciencia-108", category: "Ciencia", title: "Un grupo control sirve para comparar", body: "Sin comparacion, es dificil saber si un cambio se debe al tratamiento o a otra causa. El grupo control ayuda a separar efecto real de coincidencia.", extra: "Comparar bien evita conclusiones rapidas." },
  { id: "ciencia-109", category: "Ciencia", title: "Doble ciego significa menos influencia humana", body: "En un estudio doble ciego, ni participantes ni investigadores directos saben quien recibe que tratamiento. Eso reduce expectativas y sesgos.", extra: "Es muy usado en pruebas medicas." },
  { id: "ciencia-110", category: "Ciencia", title: "La estadistica no elimina la incertidumbre", body: "La estadistica ayuda a estimar probabilidades y patrones. Aun asi, siempre queda un margen de duda que debe comunicarse.", extra: "Ciencia seria no significa certeza absoluta." },
  { id: "ciencia-111", category: "Ciencia", title: "Un p-valor no mide importancia", body: "Un resultado puede ser estadisticamente significativo y aun asi tener un efecto pequeno. Hay que mirar tambien el tamano del efecto.", extra: "Significativo no siempre significa relevante." },
  { id: "ciencia-112", category: "Ciencia", title: "La incertidumbre puede ser informacion", body: "Decir cuanto no sabemos es parte de una medicion honesta. Los rangos y margenes de error ayudan a entender la calidad del dato.", extra: "Un numero sin contexto puede enganar." },
  { id: "ciencia-113", category: "Ciencia", title: "La energia se mide en julios", body: "El julio es una unidad del Sistema Internacional para medir energia, trabajo y calor. Permite comparar fenomenos muy distintos con una misma idea.", extra: "Calor, movimiento y electricidad pueden expresarse como energia." },
  { id: "ciencia-114", category: "Ciencia", title: "La temperatura mide agitacion promedio", body: "A escala microscopica, la temperatura se relaciona con el movimiento promedio de las particulas. Mas temperatura suele significar mas agitacion.", extra: "No es lo mismo temperatura que calor." },
  { id: "ciencia-115", category: "Ciencia", title: "El calor es energia en transito", body: "El calor fluye de zonas mas calientes a zonas mas frias cuando hay diferencia de temperatura. No es una sustancia guardada dentro de un objeto.", extra: "El calor describe transferencia, no solo estado." },
  { id: "ciencia-116", category: "Ciencia", title: "Los atomos son casi todo espacio vacio", body: "El nucleo concentra casi toda la masa, mientras los electrones ocupan regiones mucho mas amplias. La materia parece solida por fuerzas electricas.", extra: "Lo cotidiano es mas raro de lo que parece." },
  { id: "ciencia-117", category: "Ciencia", title: "Los electrones no orbitan como planetas", body: "En mecanica cuantica, los electrones se describen con orbitales y probabilidades. La imagen de mini planetas es util al inicio, pero limitada.", extra: "Los modelos escolares son escalones, no destino final." },
  { id: "ciencia-118", category: "Ciencia", title: "El agua es especial por sus enlaces", body: "Las moleculas de agua forman puentes de hidrogeno. Eso ayuda a explicar su tension superficial, su punto de ebullicion y su papel biologico.", extra: "Una molecula simple tiene consecuencias enormes." },
  { id: "ciencia-119", category: "Ciencia", title: "El hielo flota porque es menos denso", body: "Al congelarse, el agua forma una estructura que ocupa mas volumen. Por eso el hielo flota sobre agua liquida.", extra: "Si no flotara, muchos ecosistemas acuaticos serian distintos." },
  { id: "ciencia-120", category: "Ciencia", title: "El pH mide acidez", body: "La escala de pH indica que tan acida o basica es una disolucion. Valores bajos son acidos y valores altos son basicos.", extra: "La escala es logaritmica: cada punto cambia mucho." },
  { id: "ciencia-121", category: "Ciencia", title: "Las enzimas aceleran reacciones", body: "Las enzimas son moleculas biologicas que facilitan reacciones quimicas sin consumirse en el proceso. La vida depende de ellas.", extra: "Sin enzimas, muchas reacciones serian demasiado lentas." },
  { id: "ciencia-122", category: "Ciencia", title: "El ADN se copia antes de dividir una celula", body: "Para que una celula produzca dos celulas hijas, necesita duplicar su informacion genetica. La copia no es perfecta, pero existen sistemas de correccion.", extra: "Algunos errores de copia son mutaciones." },
  { id: "ciencia-123", category: "Ciencia", title: "Una mutacion no siempre es mala", body: "Las mutaciones son cambios en el ADN. Pueden ser perjudiciales, neutras o, en ciertos contextos, beneficiosas.", extra: "La evolucion necesita variacion para actuar." },
  { id: "ciencia-124", category: "Ciencia", title: "La seleccion natural no tiene intencion", body: "No elige con un plan. Simplemente, ciertos rasgos ayudan mas a sobrevivir y reproducirse en un ambiente concreto.", extra: "La naturaleza no persigue objetivos humanos." },
  { id: "ciencia-125", category: "Ciencia", title: "La biodiversidad protege ecosistemas", body: "Ecosistemas con mas variedad de especies pueden resistir mejor cambios y perturbaciones. Cada especie cumple relaciones dentro de una red.", extra: "Perder especies puede romper equilibrios invisibles." },
  { id: "ciencia-126", category: "Ciencia", title: "Los hongos no son plantas", body: "Los hongos forman su propio reino. No hacen fotosintesis y se alimentan absorbiendo nutrientes del entorno.", extra: "Estan mas cerca de los animales que de las plantas." },
  { id: "ciencia-127", category: "Ciencia", title: "Las plantas tambien se comunican", body: "Pueden liberar sustancias quimicas cuando sufren ataques o cambios ambientales. Otras plantas y organismos pueden responder a esas senales.", extra: "No hablan, pero intercambian informacion." },
  { id: "ciencia-128", category: "Ciencia", title: "El suelo esta vivo", body: "Un suelo sano contiene bacterias, hongos, pequenos animales, raices y materia organica. No es solo polvo bajo los pies.", extra: "La fertilidad depende de una comunidad entera." },
  { id: "ciencia-129", category: "Ciencia", title: "La atmosfera tiene capas", body: "Troposfera, estratosfera, mesosfera, termosfera y exosfera tienen propiedades distintas. La mayor parte del clima ocurre en la troposfera.", extra: "Vivir bajo aire parece simple, pero es una estructura compleja." },
  { id: "ciencia-130", category: "Ciencia", title: "El ozono puede ayudar o danar", body: "En la estratosfera, el ozono protege de radiacion ultravioleta. Cerca del suelo, puede ser contaminante y afectar la salud.", extra: "La ubicacion cambia el significado quimico." },
  { id: "ciencia-131", category: "Ciencia", title: "El clima no es lo mismo que el tiempo", body: "El tiempo describe condiciones de dias concretos. El clima resume patrones de largo plazo en una region.", extra: "Un dia frio no niega una tendencia climatica." },
  { id: "ciencia-132", category: "Ciencia", title: "El efecto invernadero natural permite vida", body: "Gases como vapor de agua, dioxido de carbono y metano retienen parte del calor terrestre. Sin ese efecto, la Tierra seria mucho mas fria.", extra: "El problema es intensificarlo demasiado." },
  { id: "ciencia-133", category: "Ciencia", title: "El carbono circula por varios reservorios", body: "El carbono pasa por atmosfera, oceanos, seres vivos, suelos y rocas. Actividades humanas pueden alterar esos flujos.", extra: "Un ciclo lento puede descompensarse rapido." },
  { id: "ciencia-134", category: "Ciencia", title: "Los oceanos absorben mucho calor", body: "El agua tiene alta capacidad calorifica, asi que los oceanos almacenan gran parte del calor extra del planeta.", extra: "Eso influye en clima, corrientes y ecosistemas marinos." },
  { id: "ciencia-135", category: "Ciencia", title: "La sal cambia el punto de congelacion", body: "Disolver sal en agua dificulta que se forme hielo a cero grados. Por eso se usa en carreteras heladas.", extra: "Las sustancias disueltas cambian propiedades del liquido." },
  { id: "ciencia-136", category: "Ciencia", title: "La presion aumenta bajo el agua", body: "Cuanto mas profundo estas, mas agua hay encima empujando. La presion aumenta rapidamente con la profundidad.", extra: "Por eso bucear exige tecnica y cuidado." },
  { id: "ciencia-137", category: "Ciencia", title: "El sonido necesita un medio", body: "El sonido es una vibracion que viaja por aire, agua u otros materiales. En el vacio no puede propagarse como en una atmosfera.", extra: "En el espacio no hay explosiones sonoras como en las peliculas." },
  { id: "ciencia-138", category: "Ciencia", title: "La luz visible es una pequena parte del espectro", body: "Rayos gamma, rayos X, ultravioleta, infrarrojo, microondas y radio tambien son radiacion electromagnetica.", extra: "Nuestros ojos ven solo una ventana estrecha." },
  { id: "ciencia-139", category: "Ciencia", title: "El color depende de la luz reflejada", body: "Vemos un objeto de cierto color porque refleja algunas longitudes de onda y absorbe otras. La iluminacion puede cambiar como percibimos ese color.", extra: "Color es fisica y percepcion a la vez." },
  { id: "ciencia-140", category: "Ciencia", title: "La fotosintesis no crea energia de la nada", body: "Convierte energia luminosa en energia quimica almacenada en moleculas. Es una transformacion, no una creacion magica.", extra: "La vida aprovecha flujos de energia." },
  { id: "ciencia-141", category: "Ciencia", title: "La respiracion celular libera energia util", body: "Las celulas transforman nutrientes para obtener energia en una forma manejable. El oxigeno suele participar como aceptor final de electrones.", extra: "Comer no da energia directamente: hay que procesarla." },
  { id: "ciencia-142", category: "Ciencia", title: "Las mitocondrias tienen ADN propio", body: "Estas estructuras celulares producen energia y conservan material genetico propio, relacionado con su origen evolutivo.", extra: "La teoria endosimbiotica explica esta pista." },
  { id: "ciencia-143", category: "Ciencia", title: "Los virus estan en la frontera de lo vivo", body: "Necesitan celulas para replicarse y no tienen metabolismo propio completo. Por eso su clasificacion como seres vivos es debatida.", extra: "Son simples, pero biologicamente poderosos." },
  { id: "ciencia-144", category: "Ciencia", title: "Las vacunas entrenan al sistema inmune", body: "Presentan al cuerpo una version segura o una parte de un patogeno para que aprenda a responder mejor en el futuro.", extra: "La memoria inmunitaria es aprendizaje biologico." },
  { id: "ciencia-145", category: "Ciencia", title: "Los antibioticos no sirven contra virus", body: "Los antibioticos atacan bacterias o procesos bacterianos. Usarlos contra infecciones virales no funciona y favorece resistencias.", extra: "Usar bien antibioticos protege a todos." },
  { id: "ciencia-146", category: "Ciencia", title: "La resistencia bacteriana evoluciona", body: "Cuando algunas bacterias sobreviven a un antibiotico, pueden multiplicarse y transmitir rasgos resistentes. Es seleccion natural en accion.", extra: "La evolucion tambien ocurre en hospitales." },
  { id: "ciencia-147", category: "Ciencia", title: "El sistema inmune tambien puede equivocarse", body: "En alergias o enfermedades autoinmunes, defensas del cuerpo responden de forma excesiva o contra tejidos propios.", extra: "Defenderse bien exige equilibrio." },
  { id: "ciencia-148", category: "Ciencia", title: "El cerebro consume mucha energia", body: "Aunque pesa poco comparado con el cuerpo, el cerebro usa una parte importante de la energia diaria para mantener actividad y comunicacion neuronal.", extra: "Pensar tiene coste biologico." },
  { id: "ciencia-149", category: "Ciencia", title: "Las neuronas se comunican con senales electricas y quimicas", body: "Dentro de la neurona viajan impulsos electricos. Entre neuronas, muchas senales pasan mediante neurotransmisores.", extra: "La mente emerge de redes muy activas." },
  { id: "ciencia-150", category: "Ciencia", title: "La plasticidad cerebral permite aprender", body: "El cerebro cambia conexiones con experiencia, practica y memoria. Aprender fisicamente modifica redes neuronales.", extra: "Practicar deja huella biologica." },
  { id: "ciencia-151", category: "Ciencia", title: "Dormir limpia y reorganiza", body: "Durante el sueno, el cerebro consolida recuerdos, regula emociones y realiza procesos de mantenimiento. No es tiempo perdido.", extra: "Descansar tambien es trabajar por dentro." },
  { id: "ciencia-152", category: "Ciencia", title: "La gravedad actua a grandes escalas", body: "Aunque es debil comparada con otras fuerzas, siempre atrae y domina planetas, estrellas, galaxias y estructuras cosmicas.", extra: "Lo pequeno tiene otras reglas dominantes." },
  { id: "ciencia-153", category: "Ciencia", title: "La masa y el peso no son lo mismo", body: "La masa mide cantidad de materia. El peso es la fuerza gravitatoria sobre esa masa y cambia segun el lugar.", extra: "En la Luna pesarias menos, pero tu masa seria igual." },
  { id: "ciencia-154", category: "Ciencia", title: "La aceleracion no es solo ir mas rapido", body: "Acelerar significa cambiar velocidad, y la velocidad incluye direccion. Girar tambien implica aceleracion aunque la rapidez sea constante.", extra: "Cambiar de direccion tambien cuenta." },
  { id: "ciencia-155", category: "Ciencia", title: "La friccion transforma movimiento en calor", body: "Cuando superficies rozan, parte de la energia mecanica se dispersa como calor y sonido. Por eso las manos se calientan al frotarlas.", extra: "La energia sigue ahi, pero en otra forma." },
  { id: "ciencia-156", category: "Ciencia", title: "La electricidad es movimiento de cargas", body: "En un circuito, cargas electricas se desplazan por materiales conductores. La tension empuja y la resistencia dificulta el paso.", extra: "Voltaje, corriente y resistencia estan conectados." },
  { id: "ciencia-157", category: "Ciencia", title: "Un iman tiene campos invisibles", body: "Los campos magneticos ejercen fuerzas sobre ciertos materiales y cargas en movimiento. Aunque no se vean, pueden medirse por sus efectos.", extra: "Las limaduras de hierro revelan el dibujo del campo." },
  { id: "ciencia-158", category: "Ciencia", title: "Electricidad y magnetismo estan unidos", body: "Una corriente electrica genera magnetismo, y campos magneticos cambiantes pueden inducir corriente. Esa relacion sostiene motores y generadores.", extra: "La tecnologia moderna vive de esa union." },
  { id: "ciencia-159", category: "Ciencia", title: "La entropia mide dispersar energia y orden", body: "La entropia se relaciona con cuantas formas microscopicas puede tener un sistema. En procesos naturales, tiende a aumentar.", extra: "Romper un vaso es mas facil que reconstruirlo solo." },
  { id: "ciencia-160", category: "Ciencia", title: "La materia puede cambiar de estado", body: "Solido, liquido, gas y plasma dependen de energia, presion y organizacion de particulas. No son identidades fijas.", extra: "El plasma es comun en estrellas y relampagos." },
  { id: "ciencia-161", category: "Ciencia", title: "Los cristales tienen orden interno", body: "En un cristal, atomos o moleculas siguen patrones repetidos. Esa estructura explica propiedades como forma, brillo o dureza.", extra: "La belleza visible viene de orden invisible." },
  { id: "ciencia-162", category: "Ciencia", title: "La quimica organica estudia compuestos de carbono", body: "El carbono forma cadenas y estructuras muy variadas. Esa versatilidad es base de moleculas biologicas y muchos materiales.", extra: "El carbono es un constructor excepcional." },
  { id: "ciencia-163", category: "Ciencia", title: "Los catalizadores reducen barreras", body: "Un catalizador acelera una reaccion al ofrecer un camino mas facil. No cambia el resultado final, pero si la velocidad.", extra: "En industria, ahorrar energia puede depender de catalizadores." },
  { id: "ciencia-164", category: "Ciencia", title: "La tabla periodica ordena patrones", body: "Los elementos se organizan por numero atomico y propiedades. Su estructura permite predecir comportamientos quimicos.", extra: "No es una lista: es un mapa de la materia." },
  { id: "ciencia-165", category: "Ciencia", title: "Los isotopos tienen distinto numero de neutrones", body: "Un mismo elemento puede tener atomos con diferente cantidad de neutrones. Algunos isotopos son estables y otros radiactivos.", extra: "Carbono-14 sirve para datar restos organicos." },
  { id: "ciencia-166", category: "Ciencia", title: "La radiactividad es desintegracion nuclear", body: "Algunos nucleos atomicos son inestables y emiten particulas o radiacion al transformarse. Puede ser peligrosa o util segun dosis y control.", extra: "Medicina, energia y datacion usan radiactividad." },
  { id: "ciencia-167", category: "Ciencia", title: "La fusion alimenta estrellas", body: "En el interior de estrellas, nucleos ligeros se unen y liberan energia. Ese proceso produce luz y calor durante millones o miles de millones de anos.", extra: "El Sol brilla por fusion nuclear." },
  { id: "ciencia-168", category: "Ciencia", title: "La fision divide nucleos pesados", body: "En la fision, un nucleo grande se rompe en partes mas pequenas liberando energia. Es la base de centrales nucleares actuales.", extra: "Controlar la reaccion es la clave tecnologica." },
  { id: "ciencia-169", category: "Ciencia", title: "Los fosiles son evidencia historica", body: "Restos, huellas o marcas preservadas permiten reconstruir organismos y ambientes del pasado. No todos los seres vivos fosilizan con la misma facilidad.", extra: "El registro fosil es valioso, pero incompleto." },
  { id: "ciencia-170", category: "Ciencia", title: "La geologia lee capas de tiempo", body: "Las rocas sedimentarias pueden acumularse en capas. Su orden, composicion y fosiles ayudan a reconstruir la historia de la Tierra.", extra: "El planeta guarda archivo en piedra." },
  { id: "ciencia-171", category: "Ciencia", title: "Las placas tectonicas se mueven", body: "La corteza terrestre esta dividida en placas que se desplazan lentamente. Sus choques y separaciones forman montanas, volcanes y terremotos.", extra: "La Tierra parece quieta, pero se mueve." },
  { id: "ciencia-172", category: "Ciencia", title: "Los terremotos liberan energia acumulada", body: "Las fallas acumulan tension cuando bloques de roca se atascan. Al romperse o deslizarse, liberan energia en ondas sismicas.", extra: "No se pueden predecir con exactitud, pero si estudiar riesgos." },
  { id: "ciencia-173", category: "Ciencia", title: "Los volcanes reciclan material interno", body: "El magma puede ascender desde el interior terrestre y salir como lava, gases y cenizas. Tambien construye nuevos suelos con el tiempo.", extra: "Destruccion y creacion pueden venir del mismo proceso." },
  { id: "ciencia-174", category: "Ciencia", title: "La erosion es lenta pero poderosa", body: "Agua, viento, hielo y gravedad desgastan rocas y transportan sedimentos. Con tiempo suficiente, cambian paisajes enteros.", extra: "Lo suave puede vencer a lo duro si tiene tiempo." },
  { id: "ciencia-175", category: "Ciencia", title: "Los acuiferos guardan agua subterranea", body: "Un acuifero es una formacion geologica que almacena y transmite agua. Muchas poblaciones dependen de ellos para beber y regar.", extra: "El agua invisible tambien es recurso critico." },
  { id: "ciencia-176", category: "Ciencia", title: "La salinidad afecta corrientes oceanicas", body: "Diferencias de temperatura y salinidad cambian la densidad del agua. Eso ayuda a mover corrientes profundas.", extra: "El oceano funciona como una cinta transportadora gigante." },
  { id: "ciencia-177", category: "Ciencia", title: "El metodo cientifico no siempre es lineal", body: "En libros parece una receta fija, pero en la practica hay idas y vueltas entre preguntas, datos, errores, modelos y nuevas pruebas.", extra: "Investigar es mas exploracion que autopista." },
  { id: "ciencia-178", category: "Ciencia", title: "La ciencia necesita comunicacion clara", body: "Un hallazgo mal explicado puede malinterpretarse o perder impacto. Comunicar bien es parte de hacer que el conocimiento sirva.", extra: "Entender tambien depende de como se cuenta." },
  { id: "ciencia-179", category: "Ciencia", title: "La tecnologia aplica conocimiento, pero tambien lo crea", body: "Herramientas nuevas permiten experimentos nuevos. A veces una tecnologia abre una rama entera de investigacion.", extra: "Ciencia y tecnologia se empujan mutuamente." },
  { id: "ciencia-180", category: "Ciencia", title: "La inteligencia artificial aprende patrones", body: "Muchos sistemas de IA ajustan parametros al analizar datos. No entienden como una persona, pero pueden detectar regularidades utiles.", extra: "Un buen resultado depende mucho de buenos datos." },
  { id: "ciencia-181", category: "Ciencia", title: "Los datos pueden estar sesgados", body: "Si los datos vienen de una muestra incompleta o injusta, las conclusiones tambien pueden serlo. Mas datos no siempre significa mejores datos.", extra: "Cantidad sin calidad puede amplificar errores." },
  { id: "ciencia-182", category: "Ciencia", title: "La causalidad exige mecanismos y pruebas", body: "Para afirmar que algo causa otra cosa, conviene mostrar relacion temporal, descartar alternativas y explicar un mecanismo plausible.", extra: "Causa es una palabra fuerte: hay que ganarsela." },
  { id: "ciencia-183", category: "Ciencia", title: "La ciencia ciudadana suma observaciones", body: "Personas no profesionales pueden ayudar recogiendo datos de aves, clima, estrellas, contaminacion o biodiversidad.", extra: "Muchas miradas pueden producir grandes mapas." },
  { id: "ciencia-184", category: "Ciencia", title: "La taxonomia ordena seres vivos", body: "Clasificar organismos ayuda a estudiar parentescos, diferencias y evolucion. Las categorias cambian cuando aparece nueva evidencia genetica.", extra: "Nombrar bien ayuda a pensar bien." },
  { id: "ciencia-185", category: "Ciencia", title: "El microscopio revelo mundos invisibles", body: "Antes de observar celulas y microorganismos, muchas enfermedades y procesos biologicos eran misteriosos. Ver pequeno cambio la medicina.", extra: "Una lente puede transformar una civilizacion." },
  { id: "ciencia-186", category: "Ciencia", title: "La teoria germinal explico muchas infecciones", body: "Comprender que microorganismos pueden causar enfermedad cambio higiene, cirugia, saneamiento y medicina moderna.", extra: "Lavarse las manos fue una revolucion cientifica." },
  { id: "ciencia-187", category: "Ciencia", title: "La homeostasis mantiene equilibrio interno", body: "El cuerpo regula temperatura, glucosa, agua y muchas variables para funcionar. No es quietud: es ajuste constante.", extra: "Vivir es equilibrar cambios." },
  { id: "ciencia-188", category: "Ciencia", title: "Las hormonas son mensajeros quimicos", body: "Viajan por la sangre y coordinan funciones como crecimiento, metabolismo, estres, reproduccion y sueno.", extra: "Pequenas cantidades pueden tener grandes efectos." },
  { id: "ciencia-189", category: "Ciencia", title: "La sangre transporta mucho mas que oxigeno", body: "Tambien mueve nutrientes, hormonas, defensas, desechos y calor. Es una red logistica dentro del cuerpo.", extra: "Cada latido reparte informacion y recursos." },
  { id: "ciencia-190", category: "Ciencia", title: "El higado es una fabrica quimica", body: "Procesa nutrientes, detoxifica sustancias, produce bilis y almacena reservas. Es esencial para el metabolismo.", extra: "No es un filtro simple: es un laboratorio." },
  { id: "ciencia-191", category: "Ciencia", title: "Los rinones regulan la composicion de la sangre", body: "Filtran desechos, ajustan agua, sales y acidez. Tambien influyen en presion arterial y produccion de globulos rojos.", extra: "Filtrar es solo una parte de su trabajo." },
  { id: "ciencia-192", category: "Ciencia", title: "El sistema digestivo tambien tiene neuronas", body: "El intestino posee una red nerviosa propia que coordina movimientos y secreciones. Se comunica con el cerebro constantemente.", extra: "Por eso se habla del eje intestino-cerebro." },
  { id: "ciencia-193", category: "Ciencia", title: "La genetica no predice todo", body: "Los genes influyen, pero ambiente, azar, desarrollo y habitos tambien importan. Muchos rasgos son resultado de interacciones.", extra: "El ADN no es un guion cerrado." },
  { id: "ciencia-194", category: "Ciencia", title: "La epigenetica regula actividad de genes", body: "Cambios quimicos pueden modificar que genes se activan o silencian sin alterar la secuencia del ADN.", extra: "No todo cambio hereditario simple esta en las letras del ADN." },
  { id: "ciencia-195", category: "Ciencia", title: "Los experimentos mentales tambien ayudan", body: "En fisica y filosofia de la ciencia, imaginar situaciones extremas puede revelar contradicciones o consecuencias de una teoria.", extra: "Pensar con precision tambien es herramienta cientifica." },
  { id: "ciencia-196", category: "Ciencia", title: "La ciencia avanza con desacuerdos productivos", body: "El debate entre expertos puede detectar fallos, mejorar modelos y abrir nuevas preguntas. No todo desacuerdo vale igual: importa la evidencia.", extra: "Discutir bien es parte del conocimiento." },
  { id: "ciencia-197", category: "Ciencia", title: "La escala cambia las reglas practicas", body: "Lo que domina a escala humana puede no dominar a escala microscopica o astronomica. Tamano y energia cambian que fuerzas importan.", extra: "Una hormiga y un planeta no viven la misma fisica." },
  { id: "ciencia-198", category: "Ciencia", title: "La ciencia busca patrones, no solo datos sueltos", body: "Un dato aislado puede ser curioso, pero el conocimiento aparece cuando conectamos datos con explicaciones y predicciones.", extra: "Aprender ciencia es aprender a ver relaciones." },
  { id: "ciencia-199", category: "Ciencia", title: "Los limites de una teoria importan", body: "Una teoria puede funcionar muy bien en cierto rango y fallar en otro. Saber donde aplica evita usarla mal.", extra: "Newton sigue siendo util aunque Einstein sea mas general." },
  { id: "ciencia-200", category: "Ciencia", title: "Una buena pregunta puede valer mas que una respuesta rapida", body: "Las preguntas bien formuladas orientan experimentos, datos y modelos. Muchas veces el avance empieza al preguntar de otra manera.", extra: "La curiosidad con metodo es una tecnologia mental." }
];

facts.push(...scienceDeepDiveFacts);

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
  feedLimit: 24,
  touchStartX: 0,
  touchStartY: 0,
  touchStartIndex: 0
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
        <article class="fact-card" data-id="${fact.id}" data-index="${index}">
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

  state.feedLimit += 18;
  renderFeed();
}

function getCurrentCardIndex() {
  if (!feed.clientHeight) {
    return 0;
  }

  return Math.round(feed.scrollTop / feed.clientHeight);
}

function snapToFeedCard(index) {
  const visibleFacts = getVisibleFacts();
  const targetIndex = Math.max(0, Math.min(index, visibleFacts.length - 1));

  if (targetIndex >= state.feedLimit - 4) {
    loadMoreFeedCards();
  }

  feed.scrollTo({
    top: targetIndex * feed.clientHeight,
    behavior: "smooth"
  });
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
  button.classList.toggle("saved", state.favorites.has(id));
  button.textContent = state.favorites.has(id) ? "ok" : "+";
  button.setAttribute("aria-label", state.favorites.has(id) ? "Quitar de favoritos" : "Guardar en favoritos");
  renderFavorites();
});

feed.addEventListener("scroll", () => {
  const distanceToBottom = feed.scrollHeight - feed.scrollTop - feed.clientHeight;
  if (distanceToBottom < feed.clientHeight * 1.5) {
    loadMoreFeedCards();
  }
});

feed.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  state.touchStartX = touch.clientX;
  state.touchStartY = touch.clientY;
  state.touchStartIndex = getCurrentCardIndex();
}, { passive: true });

feed.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - state.touchStartX;
  const deltaY = touch.clientY - state.touchStartY;
  const isVerticalSwipe = Math.abs(deltaY) > 42 && Math.abs(deltaY) > Math.abs(deltaX) * 1.2;

  if (!isVerticalSwipe) {
    snapToFeedCard(getCurrentCardIndex());
    return;
  }

  snapToFeedCard(state.touchStartIndex + (deltaY < 0 ? 1 : -1));
}, { passive: true });

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
