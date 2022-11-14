<template>
  <header class="mb-5" :class="{'scrolled-nav' : scrolledNav}">
    <nav class="mx-auto" style="max-width:1200px;">
      <div class="branding">
        <img src="../store/SaMuLogo/logo.svg" alt="">
      </div>
      <ul v-show="!mobile" class="navigation my-auto">
        <div class="nav-start">
          <li><a class="active" href="#">Home</a></li>
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
            <a class="nav-login" v-else="" @click="$auth.logout('aad')">
              Mijn account
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </a>

          </li>
        </div>
      </ul>
      <div class="icon">
        <font-awesome-icon v-if="mobile" @click="ToggleMobileNav"  :class="{'icon-active' : mobileNav}" icon="fa-solid fa-bars" />
      </div>
      <transition name="mobile-nav" appear>
        <ul v-if="mobileNav" class="dropdown-nav">
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    FontAwesomeIcon
  },
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
      library.add(faBars)
      library.add(faChevronDown)
      window.addEventListener('resize', this.CheckScreen)
      window.addEventListener('scroll', this.UpdateScroll)
      this.CheckScreen();
    }
  },
  mounted(){
    if (process.browser){
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
.active {
  opacity: 1;
}
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
    opacity: 0.75;
}

header nav a:hover{
    color: white;
    text-decoration: none !important;
    opacity: 1;

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
    opacity: 0.75;
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
    transition: 0.5s ease all;
    transform: rotate(0deg);
}

.icon-active{
    transition: 0.5s ease all;
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
    transition: 0.8s ease all;
    z-index: 3;
}

.dropdown-nav li{
    margin-left: 0;
    transition: 0.8s ease all;
}
.mobile-nav {
    transition: 0.8s ease all;
}

.mobile-nav-leave-active {
    transition: transform .3s ease;
}
.mobile-nav-enter-active {
    transition: all .3s cubic-bezier(1.0, 1.0, 1.0, 1.0);
}
.mobile-nav-enter, .mobile-nav-leave-to {
    transition: transform .3s ease-in-out;
    transform: translateX(-250px);
}

.scrolled-nav img{
    width: 3.5em;
    transition: .5s ease all;
}
header img {
  transition: .5s ease all;
}
</style>
