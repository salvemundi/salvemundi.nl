<template>
  <div>
    <NextActivity />
    <b-row class="mx-5 my-3">
      <b-col>
        <h1 class="portico text-purple" v-if="jwt.length > 1">Welkom {{ decodedToken(jwt).name }}!</h1>

        <h2 class="portico text-purple">Over ons</h2>
        <p><b>

          Salve Mundi is de studievereniging van Fontys Hogenscholen ICT, opgericht in 2017 door Mohammed Mighiss en Luuk Hendriks. Salve Mundi is Latijn voor "Hello World", een typische zin die menig programmeur maar al te goed kent.
        </b></p>
        <p>
          De vereniging organiseert veel activiteiten, zowel studiebemiddelend als voor de lol, of een combinatie van de twee. Denk hierbij aan bijvoorbeeld bijlessen, workshops maar ook bijvoorbeeld karten, kanoën of naar de Efteling!
        </p>
        <p>
          Naast deze activiteiten verzorgt Salve Mundi ook de introductie van FHICT van top tot teen.
        </p>
      </b-col>
      <b-col>
        <img src="../assets/img/HeaderImgs/Foto1.jpg" class="w-100" alt="">
      </b-col>
    </b-row>

    <b-row class="video-purple mt-5 p-3">
      <b-col class="px-2 d-flex justify-content-center order-2 order-md-1 col-12 col-md-6">
        <video class="video mx-auto my-4" controls muted autoplay>
          <source src="../assets/videos/SalveMundiAftermovie.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </b-col>
      <b-col class="d-flex justify-content-center align-items-center order-1 order-md-2 col-12 col-md-6">
        <h2 class="portico bigger" style="width:100%;">Maak kennis met Salve Mundi!</h2>
      </b-col>
    </b-row>

    <div class="intro-heigt">
      <div class="overlay">
        <div class="p-5S box">
          <h2 class="portico">Introductie</h2>
          <p>
            Ga jij bij Fontys ICT studeren? En ben jij op zoek naar het echte studentenleven in Eindhoven? Dan is de introductie misschien wel iets voor jou!
          </p>
          <p>
            Salve Mundi organiseert jaarlijks een introductieweek: De FHICT-introductie. Het is een week vol avontuur en teambuilding in Eindhoven en omstreken. Zo leer je ook de stad beter kennen. Salve Mundi is druk bezig geweest om dit allemaal mogelijk te maken voor de nieuwe studenten dit jaar.
          </p>
          <div>
            <a href="btn btn-primary">Meer informatie -></a>
          </div>
        </div>
      </div>
      <img class="intro-foto" src="../assets/img/IntroFoto.jpg" alt="">

    </div>

    <TitleBlock Title="Commissies" Content="bla bla bla text enzo"></TitleBlock>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut asperiores error impedit, architecto excepturi quod est. Nostrum, eaque atque commodi sit nesciunt minima veritatis, enim eius a eligendi hic?
    
  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import TitleBlock from '../components/TitleBlock.vue';
import NextActivity from '../components/NextActivity.vue';
import jwt_decode from 'jwt-decode'

export default {
  components:{
    TitleBlock,
    NextActivity
  },
  asyncData (context) {
    return {
      jwt: context.app.$auth.$storage.getUniversal('_token.aad')
    }
  },
  data () {
    return { jwt: null }
  },
  methods: {
    decodedToken(jwt) {
      if(jwt.length > 1) {
        return jwt_decode(jwt)
      }
    }
  },
  head() {
    return {
      title: "Salve Mundi - Welcome",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dé studievereniging van Fontys ICT"
        }

      ]
    };
  },
};


</script>

<style>
.text-purple{
  color: #663366;
}

.video-purple{
  background-color: #663366;
  color: white;
}

video{
  width: 80%;
  height: auto;
}

.bigger{
  font-size: 200%;
}

.intro-foto{
  object-fit: cover;
  width: 100%;
  height: 40em;
}

.intro-height{
  height: 40em;
}

.intro-height .overlay{
  height: 40em !important;
}

.box{
  background-color: white;
  z-index: 4;
  margin: 10em;
}

</style>
