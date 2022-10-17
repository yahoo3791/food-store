<template>
  <navbar />
  <h1>HOMEPAGE</h1>
  <div class="slide-btn"></div>
  <img src="@/assets/image/button/arrowRight.png" alt="">
  <img src="@/assets/image/button/arrowUp.png" alt="">
  <img src="@/assets/image/button/filp-arrow-left.png" alt="">
  <img src="@/assets/image/button/filp-arrow-right.png" alt="">
  <h1 class="title">關於</h1>
  <div class="tour-btn">送出</div>
  <div class="tour-btn">加入購物車</div>
  <div class="footer">
    <p>Copyright © 2022 2BU2. All rights reserved.</p>
  </div>

</template>

<script>
import navbar from '@/components/Front/FrontNavbar.vue';

export default {
  components: {
    navbar,
  },
};
</script>
