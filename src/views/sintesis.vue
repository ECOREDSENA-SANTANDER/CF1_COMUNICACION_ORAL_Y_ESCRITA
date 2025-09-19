<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-zoom")
    p La comunicación es un proceso fundamental mediante el cual los seres humanos intercambian información, pensamientos, emociones y conocimientos. Este proceso implica la participación de al menos dos elementos esenciales: el emisor, quien transmite el mensaje, y el receptor, quien lo recibe e interpreta. Para que la comunicación sea efectiva, debe existir un código común, un canal adecuado, y debe lograrse la correcta codificación y decodificación del mensaje.
    p La comunicación puede ser verbal, cuando se usan palabras habladas o escritas, o no verbal, cuando intervienen gestos, posturas, expresiones faciales, tono de voz, entre otros. Ambos tipos se complementan para enriquecer el mensaje. Además, el proceso comunicativo está influenciado por factores como el contexto sociocultural, las actitudes, las emociones, y el nivel de preparación del emisor.
    p Una comunicación efectiva se logra cuando el mensaje llega de forma clara, precisa y comprensible al receptor, permitiendo una retroalimentación que confirma la comprensión. En este sentido, habilidades como la escucha activa, la asertividad y la reflexión juegan un papel clave. Asimismo, la comunicación no es lineal, sino circular y dinámica, ya que los roles de emisor y receptor se intercambian constantemente.
    p En conclusión, la comunicación es mucho más que hablar: es construir puentes de entendimiento, influir, expresar y conectar con los demás, siendo una competencia esencial en la vida personal, académica y profesional.
 
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La comunicación es el intercambio de información entre personas. Puede ser verbal o no verbal, y su efectividad depende de cómo se transmite y recibe el mensaje. Ser asertivo permite expresarse con claridad y respeto.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
