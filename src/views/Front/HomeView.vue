<template>
  <Navbar />
  <div class="container-fulid">
    <div class="banner-container">
      <img src="@/assets/image/banner/banner.png"
        alt="banner picture"
        class="w-100 h-100 position-absolute top-0 left-0 right-0"
        style="object-fit: cover">
      <div class="banner-content position-absolute top-0 left-0 right-0 w-100 h-100
        d-flex justify-content-center align-items-center"
        style="z-index:3">
        <div class="">
          <h2>
            舌尖上交織出不同味蕾<br>
            猶如身在當地品嚐最道地的頂尖料理
          </h2>
        </div>
      </div>
      <div
        class="slide-btn position-absolute start-50 bottom-0 mb-1 mb-md-2 translate-middle-x"
        style="z-index:4">
      </div>
    </div>
  </div>
  <div class="container-fulid">
    <div class="linear-bg"
      style="padding: 50px 0;">
        <swiper
          :effect="'flip'"
          :grabCursor="true"
          :pagination="{clickable: true,}"
          :navigation="true"
          :modules="modules"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="mySwiper filp-swiper">
          <swiper-slide>
            <img src="@/assets/image/product/product01.png"
            alt="productImage" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/product/product01.png"
            alt="productImage" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/product/product01.png"
            alt="productImage" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/product/product01.png"
            alt="productImage" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/image/product/product01.png"
            alt="productImage" />
          </swiper-slide>
        </swiper>
    </div>
  </div>
  <div class="container-fulid">
    <div class="title">講究</div>
    <div class="about">
      <swiper
      :slidesPerView="auto"
      :spaceBetween="30"
      :freeMode="true"
      :mousewheel="true"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
      '1': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      '1440': {
        slidesPerView: 3,
        spaceBetween: 100,
      }
      }"
      :modules="modules"
      class="mySwiper slide-swiper"
      style="cursor: grab;">
        <swiper-slide>
          <img src="@/assets/image/aboutSwiper/about2.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/aboutSwiper/about4.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/aboutSwiper/about5.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/aboutSwiper/about2.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/aboutSwiper/about4.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/aboutSwiper/about5.png" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="container">
    <div class="title">好評回饋</div>
    <div class="evaluation position-relative p-4"
      style="border: solid 2px #b20600;margin: 0 20px">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <swiper
        :slidesPerView="1"
        :grid="{
          rows: 2,
        }"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
        '1': {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        }"
        :modules="modules"
        class="mySwiper grid-swiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="container">
    <!-- 未作RWD -->
    <div class="title">關注我們</div>
    <div class="follow-item d-flex align-items-center justify-content-center tracking-wider">
      <a href="#" class="href-none d-flex align-items-center p-2">
        <img class="d-inline-block" src="@/assets/image/icon/instagram.svg" alt="">
        <p class="ps-1 d-inline-block">Instagram</p>
      </a>
      <a href="#" class="href-none d-flex align-items-center p-2">
        <img class="d-inline-block" src="@/assets/image/icon/facebook.svg" alt="">
        <p class="ps-1 d-inline-block">Facebook</p>
      </a>
    </div>
    <div class="sub-item text-center" style="padding-top:20px">
      <label for="sub">
        <input type="text" id="sub" class="border px-2 py-1">
      </label>
      <button class="ms-2 px-2 py-1 border text-white">subscription</button>
      <p class="tracking-wider text-center" style="padding:20px 0 50px 0;">訂閱Email即刻獲取料理小撇步、食譜</p>
    </div>
  </div>
  <img class="cursor-pointer arrowUp-btn"
  :class="{'d-none': scrollBtn}"
  src="@/assets/image/button/arrowUp.png"
  @click="arrowUp"
  @keypress="arrowUp"
  alt="arrowUp">
  <!-- <h1>HOMEPAGE</h1>
  <img src="@/assets/image/button/arrowRight.png" alt="">
  <img class="cursor-pointer filp-btn" src="@/assets/image/button/filp-arrow-left.png" alt="">
  <img class="cursor-pointer filp-btn" src="@/assets/image/button/filp-arrow-right.png" alt="">
  <h1 class="title">關於</h1>
  <a href="" @click.prevent class="tour-btn">送出</a>
  <a href="" @click.prevent class="tour-btn">加入購物車</a> -->
  <Footer></Footer>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import '@/assets/scss/swiper/_swiper.scss';
import {
  EffectFlip, Pagination, Navigation, Autoplay, FreeMode, Mousewheel, Grid,
} from 'swiper';
import Navbar from '@/components/Front/FrontNavbar.vue';
import Footer from '@/components/Front/FrontFooter.vue';
import arrowupMixin from '@/mixins/arrowupMixin';

export default {
  mixins: [arrowupMixin],
  components: {
    Navbar, Footer, Swiper, SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFlip, Pagination, Navigation, Autoplay, FreeMode, Mousewheel, Grid],
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_API);
    console.log(process.env.VUE_APP_PATH);
  },
};
</script>
