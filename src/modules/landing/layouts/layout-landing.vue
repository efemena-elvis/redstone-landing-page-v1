<template>
  <div>
    <!-- TOP NAVIGATION -->
    <Navigation :key="$route.fullPath" :scrolled="scrolled" />

    <!-- BODY SECTION -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- FOOTER SECTION -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/modules/landing/components/navigation";
import Footer from "@/modules/landing/components/footer";

export default {
  name: "LayoutLanding",

  components: {
    Navigation,
    Footer,
  },

  computed: {},

  mounted() {
    this.$color.setPageBackgroundColor("#ffffff");

    window.onscroll = () => {
      this.scrolled = window.scrollY > 20;
    };
  },

  data() {
    return {
      scrolled: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
