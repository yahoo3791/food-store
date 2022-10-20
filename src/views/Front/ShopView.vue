<template>
  <Navbar />
    <h1>中西全</h1>
  <Footer />
  <img class="cursor-pointer arrowUp-btn"
  src="@/assets/image/button/arrowUp.png"
  @click="arrowUp"
  @keypress="arrowUp"
  alt="arrowUp">
</template>

<script>
import Navbar from '@/components/Front/FrontNavbar.vue';
import Footer from '@/components/Front/FrontFooter.vue';

export default {
  components: {
    Navbar, Footer,
  },
};
</script>
