<template>
  <Navbar />
  <div class="container-fulid">
    <div class="">
      <img src="@/assets/image/banner/transformmationBg.png"
      class="w-100 h-100"
      alt="">
    </div>
  </div>
  <div class="container">
    <div class="title">關於</div>
    <div class="row">
      <div class="col-3">
        <img src="@/assets/image/aboutSwiper/about.png" alt="">
      </div>
      <div class="col-9">
        <p style="text-indent: 2rem">工業革命帶動了歐洲資本主義發展，而法國農民恰逢三年干旱，
          貴族階級揮霍無度國庫空虛，
          各種啟蒙思想家不斷鼓動天賦人權，1789年，一個腐爛的、
          貧富懸殊的社會終於迎來了涅槃式的大革命。這場重大的社會動蕩之前，
          高級料理只能由富人在他們的莊園的隱秘進行。許多失業的高級料理廚師流落民間開餐館或找工作。
          西元1804年，也就是大革命之後10餘年間，
          僅在巴黎就出現了500家餐廳。2BU2從當時到至今依然屹立不搖，
          這個招牌集結了世界各地好手到至今。</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="title">轉型</div>
    <p style="text-indent: 2rem">西元2019年冠狀病毒引發的全球大流行疫情。
    隨後在2020年初迅速擴散至全球多國，逐漸變成一場
    全球性大瘟疫。<br>
    餐飲業紛紛轉型，2BU2也不例外，開啟了冷凍食品之路。</p>
  </div>
    <img class="cursor-pointer arrowUp-btn"
    :class="{'d-none': scrollBtn}"
    src="@/assets/image/button/arrowUp.png"
    alt="">
  <Footer />
</template>

<script>
import Navbar from '@/components/Front/FrontNavbar.vue';
import Footer from '@/components/Front/FrontFooter.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar, Footer,
  },
};
</script>
