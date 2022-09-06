<template>
  <header :class="{'scrolled-nav' : scrolledNav}">
    <nav class="mx-auto">
      <div class="branding">
        <img src="../store/SaMuLogo/logo.svg" alt="">
      </div>
      <ul v-show="!mobile" class="navigation">
        <div class="nav-start">
          <li><a href="#">Home</a></li>
          <li><a href="#">Commissies</a></li>
          <li><a href="#">Activiteiten</a></li>
          <li><a href="#">Clubs</a></li>
          <li><a href="#">Bijbaanbank</a></li>
          <li><a href="#">Merch</a></li>
          <li><a href="#">Inschrijven</a></li>
        </div>
        <div class="nav-end">
          <li><a href="#">login</a></li>
        </div>
      </ul>
      <div class="icon">
        <fa @click="ToggleMobileNav" v-show="mobile" :class="{'icon-active' : mobileNav}" :icon="['fas', 'bars']" />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Commissies</a></li>
          <li><a href="#">Activiteiten</a></li>
          <li><a href="#">Inschrijven</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created(){
    if (process.browser){
      window.addEventListener('resize', this.CheckScreen)
    }
  },
  mounted(){
    if (process.browser){
      window.addEventListener('scroll', this.UpdateScroll)
    }
  },
  methods:{
    ToggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },

    UpdateScroll(){
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },

    CheckScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 900){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style>
  @import '../sass/Navigation.scss';
</style>
