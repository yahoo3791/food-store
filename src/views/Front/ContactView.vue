<template>
<Navbar />
<div class="container">
  <div class="col-12 col-md-5 offset-md-1 mx-auto">
    <h4 class="text-white border-bottom pb-2 my-5">寄送表單聯絡我們</h4>
    <Form action="" @submit="submit">
      <div class="py-3 position-relative">
        <h3 class="d-block formData-label
              tracking-wide text-sm text-white">*聯絡人姓名</h3>
        <Field id="name" name="姓名" rules="required" type="text"
          class="carts-input w-100 p-2 border-0 border-bottom text-white" placeholder="請輸入姓名">
        </Field>
        <br>
        <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="姓名">
        </ErrorMessage>
      </div>
      <div class="py-3 position-relative">
        <h3 class="tracking-wide text-sm text-white">*性別</h3>
        <w-radio class="ps-2" color="white" value="male" name="gendor">
          <p class="text-white">男</p>
        </w-radio>
        <w-radio class="ps-3" color="white" value="female" name="gendor">
          <p class="text-white">女</p>
        </w-radio>
      </div>
      <div class="py-3 position-relative">
        <h3 class="d-block formData-label
            tracking-widest text-sm text-white" for="email">
          *聯絡人信箱</h3>
        <Field id="email" name="信箱" rules="required|email" type="email" class="carts-input w-100 p-2
            border-0 border-bottom text-white" placeholder="請輸入電子信箱">
        </Field>
        <br>
        <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="信箱">
        </ErrorMessage>
      </div>
      <div class="py-3 position-relative">
        <h3 class="d-block formData-label
            tracking-widest text-sm text-white" for="phone">*聯絡人手機</h3>
        <Field id="phone" name="手機" rules="required" type="tel"
          class="carts-input w-100 p-2 border-0 border-bottom text-white" placeholder="請輸入手機號碼">
        </Field>
        <br>
        <ErrorMessage style="color:#ff4343" class="ps-2 position-absolute text-xs" name="手機">
        </ErrorMessage>
      </div>
      <div class="py-3 position-relative">
        <label ref="formMessage" class="d-block formData-label
            tracking-wide text-sm text-white pb-2" for="adress">*留言區
          <span class="text-sm tracking-wide opacity-75"></span>
          <textarea name="" id="" cols="30" rows="10"
            class="carts-textarea text-white border p-3 tracking-wide w-100" placeholder="留下疑問或需求"
            maxlength="300">
            </textarea>
        </label>
      </div>
      <div class="text-end mb-5 mt-3">
        <a href="" @click.prevent class="tour-btn">寄送</a>
      </div>
    </Form>
  </div>
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
import {
  Form, Field,
} from 'vee-validate';

export default {
  components: {
    Navbar, Footer, Form, Field,
  },
};
</script>
