<template>
  <div>
    <NextActivity />
    <b-row class="skewed mx-3 my-3">
      <b-col sm="7">
        <h1 class="portico text-purple" v-if="jwt != null && jwt.length > 1">Welkom {{ decodedToken(jwt).name }}!</h1>

        <h2 class="portico text-purple">Over ons</h2>
        <p><b>

          Salve Mundi is de studievereniging van Fontys Hogenscholen ICT, opgericht in 2017 door Mohammed Mighiss en Luuk Hendriks. Salve Mundi is Latijn voor "Hello World", een typische zin die menig programmeur maar al te goed kent.
        </b></p>
        <p>
          De vereniging organiseert veel activiteiten, zowel studiebemiddelend als voor de lol, of een combinatie van de twee. Denk hierbij aan bijvoorbeeld bijlessen, workshops maar ook bijvoorbeeld karten, kanoën of naar de Efteling!
        </p>
        <p>
          Naast deze activiteiten verzorgt Salve Mundi ook de introductie van FHICT van top tot teen!
        </p>
      </b-col>
      <b-col sm="5">
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
      <div class="overlay intro-height">
        <div class="p-5 box">
          <h2 class="portico text-purple title"><b>Introductie</b></h2>
          <p>
            Ga jij bij Fontys ICT studeren? En ben jij op zoek naar het echte studentenleven in Eindhoven? Dan is de introductie misschien wel iets voor jou!
          </p>
          <p>
            Salve Mundi organiseert jaarlijks een introductieweek: De FHICT-introductie. Het is een week vol avontuur en teambuilding in Eindhoven en omstreken, zo leer je ook de stad beter kennen. Salve Mundi is druk bezig geweest om dit allemaal mogelijk te maken voor de nieuwe studenten dit jaar.
          </p>
          <div class="">
            <a class="btn btn-primary float-right">Meer informatie <font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
          </div>
        </div>
      </div>
      <img class="intro-foto" src="../assets/img/IntroFoto.jpg" alt="">

    </div>

    <TitleBlock Title="Commissies" Content="bla bla bla text enzo"></TitleBlock>

    <div class="turned">
        <div class="purple text-center p-5">
            <div class="max-width mx-auto">
                <b-row>
                  <b-col lg="6" class="my-auto text-left">
                    <h1 class="portico title"><b>Contact</b></h1>
                    <p>
                      Heb jij een vraag voor ons of wil je voor iets anders met ons in contact komen? Dat kan! Je kan ons bereiken op de volgende gegevens:
                    </p>
                    <p>
                      Adres: Rachelsmolen 1, 5612MA Eindhoven, Lokaal R10 2.17 <br>
                      E-mail: info@salvemundi.nl
                    </p>
                  </b-col>
                  <b-col lg="6" class="mx-auto">
                    <div class="mapouter mx-auto">
                      <div class="gmap_canvas">
                        <iframe class="iframe-is-kut" id="gmap_canvas" src="https://maps.google.com/maps?q=fontys%20r10&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://123movies-a.com"></a><br>
                        <a href="https://www.embedgooglemap.net">using google maps on your website</a>
                      </div>
                    </div>
                  </b-col>
                </b-row>
            </div>
        </div>
    </div>

    <div class="p-5 text-center">
      <h2 class="portico text-purple title"><b>partners</b></h2>
      <div class="max-width mx-auto">
        <VueSlickCarousel v-bind="settings">
            <div>
              <img class="carousel-size" src="../assets/img/Partners/1.png" alt="">
            </div>
            <div>
              <img class="carousel-size" src="../assets/img/Partners/2.png" alt="">
            </div>
            <div>
              <img class="carousel-size" src="../assets/img/Partners/3.png" alt="">
            </div>
            <div>
              <img class="carousel-size" src="../assets/img/Partners/4.png" alt="">
            </div>
            <div>
              <img class="carousel-size" src="../assets/img/Partners/5.png" alt="">
            </div>
        </VueSlickCarousel>
      </div>
    </div>

  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import TitleBlock from '../components/TitleBlock.vue';
import NextActivity from '../components/NextActivity.vue';
import jwt_decode from 'jwt-decode'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default {
  components:{
    TitleBlock,
    NextActivity,
    FontAwesomeIcon,
    VueSlickCarousel
  },
  created(){
    if (process.browser){
      library.add(faChevronRight)
      window.addEventListener('resize', this.CheckScreen)
    }
  },
  asyncData (context) {
    return {
      jwt: context.app.$auth.$storage.getUniversal('_token.aad')
    }
  },
  data () {
    return {
      jwt: null,
      settings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "autoplay": true,
        "autoplaySpeed": 2000,
        "rows": 1,
        "centerMode": true,
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 3,
        "speed": 500,
        "mobileFirst":true,
        "variableWidth": true,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "rows": 1,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "rows": 1,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "rows": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
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
  text-align: center;
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
  max-height: 75% !important;
  max-width: 75% !important;
}
.overlay {
  justify-content: center;
  align-items: center;
  display: flex;
}

.title{
  font-size: 30px;
}

@media only screen and (max-width:400px) {
 .title{
    margin-top: 1em;
    font-size: 20px;
 }
}

@media only screen and (max-width:600px) {
  .box {
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

.mapouter{
  position:relative;
  text-align:right;
  height:250px;
  width:500px;
}

.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:250px;
  width:500px;
}

.iframe-is-kut{
  height:250px;
  width:500px;
}

@media only screen and (max-width:600px) {
  .mapouter, .gmap_canvas, .iframe-is-kut{
    width:400px;
  }
}

@media only screen and (max-width:500px) {
  .mapouter, .gmap_canvas, .iframe-is-kut{
    width:300px;
  }
}

@media only screen and (max-width:400px) {
  .mapouter, .gmap_canvas, .iframe-is-kut{
    width:200px;
  }
}

.carousel-size{
  margin: 1em;
  max-height: 200px;
  width: auto;
}

</style>
