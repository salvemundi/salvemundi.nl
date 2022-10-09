<template>
  <div>
    <NextActivity />
    <b-row class="mx-5 my-3">
      <b-col>
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

    <b-row class="video-purple my-5 p-3">
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
    <TitleBlock Title="Commissies" Content="bla bla bla text enzo"></TitleBlock>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut asperiores error impedit, architecto excepturi quod est. Nostrum, eaque atque commodi sit nesciunt minima veritatis, enim eius a eligendi hic?
    
  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import TitleBlock from '../components/TitleBlock.vue';
import NextActivity from '../components/NextActivity.vue';

export default {
  components:{
    TitleBlock,
    NextActivity
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

</style>
