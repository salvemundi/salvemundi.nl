<template>
    <v-app v-if="!loading">
        <v-app-bar>
            <Navigation />
            <Carousel />
        </v-app-bar>

        <v-main>
            <nuxt />
        </v-main>

        <v-footer>
            <Footer/>
        </v-footer>
    </v-app>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

export default {
    data: () => ({
        loading: true
    }),
    created() {
        this.$nextTick(function() {
            this.loading = false
        })
    },
    components:{
        Navigation,
        Footer
    },
    methods: {
    showAlert: (message) => {
      alert(message)
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Portico-Rounded';
  src: local("Portico-Rounded"), url('~/assets/fonts/Portico-Rounded.woff')  format('woff');
}
@font-face {
  font-family: 'Century Gothic';
  src: local("Century Gothic"), url('~/assets/fonts/gothic.woff')  format('woff');
}

.portico{
    font-family: "Portico-Rounded",serif;
    letter-spacing: 2px;
}

body{
    font-family: "Century gothic" ,serif;
}

#navigationIcon{
    /* padding: 10px 10px 20px; */
    margin-left: 10px;
    font-size: 2rem;
}

.row{
    margin: 0;
}
</style>
