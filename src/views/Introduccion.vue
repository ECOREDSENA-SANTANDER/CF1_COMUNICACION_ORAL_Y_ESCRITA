<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p La comunicación es un proceso inherente a la condición humana, esencial para la construcción de sentido, la socialización y la constitución del sujeto. Desde una mirada académica, se entiende como un fenómeno multidimensional que abarca aspectos lingüísticos, psicológicos, sociales y culturales. No se limita a la simple transmisión de información, como lo planteaban los modelos lineales clásicos de la Escuela de Palo Alto (Shannon y Weaver, 1949), sino que implica una constante construcción e interpretación de significados en contextos específicos.
        p Autores como Paul Watzlawick et al. (1971) han planteado que “es imposible no comunicarse”, reconociendo que toda conducta (verbal o no verbal, consciente o inconsciente) posee un carácter comunicativo. De esta manera, la comunicación se configura como un proceso circular, donde los roles de emisor y receptor son intercambiables y donde el contexto influye directamente en la forma y el contenido del mensaje.
      .col-lg-2.col-md-3.col-4
        img.mb-3(src='@/assets/curso/portada/intro.svg', alt='')
      .col-lg-12 
        p Desde la perspectiva sociocultural, Mikhail Bakhtin (1981) resalta el carácter dialógico del lenguaje, en tanto que todo acto comunicativo está atravesado por voces previas, interacciones pasadas y estructuras de poder. Así, la comunicación no solo transmite información, sino que construye realidades y subjetividades. A su vez, Habermas (1984), en su teoría de la acción comunicativa, enfatiza la necesidad de una comunicación orientada al entendimiento, basada en la racionalidad, la reciprocidad y la validez de los argumentos, como base para la vida democrática y el consenso social.
        p Por tanto, reflexionar sobre la comunicación desde una perspectiva académica supone reconocer su complejidad estructural y funcional. Esta se manifiesta en múltiples niveles: intrapersonal, interpersonal, grupal y social; y en diversos lenguajes: verbal, no verbal, simbólico, estético, tecnológico, entre otros. Además, implica considerar sus implicaciones en campos como la educación, la salud, la psicología y la política, en donde el acto de comunicar condiciona el bienestar individual y colectivo.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/v0kevK8IZng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Comunicándonos - introducción.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
