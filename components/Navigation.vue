<template>
  <header class="mb-5" :class="{'scrolled-nav' : scrolledNav}">
    <nav class="mx-auto" style="max-width:1200px;">
      <div class="branding">
        <img src="../store/SaMuLogo/logo.svg" alt="">
      </div>
      <ul v-show="!mobile" class="navigation my-auto">
        <div class="nav-start">
          <li><a href="#">Home</a></li>
          <li><a href="#">Inschrijven</a></li>
          <li><a href="#">Commissies</a></li>
          <li><a href="#">Activiteiten</a></li>
          <li><a href="#">Clubs</a></li>
          <li><a href="#">Bijbaanbank</a></li>
          <li><a href="#">Merch</a></li>
        </div>
        <div class="nav-end">
          <li>
            <a class="nav-login" v-if="!this.$auth.loggedIn" @click="$auth.loginWith('aad')">Log in</a>
            <a class="nav-login" v-else="" @click="$auth.logout('aad')">Log uit</a>
          </li>
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

header{
    background-color: #663366;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: white;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
}
.nav-login {
  cursor: pointer;
}
header nav{
    position: relative;
    display: flex;
    flex-direction: row;
    transition: .5s ease all;
    widows: 90%;
    margin: 0, auto;
    @media (min-width: 1140px) {
        max-width: 1140px;
    }
}

header nav ul,
header nav link{
    color: white;
    list-style: none;
    text-decoration: none;
}

header nav li{
    padding: 16px;
}

header a{
    transition: .5 ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    color: white;
}

header nav a:hover{
    color: plum;
    border-color: plum;
    text-decoration: none;
}

header nav .branding{
    display: flex;
    align-items: center;
    margin: 16px;
    transition: .5s ease all;
}


.branding img{
    width: 5em;
    transition: .5 ease all;
}

.navigation{
    display: flex;
    align-items: center;
    flex: 1;
}

.nav-start{
    justify-content: flex-start;
    display: flex;
    flex: 1;
}

.nav-end{
    justify-content: flex-end;
    display: flex;
    flex: 1;

}

.icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 2em;
    height: 100%;
}

.icon i{
    cursor: pointer;
    transition: 0.8s ease all;
    transform: rotate(0deg);
}

.icon-active{
    transition: 0.8s ease all;
    transform: rotate(180deg);
}

.dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #39203B;
    top: 0;
    left: 0;
    z-index: 3;
}

.dropdown-nav li{
    margin-left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transition: 1s ease all;
    transform: translateX(-250px);
}

.mobile-nav-enter-to{
    transition: 1s ease all;
    transform: translateX(0);;
}

.scrolled-nav img{
    width: 3.5em;
    transition: .5s ease all;
}
header img {
  transition: .5s ease all;
}
</style>
