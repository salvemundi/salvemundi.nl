<template>
  <div class="pt-5 mobile">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      fade
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <div class="overlay d-flex align-items-center justify-content-center text-center parent-text">
      <h1 class="white py-auto">
        <p class="portico big">
          Salve Mundi
        </p>
        Dé studievereniging van Fontys ICT Eindhoven!
      </h1>
    </div>
    <!-- images maten: 5200px bij 2100px -->
        <b-carousel-slide class="headerImg"
            img-src="../assets/img/HeaderImgs/Foto1.jpg"
        >
        </b-carousel-slide>

        <b-carousel-slide class="headerImg"
            img-src="../assets/img/HeaderImgs/Foto2.jpg"
        ></b-carousel-slide>

        <b-carousel-slide class="headerImg"
            img-src="../assets/img/HeaderImgs/Foto4.jpg"
        ></b-carousel-slide>

        <b-carousel-slide class="headerImg"
            img-src="../assets/img/HeaderImgs/Foto5.jpg"
        ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.headerImg{
    height: 100% !important;
    max-height: 80em;
    z-index: 1;
}

.overlay{
  position: absolute;
  background-color: rgba(82,40,79,0.5);
  z-index: 2;
  width: 100%;
  height: 100%;
}

.white{
  color: white !important;
  width: 80%;
}

.big{
  font-size: 70px;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 3;
}

@media only screen and (max-width: 900px){
  .big{
    font-size: 50px;
  }
  .overlay h1{
    font-size: 30px;
  }
}

@media only screen and (max-width: 600px){
  .mobile {
    height: 300px;
  }
  .headerImg{
    justify-content: center !important;
    align-items: center !important;
    display: flex !important;
    transform: scale(2.4) !important;
  }
  .carousel,
  .carousel-inner {
    height: 100% !important;
  }
}

@media only screen and (max-width: 500px){
  .big{
    font-size: 35px;
  }
  .overlay h1{
    font-size: 25px;
  }
}

@media only screen and (max-width: 400px){
  .big{
    margin-top: 1em;
    font-size: 20px;
  }
  .overlay h1{
    font-size: 15px;
  }
}


</style>
