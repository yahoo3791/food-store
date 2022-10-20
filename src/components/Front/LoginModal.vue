<template>
  <div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  ref="modal"
  style="padding-top:10vh;">
    <div class="modal-dialog">
      <div class="modal-content loginBg">
        <div class="" style="height:80px">
          <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
          <!-- <button type="button" class="btn-close bg-white"
          data-bs-dismiss="modal" aria-label="Close">Ｘ</button> -->
          <button class="bg-white btn-close" data-bs-dismiss="modal"
          aria-label="Close">X</button>
        </div>
        <div class="" style="padding-top:50px">
          <div class="d-flex align-items-center justify-content-around">
            <a href="" class="d-inline-block w-100 text-center"
              style="border:1px solid white">登入</a>
            <a href="" class="d-inline-block w-100 text-center">註冊</a>
            <a href="" class="d-inline-block w-100 text-center">管理員</a>
          </div>
          <div class="container">
            <Form @submit="submit">
              <div class="py-3 position-relative">
                <h3 class="d-block formData-label
                tracking-widest text-sm text-white" for="email">
                  信箱</h3>
                <Field id="email" name="信箱" rules="required|email" type="email" class="w-100 p-2
                border-0 border-bottom text-white" placeholder="請輸入電子信箱">
                </Field>
                <br>
                <ErrorMessage style="color:#ff4343"
                class="ps-2 position-absolute text-xs" name="信箱">
                </ErrorMessage>
              </div>
              <div class="py-3 position-relative">
                <h3 class="d-block formData-label
                  tracking-widest text-sm text-white" for="password">
                  密碼</h3>
                <Field id="password" name="密碼"
                rules="required" type="password" class="w-100 p-2
                  border-0 border-bottom text-black" placeholder="請輸入密碼">
                </Field>
                <br>
                <ErrorMessage style="color:#ff4343"
                class="ps-2 position-absolute text-xs" name="密碼">
                </ErrorMessage>
              </div>
              <button type="submit" class="tour-btn"
              style="margin-bottom: 50px;margin-top:40px">登入</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
import {
  Form, Field, ErrorMessage,
} from 'vee-validate';

export default {
  components: {
    Form, Field, ErrorMessage,
  },
  mixins: [modalMixin],
  methods: {
    submit() {
      console.log('123');
    },
  },
};
</script>
