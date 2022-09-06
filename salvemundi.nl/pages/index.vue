<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugiat? Aliquid, quos accusamus exercitationem fugiat id atque! Animi praesentium error iusto, voluptatem hic fugit perspiciatis laboriosam sequi ratione quisquam doloribus?
    <TitleBlock Title="Commissies" Content="bla bla bla text enzo"></TitleBlock>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut asperiores error impedit, architecto excepturi quod est. Nostrum, eaque atque commodi sit nesciunt minima veritatis, enim eius a eligendi hic?
  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import TitleBlock from '../components/TitleBlock.vue';

export default {
  components:{
    TitleBlock,
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
