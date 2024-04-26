<template>
  <div class="home-container container-layout">
    <!-- CONTACT BANNER SECTION -->
    <ContactBanner />

    <ContactArea />

    <!-- CALL TO ACTION SECTION -->
    <CallToActionSection />
  </div>
</template>
  
  <script>
import ContactBanner from "@/modules/landing/components/contact/contact-banner";
import ContactArea from "@/modules/landing/components/contact/contact-area";

export default {
  name: "ContactSalesPage",

  metaInfo: {
    title: "Contact Sales",
    // titleTemplate: "%s - Redstone",
  },

  components: {
    ContactBanner,
    ContactArea,
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
  