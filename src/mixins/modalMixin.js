import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    modalShow() {
      this.modal.show();
    },
    modalHide() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
