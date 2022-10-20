<template>
  <Navbar />
  <div class="container">
    <div class="title">網購常見問題</div>
    <h3>當付款失敗怎麼辦？</h3>
    <p>請確認付款失敗原因後，先與發卡行聯繫，或更換其他信用卡進行付款。
      另您可於付款失敗頁面點選「重新付款」進行後續刷卡流程，付款是否成功將再發函通知，
      您屆時亦可至會員專區進行查詢訂單完成後30分鐘內，未付款成功，
    系統將自動取消訂單，建議您可重新完成訂單後再進行支付。</p>
    <h3>目前有哪些付款方式？</h3>
    <p>線上刷卡：使用信用卡(VISA、MASTER、JCB)即時線上刷卡，馬上就可以付款完成。</p>
    <h3>請問有實體店面嗎？</h3>
    <p>目前已結束實體店面，轉型網路商店，有設置實體客服中心並合法營業登記。</p>
    <h3>購買金額達多少以上可免運費</h3>
    <p>歡慶開幕目前皆為免運費!!</p>
  </div>
  <div class="container">
    <div class="title">結帳流程</div>
    <h3>購買商品指引</h3>
    <p style="padding-bottom:100px;">選購商品→購物結帳→填寫資料與付款→訂單成立完成</p>
  </div>
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
