export default {
  global: {
    Name: 'Comunicándonos',
    Description:
      'La comunicación es una capacidad innata del ser humano, quien, movido por la necesidad natural de interactuar, de ser con el otro y consigo mismo, recurre a múltiples formas de expresión, tanto verbales como no verbales. Comunicar no puede entenderse como un proceso simple y lineal, reducido únicamente a los elementos de emisor, mensaje y receptor. Por el contrario, se trata de un fenómeno circular y complejo, que surge de la reflexión, la crítica, la fe o la duda, del intercambio de emociones, de la posible incoherencia entre lo que se piensa, se siente y se actúa, o de la incomprensión en la relación con el otro, sea quien sea este. Estas son solo algunas de las múltiples dimensiones que dan forma a la necesidad humana de expresión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Naturaleza de la comunicación ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procesos de la comunicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Contextos comunicativos y actitudes frente a la comunicación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación verbal y no verbal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La expresión y la voz como herramienta',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Escuchar con los sentidos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Importancia del discurso oral - características de una charla y exposición',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Habilidades de un comunicador eficaz',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/ejemplo.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Comunicación verbal y no verbal',
      referencia: 'Goleman, Daniel. 1995. Inteligencia emocional.',
      tipo: 'Libro',
      link:
        'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Comunicacion_oral_y_escrita/CF1_Comunicandonos/media/documentos/Inteligencia_Emocional.pdf',
    },
    {
      tema: 'La comunicación',
      referencia: 'Gómez, F. S. J. (2016). La comunicación. Salus, 20(3), 5-6.',
      tipo: 'Libro',
      link:
        'https://ve.scielo.org/scielo.php?script=sci_arttext&pid=s1316-71382016000300002',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'capacidad para expresar opiniones, sentimientos o derechos de manera firme pero respetuosa.',
    },
    {
      termino: 'Canal',
      significado:
        'medio físico o virtual por el que se transmite el mensaje (voz, papel, teléfono, redes sociales, etc.).',
    },
    {
      termino: 'Código',
      significado:
        'conjunto de signos y reglas que se utilizan para elaborar y descifrar un mensaje (idioma, gestos, símbolos, etc.).',
    },
    {
      termino: 'Codificación',
      significado:
        'proceso mediante el cual el emisor convierte su idea en un mensaje utilizando un código comprensible para el receptor.',
    },
    {
      termino: 'Comunicación',
      significado:
        'proceso mediante el cual se transmite información de un emisor a un receptor a través de un canal y con un mensaje determinado.',
    },
    {
      termino: 'Contexto',
      significado:
        'circunstancias físicas, sociales, culturales o psicológicas que rodean y afectan el proceso comunicativo.',
    },
    {
      termino: 'Decodificación',
      significado:
        'proceso mediante el cual el receptor interpreta y comprende el mensaje recibido.',
    },
    {
      termino: 'Emisor',
      significado:
        'persona o entidad que produce y envía el mensaje dentro del proceso comunicativo.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'habilidad para prestar atención completa al mensaje del otro, interpretarlo correctamente y responder con empatía y comprensión.',
    },
    {
      termino: 'Fidelidad comunicativa',
      significado:
        'grado en que el mensaje recibido se interpreta tal como lo quiso transmitir el emisor, sin distorsiones.',
    },
    {
      termino: 'Intención comunicativa',
      significado:
        'propósito o finalidad con la que se emite un mensaje (informar, persuadir, entretener, pedir algo, etc.).',
    },
    {
      termino: 'Lenguaje no verbal',
      significado:
        'conjunto de gestos, posturas, expresiones faciales, tono de voz, entre otros, que complementan o sustituyen el lenguaje verbal.',
    },
    {
      termino: 'Lenguaje verbal',
      significado: 'uso de palabras habladas o escritas para comunicar ideas.',
    },
    {
      termino: 'Mensaje',
      significado:
        'contenido de la comunicación que se transmite de un emisor a un receptor puede ser verbal, no verbal o mixto.',
    },
    {
      termino: 'Oratoria',
      significado:
        'arte de hablar en público de forma clara, persuasiva y eficaz.',
    },
    {
      termino: 'Percepción',
      significado:
        'interpretación personal que cada individuo hace del mensaje, influida por su experiencia, cultura y emociones.',
    },
    {
      termino: 'Receptor',
      significado:
        'persona o entidad que recibe, interpreta y responde al mensaje enviado por el emisor.',
    },
  ],
  referencias: [
    {
      referencia: 'Anda, C. (2015). Escuchar es una actitud.',
      link: 'https://studylib.es/doc/5795567/escuchar-es-una-actitud-cal',
    },
    {
      referencia: 'Conceptos.de (2020). Concepto de oratoria.',
      link: 'https://concepto.de/oratoria/',
    },
    {
      referencia: 'Matínez, A. (2020). Estrategias para mejorar la escucha.  ',
      link: '',
    },
    {
      referencia:
        'Ortega, E. (2002). Cómo lograr que los demás se salgan con la nuestra. Técnicas de persuasión, negociación y oratoria.',
      link: '',
    },
    {
      referencia:
        'Pinto, H. (2011). Modelo de comunicación según Virgini Satir. ',
      link: '',
    },
    {
      referencia:
        'Quintero, Á, M. (1997). Trabajo Social y Procesos Familiares. ',
      link: '',
    },
    {
      referencia:
        'Robbins, S. (1996) Administración Teoría y Práctica. Prentice Hall. Hispanoamericana, S.A: México.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, P. (2020) Comunicación oral y escrita. Documento adjunto.',
      link: '',
    },
    {
      referencia:
        'Stoner, J. (1996). Administración. Edit Prentice Hall, S.A. Edición. México.',
      link: '',
    },
    {
      referencia:
        'Toscano V. (2017). ORATORIA: Cómo Mejorar La Voz Para Hablar Fuerte | Técnicas Para Hablar Bien y Tener Expresión Oral. ',
      link: '',
    },
    {
      referencia:
        'Toscano V. (2016). Oratoria, Curso para Hablar en Público: 7 Ejercicios para Mejorar la Voz | Técnicas de Volumen #147. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elba Patricia Rodríguez',
          cargo: 'Experta técnica',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
