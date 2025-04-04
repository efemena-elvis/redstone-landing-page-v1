<template>
  <div class="cta-block teal-700-bg">
    <div class="vesicash-container">
      <!-- HEADER TEXT -->
      <h1 class="header-text text-center h1-text roobert-700 neutral-10 mgb-32">
        Ready to take your business to the next level with AlexPay?
      </h1>

      <!-- DESCRIPTION TEXT -->
      <p
        class="description-text text-center h6-text roobert-400 grey-200 mgb-50"
      >
        Sign up now to start accepting payments securely and efficiently. With
        our flexible solutions and reliable support, you can focus on what you
        do best – growing your business.
      </p>

      <!-- BUTTON ROW -->
      <div class="button-row">
        <!-- <router-link
          to="/contact"
          class="btn btn-secondary btn-md mgr-16 roobert-500"
          >Get Started</router-link
        > -->

        <router-link
          to="/contact-sales"
          class="btn btn-primary btn-md roobert-500"
          >Contact Sales</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CallToActionSection",

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    ...mapGetters({ getHomePage: "cms/getHomePage" }),
  },
};
</script>

<style lang="scss" scoped>
.cta-block {
  padding: toRem(120) 0;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .vesicash-container {
    @include flex-column-center;

    .header-text {
      @include font-height(64, 72);
      width: 85%;

      @include breakpoint-down(lg) {
        @include font-height(50, 68);
      }

      @include breakpoint-down(md) {
        @include font-height(44, 65);
        width: 100%;
      }

      @include breakpoint-down(sm) {
        @include font-height(36, 58);

        br {
          display: none;
        }
      }

      @include breakpoint-down(xs) {
        @include font-height(30, 52);
      }
    }

    .description-text {
      width: 82%;

      @include breakpoint-down(xl) {
        font-size: toRem(22);
        width: 90%;
      }

      @include breakpoint-down(lg) {
        font-size: toRem(20);
        width: 100%;
      }

      @include breakpoint-down(sm) {
        margin-bottom: toRem(35) !important;
        font-size: toRem(16);
      }
    }

    .button-row {
      @include flex-row-center-nowrap;

      @include breakpoint-down(sm) {
        @include flex-row-center-wrap;
        width: 100%;
      }

      .btn {
        font-size: toRem(16);
        width: toRem(260);
      }

      .btn-secondary {
        padding: toRem(15.25) toRem(50);

        @include breakpoint-down(sm) {
          width: 100%;
          margin: toRem(13) 0 !important;
        }
      }

      .btn-primary {
        padding: toRem(17) toRem(35);

        @include breakpoint-down(sm) {
          margin: toRem(13) 0 !important;
          width: 100%;
        }
      }
    }
  }
}
</style>
