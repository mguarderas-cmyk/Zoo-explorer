# Zoo-explorer 
Guardianes de la Biodiversidad Conectando Naturaleza y Tecnología para un Futuro Sostenible
Integrantes del Equipo 
El equipo está conformado por estudiantes de 5to de Educación General Básica de la Unidad Educativa Eight Academy, año lectivo 2025–2026, bajo la mentoría de Michelle Guarderas. 
Líder: Martina Moreno 
Secretaria :Mia Ramos
Diseñadora :Sofia Chiriboga 
Expositor:Edgar Navarrete

# Problema que se quiere resolver

La Zoobotánica de Eight Academy alberga más de 38 especies documentadas de animales y plantas, pero los estudiantes la visitan sin realmente conocerla. La investigación de campo confirmó que el 53.4% de los estudiantes no puede nombrar las especies que tiene frente a sí, desconoce sus roles ecológicos ni sabe cómo cuidarlas. Están presentes físicamente, pero ausentes en conocimiento.

Esta brecha genera tres impactos críticos. En la Zoobotánica existe un riesgo de descuidos involuntarios por desconocimiento de las necesidades específicas de plantas y animales. En la comunidad educativa se pierden oportunidades para el aprendizaje experiencial y el desarrollo de conciencia ecológica. Y a nivel de biodiversidad, hay un daño potencial a largo plazo al no maximizar el campus como un “aula viva”.

# Propuesta

Zoo-Explorer transforma esa brecha en oportunidad. Es una plataforma digital interactiva que convierte cada visita a la Zoobotánica en una experiencia de exploraciónactiva, haciendo que los estudiantes pasen de ser visitantes pasivos a Eco-Exploradores comprometidos con la conservación de su entorno.

El proyecto busca desarrollar una Guía Eco-IA con reconocimiento de especies en tiempo real, implementar misiones gamificadas adaptadas por edad y nivel de habilidad, crear una Bitácora de Descubrimientos respaldada en Blockchain para garantizar la trazabilidad de los logros, construir una interfaz intuitiva y accesible para múltiples dispositivos, y ejecutar un piloto en Eight Academy para validar el impacto pedagógico y ambiental.

# Solución ODA (Observar – Descubrir – Actuar) 

Zoo-Explorer se estructura en tres pilares que guían la experiencia del Eco-Explorador. Guía Eco-IA es el cerebro del proyecto. Los usuarios escanean plantas o animales con la cámara del iPad o móvil, o los describen verbalmente. La IA analiza la entrada y entrega el nombre científico y común de la especie, datos curiosos, su rol ecológico, requisitos vitales como agua y alimento, y misiones personalizadas según el progreso del usuario.

Bitácora de Descubrimientos es lo que perdura. Cada contribución se registra como un Eco-Token único e inalterable en la blockchain, garantizando el reconocimiento transparente del esfuerzo individual y colectivo. Los usuarios acumulan insignias digitales, suben de nivel como exploradores y desbloquean acceso a áreas exclusivas de la Zoobotánica.

Misiones Gamificadas son la acción. Los desafíos se adaptan a las estaciones y al progreso del usuario e incluyen actividades como adoptar una especie para monitorear su crecimiento, observar patrones de comportamiento animal o contribuir al mantenimiento del área junto a un equipo de Eco-Exploradores.

# Tecnología utilizada 

Zoo-Explorer se construye sobre un stack MERN con arquitectura Progressive Web App (PWA). El frontend usa React.js con Tailwind CSS para una interfaz responsiva e interactiva. El backend corre en Node.js con Express.js para gestionar las APIs RESTful y la conexión con servicios externos. La base de datos es MongoDB, que permite almacenar de forma flexible los perfiles de usuario, especies y misiones. La infraestructura se despliega en AWS usando S3 y EC2 o Lambda para garantizar alta disponibilidad y escalabilidad.

Para la Inteligencia Artificial, la identificación de plantas se realiza con la Pl@ntNet API, el reconocimiento de fauna con Google Cloud Vision API, la generación de contenido educativo con OpenAI GPT-4o, y el procesamiento de lenguaje natural con NLTK y spaCy en Python.

El ecosistema Blockchain opera sobre la red Polygon (Layer 2), elegida por sus bajas tarifas y su modelo sostenible de Proof of Stake. Los tokens siguen el estándar ERC1155, que permite tanto tokens fungibles (Eco-Tokens) como no fungibles (insignias y certificados de logro). Los contratos inteligentes están escritos en Solidity e incluyen EcoToken.sol, AchievementNFT.sol y MissionManager.sol. La integración entre el backend y la blockchain se hace con Web3.js y Ethers.js, y los metadatos de los NFTs se almacenan de forma descentralizada en IPFS

#  Impacto y Escalabilidad 

 Zoo-Explorer inicia como piloto en Eight Academy con proyección a otras instituciones en Quito y Ecuador, especialmente aquellas con granjas pedagógicas, huertos y jardines botánicos. El objetivo final es construir el mapa de especies escolares más grande de Ecuador, conectando instituciones en una red de conocimiento ambiental colaborativo.
