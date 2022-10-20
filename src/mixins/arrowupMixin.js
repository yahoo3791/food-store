export default {
  data() {
    return {
      scrollBtn: true,
    };
  },
  methods: {
    arrowUp() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      if (window.scrollY > 550) {
        this.scrollBtn = false;
      } else {
        this.scrollBtn = true;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
