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
          <h2 class="portico text-purple title">Introductie</h2>
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

    <TitleBlock Title="Commissies" Content="bla bla bla text enzo     Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet voluptatem qui minus quis odio eius aliquid eaque itaque necessitatibus? Iure facilis nemo ex minus praesentium maiores ducimus debitis, architecto laborum adipisci ipsa beatae quisquam dicta enim, id vitae explicabo totam dolore inventore sit rerum quibusdam vel. Deleniti provident excepturi porro quisquam obcaecati impedit exercitationem illum, ut repellendus accusamus ipsum, recusandae necessitatibus sequi. At atque fuga nostrum reiciendis veniam aspernatur molestias molestiae mollitia minima animi? Facilis assumenda ratione magnam vel totam, quos iure aperiam blanditiis? Vel consequatur reprehenderit iste ratione facilis? Ipsam laudantium, tempora ipsa libero at quis necessitatibus omnis quisquam vel nostrum, perspiciatis aut ex repellat. Assumenda eius nam quas doloribus voluptate blanditiis inventore eum explicabo expedita, aspernatur quaerat consectetur autem a, eos magnam facilis, temporibus est ratione architecto culpa obcaecati? Ipsa dicta porro corporis quo laudantium quidem suscipit eveniet! Placeat, nesciunt! Perspiciatis quis sapiente id. Adipisci nam numquam necessitatibus temporibus, iure alias. Soluta ducimus a rem eum? Quas animi illo ex sit quae maxime reiciendis, molestias voluptas aliquid atque iure minus officiis cupiditate nemo nulla sapiente reprehenderit nihil maiores dolor a tenetur accusantium. Facere voluptate, sed saepe eveniet commodi temporibus odit a tenetur quas suscipit eligendi, non nesciunt dolor? Consectetur cumque tenetur ullam cupiditate voluptate aliquid, voluptatibus, similique sed molestias, ab dolore excepturi doloremque animi odio perspiciatis veritatis odit! Sit, quas dignissimos? Ipsa ipsum magnam itaque accusantium molestiae cupiditate modi quaerat placeat ullam cumque, quis nam tenetur dolor incidunt quidem vel id. Commodi enim ex ipsum voluptatum natus quas nobis nulla laborum, fuga velit ad officiis! Eveniet eaque numquam inventore alias, molestiae non sunt, cupiditate labore quis quidem quas minima accusantium, placeat delectus a dolore. Molestiae assumenda aut repellendus sint? Perferendis iusto harum odit voluptates, dolore illum beatae natus sint voluptate magnam sapiente eaque laborum tenetur ducimus facilis.
"></TitleBlock>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut asperiores error impedit, architecto excepturi quod est. Nostrum, eaque atque commodi sit nesciunt minima veritatis, enim eius a eligendi hic?


  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import TitleBlock from '../components/TitleBlock.vue';
import NextActivity from '../components/NextActivity.vue';
import jwt_decode from 'jwt-decode'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default {
  components:{
    TitleBlock,
    NextActivity,
    FontAwesomeIcon
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
  font-size: 35px;
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
</style>
