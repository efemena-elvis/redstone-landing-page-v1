<template>
  <div class="hero-container">
    <div class="content-wrapper vesicash-container">
      <div class="content-block">
        <div class="hero-title h0-text grey-900 mgb-28 roobert-700">
          One payment platform for your business transactions
        </div>

        <div class="hero-description h6-text grey-500 roobert-400 mgb-40">
          Alexpay makes payment collection and settlement  simple and reliable.
        </div>

        <div class="action-row">
          <!-- <a
            class="btn btn-lg btn-primary roobert-500"
            href="https://app.vesicash.com/register-lander"
            target="_blank"
            >Get Started</a
          > -->

          <router-link
            class="btn btn-lg btn-primary roobert-500"
            to="/contact-sales"
            >Contact Sales</router-link
          >
        </div>
      </div>

      <div class="hero-img-wrapper">
        <img
          v-lazy="loadImage('hero-illustration.svg', 'landing')"
          alt="Hero illustration"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MoRGlobe from "@/shared/components/icon-comps/mor-globe";

export default {
  name: "HomeHeroSection",

  components: {
    MoRGlobe,
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  background: getColor("neutral-10");
  padding-top: toRem(98);
  padding-bottom: toRem(140);
  height: 90vh;
  @include flex-row-between-nowrap;
  align-items: center;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-custom-down(820) {
    height: auto;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .content-wrapper {
    @include flex-row-between-nowrap;

    @include breakpoint-custom-down(820) {
      @include flex-column-center;
    }

    .content-block {
      width: 60%;

      @include breakpoint-down(xl) {
        width: 55%;
      }

      @include breakpoint-custom-down(820) {
        width: 100%;
      }

      .hero-title {
        @include breakpoint-down(xl) {
          @include font-height(64, 72);
        }

        @include breakpoint-down(lg) {
          @include font-height(46, 58);
        }

        @include breakpoint-custom-down(820) {
          text-align: center;
        }

        @include breakpoint-down(md) {
          @include font-height(48, 54);
        }

        @include breakpoint-down(sm) {
          @include font-height(42, 54);
        }
      }

      .hero-description {
        width: 80%;

        @include breakpoint-down(xl) {
          @include font-height(23, 32);
          width: 100%;
        }

        @include breakpoint-custom-down(820) {
          text-align: center;
          margin: 0 auto;
          width: 75%;
        }

        @include breakpoint-down(md) {
          text-align: center;
          width: 80%;
          margin: 0 auto;
        }

        @include breakpoint-down(sm) {
          @include font-height(19, 28);
          width: 90%;
        }
      }

      .action-row {
        @include flex-row-start-nowrap;
        gap: toRem(24);

        @include breakpoint-custom-down(820) {
          margin-bottom: toRem(30);
          width: 100%;
        }

        .btn {
          padding: toRem(17) toRem(52);
          width: toRem(204);
          white-space: nowrap;

          @include breakpoint-custom-down(820) {
            margin: 0 auto;
          }
        }
      }
    }

    .hero-img-wrapper {
      position: relative;
      left: toRem(40);
      width: 40%;

      @include breakpoint-down(xl) {
        left: 0;
        width: 45%;
      }

      @include breakpoint-custom-down(920) {
        left: toRem(-50px);
        overflow: hidden;
      }

      @include breakpoint-custom-down(820) {
        @include flex-row-center-nowrap;
        width: 100%;
        left: 0;
      }

      @include breakpoint-down(md) {
        @include flex-row-center-nowrap;
        margin-top: toRem(40);
      }

      img {
        width: toRem(520);
        height: toRem(420);

        @include breakpoint-down(xl) {
          width: toRem(450);
          height: toRem(380);
        }

        @include breakpoint-down(lg) {
          width: toRem(420);
          height: toRem(350);
        }
      }
    }
  }
}
</style>
