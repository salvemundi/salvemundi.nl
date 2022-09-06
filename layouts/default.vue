<template>
    <v-app>
        <v-app-bar>
            <Navigation />
            <br><br><br>
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
    components:{
        Navigation,
        Footer
    }
}
</script>

<style>
#navigationIcon{
    /* padding: 10px 10px 20px; */
    margin-left: 10px;
    font-size: 2rem;
}
</style>
