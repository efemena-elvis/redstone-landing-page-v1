<template>
  <div class="home-container container-layout">
    <!-- HOME HERO SECTION -->
    <HomeHeroSection />

    <CustomizePaymentSection />

    <PaymentMethodSection />

    <ServiceSection />

    <!-- API DOC SECTION -->
    <APIDocSection />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>

<script>
import HomeHeroSection from "@/modules/landing/components/home/home-hero-section";
import CustomizePaymentSection from "@/modules/landing/components/home/customize-payment-section";
import PaymentMethodSection from "@/modules/landing/components/home/payment-method-section";
import ServiceSection from "@/modules/landing/components/home/service-section";

export default {
  name: "RedstoneHomePage",

  metaInfo: {
    title: "Alexpay",
    // titleTemplate: "%s - Redstone",
  },

  components: {
    HomeHeroSection,
    CustomizePaymentSection,
    PaymentMethodSection,
    ServiceSection,
    APIDocSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing/components/home/api-doc-section"
      ),
    CallToActionSection: () =>
      import(
        /* webpackChunkName: "landing-module-v2" */ "@/modules/landing/components/home/call-to-action-section"
      ),
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  min-height: 100vh;
}
</style>
