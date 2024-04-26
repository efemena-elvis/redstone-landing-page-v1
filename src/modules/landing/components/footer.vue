<template>
  <div class="footer-section">
    <div class="vesicash-container">
      <div class="row mgb-50">
        <div class="col-12 col-sm-12 col-md-4 footer-left">
          <div class="brand-logo mgb-28">
            <img
              v-lazy="loadImage('redstone-logo.svg', 'landing')"
              alt="Redstone Logo"
            />
          </div>

          <a
            href="mailto:support@redstonestonpgs.com
"
            class="info-text mgb-16"
            >support@redstonestonpgs.com
          </a>

          <!-- SOCIAL ICONS -->
          <div class="social-icons mgt-32">
            <a
              href="https://www.instagram.com/vesicash/"
              class="social-link"
              target="_blank"
            >
              <div class="icon icon-instagram"></div>
            </a>

            <a
              href="https://www.facebook.com/vesicash"
              class="social-link"
              target="_blank"
            >
              <div class="icon icon-facebook"></div>
            </a>

            <a
              href="https://twitter.com/Vesicash"
              class="social-link"
              target="_blank"
            >
              <div class="icon icon-twitter"></div>
            </a>

            <a
              href="https://www.linkedin.com/company/vesicash"
              target="_blank"
              class="social-link"
            >
              <div class="icon icon-linkedin"></div>
            </a>
          </div>
        </div>

        <!-- NAVIGATION LINKS CONTAINER -->
        <div class="col-12 col-sm-12 col-md-8 footer-right mt-5 mt-md-0">
          <div class="row justify-content-end">
            <div class="col-12 col-sm-4 mb-5 mb-sm-0">
              <div class="nav-item fw-700 mgb-24">Product</div>

              <router-link to="/privacy-policy" class="nav-item nav-item-link"
                >Privacy Policy</router-link
              >

              <router-link to="/terms" class="nav-item nav-item-link"
                >Terms of Use</router-link
              >
            </div>

            <div class="col-12 col-sm-4 mb-5 mb-sm-0">
              <div class="nav-item fw-700 mgb-24">Company</div>

              <router-link to="/contact" class="nav-item nav-item-link"
                >Contact Sales</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT TEXT -->
      <div class="row copyright-row">
        <div
          class="copyright-text col-12 grey-900 text-center tertiary-1-text roobert-400"
        >
          Copyright {{ current_year }}. RedStone, Zambia Ltd.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VesicashBrandLogo from "@/shared/components/icon-comps/vesicash-brand-logo";

export default {
  name: "Footer",

  components: {
    VesicashBrandLogo,
  },

  data: () => ({
    current_year: "",
  }),

  mounted() {
    let date = new Date();
    this.current_year = date.getFullYear();
  },
};
</script>

<style lang="scss" scoped>
.footer-section {
  margin-top: toRem(110);

  @include breakpoint-down(md) {
    margin-top: toRem(80);
  }

  .footer-left {
    .brand-logo {
      svg {
        width: toRem(190);
        height: auto;
      }
    }

    .info-text {
      @include generate-font-type("tertiary-1");
      font-family: "Roobert-Medium", sans-serif;
      color: getColor("grey-900");
      display: block;

      &:hover {
        color: getColor("green-600");
      }
    }

    .social-icons {
      @include flex-row-start-nowrap;

      .social-link {
        border: toRem(1) solid getColor("grey-100");
        @include transition(0.4s);
        border-radius: toRem(40);
        margin-right: toRem(22);
        @include draw-shape(48);
        position: relative;

        .icon {
          color: getColor("teal-900");
          @include center-placement;
          @include transition(0.4s);
          font-size: toRem(22);
        }

        &:last-of-type {
          margin-right: 0;
        }

        &:hover {
          background: getColor("grey-50");

          .icon {
            color: getColor("green-600");
          }
        }
      }
    }
  }

  .footer-right {
    .nav-item {
      @include generate-font-type("primary-1");
      font-family: "Roobert-Bold", sans-serif;
      color: getColor("teal-900");
      position: relative;

      &:last-of-type {
        margin-bottom: 0;
      }

      &-link {
        @include generate-font-type("tertiary-1");
        font-family: "Roobert-Regular", sans-serif;
        color: getColor("grey-700");
        margin-bottom: toRem(24);
        width: max-content;
        display: block;

        &:hover {
          color: getColor("green-600");
        }
      }

      .coming-soon-indicator {
        font-size: toRem(12);
        position: absolute;
        top: toRem(-16);
        right: toRem(-15);
      }

      // .icon {
      //   position: relative;
      //   left: toRem(4);
      //   top: toRem(1.35);

      //   &:hover ~ .coming-soon-indicator {
      //     display: unset;
      //   }
      // }
    }

    .product-display {
      .top-img {
        width: toRem(142);
        height: auto;
      }

      .bottom-text {
        @include flex-row-start-wrap;
        color: getColor("grey-700");

        img {
          padding: 0 toRem(4);
          width: toRem(48);
          height: auto;
        }
      }
    }
  }

  .copyright-row {
    border-top: toRem(0.5) solid getColor("grey-100");
    padding: toRem(50) 0;

    .copyright-text {
      @include breakpoint-down(sm) {
        font-size: toRem(15);
      }
    }
  }
}
</style>
