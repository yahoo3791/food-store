<template>
<div class="container-fulid">
  <div class="header d-flex align-items-center justify-content-md-between position-relative"
    style="z-index:10000">
    <a href="/" class="d-block logo cursor-pointer px-2 py-3">
      <img src="@/assets/image/logo/logo.png"
        alt="LOGO-Image">
    </a>
    <!-- sm none -->
    <ul class="d-none d-md-flex align-items-center">
      <li class="position-relative hover-block">
        <a href=""
          class="serve-btn href-none d-inline-block px-2 py-3 text-xl tracking-wide"
          @click.prevent="this.$refs.product.classList.toggle('serve-overlay')"
          @keypress="this.$refs.product.classList.toggle('serve-overlay')">
          全站項目
          <img src="@/assets/image/icon/Combined-shape.png"
            alt="Combined-shape">
        </a>
        <div class="serve-overlay position-absolute left-0 serve-shadow"
          style="top:60px"
          ref="product">
          <a href="/#/shop"
            class="href-none d-block px-3 py-2">
            全部商品
          </a>
          <div
            class="category-btn d-block px-3 py-2">
            <a href=""
            class="href-none"
            @click.prevent="categoryBoolean = !categoryBoolean"
            @keypress="categoryBoolean = !categoryBoolean">
              商品種類
              <img src="@/assets/image/icon/Combined-shape.png"
              alt="Combined-shape"
              :class="{'rotate180':!categoryBoolean}">
            </a>
            <ul class="p-0"
              :class="{'d-none':categoryBoolean}">
              <li class="py-2">
                <a href=""
                  class="d-block href-none"
                  @click.prevent="chineseBoolean = !chineseBoolean"
                  @keypress="chineseBoolean = !chineseBoolean">
                  中式
                  <img src="@/assets/image/icon/Combined-shape.png"
                  alt="Combined-shape"
                  :class="{'rotate180':!chineseBoolean}">
                </a>
                  <ul class="p-0 text-center"
                  :class="{'d-none':chineseBoolean}">
                    <li>
                      <a href="/#/chinese/chineseall"
                        class="d-block href-none py-1">全部
                      </a>
                    </li>
                    <li>
                      <a href="/#/chinese/chinesemeal"
                        class="d-block href-none py-1">餐點
                      </a>
                    </li>
                    <li>
                      <a href="/#/chinese/chinesedessert"
                        class="d-block href-none py-1">甜點
                      </a>
                    </li>
                  </ul>
              </li>
              <li class="py-2">
                <a href=""
                  class="d-block href-none"
                  @click.prevent="westernBoolean = !westernBoolean"
                  @keypress="westernBoolean = !westernBoolean">
                  西式
                  <img src="@/assets/image/icon/Combined-shape.png"
                    alt="Combined-shape"
                    :class="{'rotate180': !westernBoolean}">
                </a>
                  <ul class="p-0 text-center"
                  :class="{'d-none':westernBoolean}">
                    <li>
                      <a href="/#/western/westernall"
                        class="d-block href-none py-1">全部
                      </a>
                    </li>
                    <li>
                      <a href="/#/western/westernmeal"
                        class="d-block href-none py-1">餐點
                      </a>
                    </li>
                    <li>
                      <a href="/#/western/westerndessert"
                        class="d-block href-none py-1">甜點
                      </a>
                    </li>
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="position-relative hover-block">
        <a href=""
          @click.prevent="this.$refs.other.classList.toggle('serve-overlay')"
          @keypress="this.$refs.other.classList.toggle('serve-overlay')"
          class="serve-btn href-none d-inline-block px-2 py-3 text-xl tracking-wide">
          其他服務
          <img src="@/assets/image/icon/Combined-shape.png"
            alt="Combined-shape">
        </a>
        <div class="serve-overlay position-absolute left-0 serve-shadow"
          style="top:60px"
          ref="other">
          <a href="/#/about" class="href-none d-block px-3 py-2">
            關於我們
          </a>
          <a href="/#/faq"
            class="href-none d-block px-3 py-2">
            常見問題
          </a>
          <a href="/#/contact"
            class="href-none d-block px-3 py-2">
            聯絡我們
          </a>
          <a href="#"
            class="href-none d-block px-3 py-2">
            隱私權政策
          </a>
        </div>
      </li>
      <li>
        <div
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          class="d-inline-block px-2 py-3 cursor-pointer">
          <img src="@/assets/image/icon/cart.svg"
            alt="cart-Image">
        </div>
      </li>
      <li>
        <div
          class="d-inline-block px-2 py-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasFav"
          aria-controls="offcanvasFav">
          <img src="@/assets/image/icon/favorite.svg"
            alt="favorite-Image">
        </div>
      </li>
      <li>
        <a href=""
          class="d-inline-block px-2 py-3"
          @click.prevent="openLogin()"
          @keypress="openLogin()">
          <img src="@/assets/image/icon/person.svg"
            alt="person-Image">
        </a>
      </li>
    </ul>
    <!-- sm none -->
    <!-- media md down -->
    <ul class="sm-icon d-flex d-md-none align-items-center ms-auto ps-0">
      <li>
        <div
        class="d-inline-block px-1 py-2 cursor-pointer"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
          <img src="@/assets/image/icon/cart.svg" alt="cart-Image">
        </div>
      </li>
      <li>
        <div
        class="d-inline-block px-1 py-2"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasFav"
        aria-controls="offcanvasFav">
          <img src="@/assets/image/icon/favorite.svg" alt="favorite-Image">
        </div>
      </li>
      <li>
        <a href="" class="d-inline-block px-1 py-2"
          @click.prevent="openLogin()"
          @keypress="openLogin()">
          <img src="@/assets/image/icon/person.svg" alt="person-Image">
        </a>
      </li>
    </ul>
    <div class="d-block d-md-none toggle-btn px-2 py-3 cursor-pointer"
      @click="navbarBoolean = true"
      @keypress="navbarBoolean = true">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- media md down -->
  </div>
  <div class="d-block d-md-none navbarHidden position-absolute top-0 left-0 right-0 w-100"
    style="z-index:10001;"
    :class="{'navbarOverlay':navbarBoolean}">
    <div class="container-fulid">
      <div class="header d-flex align-items-center justify-content-end">
        <div class="d-block p-2"
          @click="navbarBoolean = false"
          @keypress="navbarBoolean = false">
            <div class="navbarClose-btn cursor-pointer">
              <span></span>
              <span></span>
            </div>
        </div>
      </div>
      <ul class="text-center text-lg font-medium tracking-wide px-0"
        style="padding:50px 0;">
        <li style="margin-bottom:25px">
          <a href=""
            class="d-block href-none"
            @click.prevent="this.$refs.productSm.classList.toggle('d-none')"
            @keypress="this.$refs.productSm.classList.toggle('d-none')">
            全站項目
            <img src="@/assets/image/icon/Combined-shape.png"
              alt="Combined-shape">
          </a>
          <ul class="d-none px-0 text-base"
            ref="productSm">
            <li>
              <router-link to="/shop"
              class="d-block href-none px-3 py-2">
                全部商品
              </router-link>
            </li>
            <li>
              <a href=""
                class="href-none"
                @click.prevent="this.$refs.categorySm.classList.toggle('d-none')"
                @keypress="this.$refs.categorySm.classList.toggle('d-none')">
                商品種類
                <img src="@/assets/image/icon/Combined-shape.png"
                  alt="Combined-shape">
              </a>
              <ul class="d-none px-0"
                ref="categorySm">
                <li class="py-2">
                  <a href="" class="href-none"
                    @click.prevent="this.$refs.chineseSm.classList.toggle('d-none')"
                    @keypress="this.$refs.chineseSm.classList.toggle('d-none')">
                    中式
                    <img src="@/assets/image/icon/Combined-shape.png"
                      alt="Combined-shape">
                  </a>
                  <ul class="d-none px-0"
                    ref="chineseSm">
                    <li>
                      <router-link to="/chinese/chineseall"
                      class="d-block href-none py-1">全部</router-link>
                    </li>
                    <li>
                      <router-link to="/chinese/chinesemeal"
                      class="d-block href-none py-1">餐點</router-link>
                    </li>
                    <li>
                      <router-link to="/chinese/chinesedessert"
                      class="d-block href-none py-1">甜點</router-link>
                    </li>
                  </ul>
                </li>
                <li class="py-2">
                  <a href="" class="href-none"
                    @click.prevent="this.$refs.westernSm.classList.toggle('d-none')"
                    @keypress="this.$refs.westernSm.classList.toggle('d-none')">
                    西式
                    <img src="@/assets/image/icon/Combined-shape.png"
                      alt="Combined-shape">
                  </a>
                  <ul class="d-none px-0"
                    ref="westernSm">
                    <li>
                      <a href="/#/western/westernall" class="d-block href-none py-1">
                        全部
                      </a>
                    </li>
                    <li>
                      <a href="/#/western/westernmeal" class="d-block href-none py-1">
                        餐點
                      </a>
                    </li>
                    <li>
                      <a href="/#/western/westerndessert" class="d-block href-none py-1">
                        甜點
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href=""
            class="d-block href-none"
            @click.prevent="this.$refs.otherSm.classList.toggle('d-none')"
            @keypress="this.$refs.otherSm.classList.toggle('d-none')">
            其他服務
            <img src="@/assets/image/icon/Combined-shape.png"
              alt="Combined-shape">
          </a>
          <ul class="d-none px-0 text-base"
            ref="otherSm">
            <li>
              <a href="/#/about" class="d-block href-none px-3 py-2">
                關於我們
              </a>
            </li>
            <li>
              <a href="/#/faq" class="d-block href-none px-3 py-2">
                常見問題
              </a>
            </li>
            <li>
              <a href="/#/contact" class="d-block href-none px-3 py-2">
                聯絡我們
              </a>
            </li>
            <li>
              <a href="#" class="d-block href-none px-3 py-2">
                隱私權政策
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="container-fulid">
  <div class="offcanvas offcanvas-end"
  tabindex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
  style="z-index:100000;">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="container">
        <div class="title">購物車</div>
        <a href="" @click.prevent class="tour-btn">繼續購物</a>
        <a href="" @click.prevent class="tour-btn">結帳</a>
      </div>
    </div>
  </div>
</div>
<div class="container-fulid">
  <div class="offcanvas offcanvas-end"
  tabindex="-1"
  id="offcanvasFav"
  aria-labelledby="offcanvasFavLabel"
    style="z-index:100000;">
    <div class="offcanvas-header">
      <h5 id="offcanvasFavLabel">Offcanvas right</h5>
      <button type="button" class="btn-close text-reset"
      data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="container">
        <div class="title">收藏</div>
        <!-- <a href="" @click.prevent class="tour-btn">繼續購物</a>
        <a href="" @click.prevent class="tour-btn">結帳</a> -->
      </div>
    </div>
  </div>
</div>
<LoginModal ref="modal"></LoginModal>
</template>

<script>
import LoginModal from '@/components/Front/LoginModal.vue';
import 'bootstrap/js/dist/offcanvas';

export default {
  data() {
    return {
      categoryBoolean: true,
      chineseBoolean: true,
      westernBoolean: true,
      navbarBoolean: false,
    };
  },
  components: {
    LoginModal,
  },
  methods: {
    openLogin() {
      this.$refs.modal.modalShow();
    },
  },
};
</script>
