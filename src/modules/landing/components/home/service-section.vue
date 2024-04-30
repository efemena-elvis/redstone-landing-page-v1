<template>
  <div class="payment-section green-50-bg overflow-hidden">
    <div class="vesicash-container">
      <div class="row title-top-row">
        <div class="img-stack">
          <img v-lazy="loadImage('design-stack.svg', 'landing')" alt="" />
        </div>

        <div class="col-12 col-md-6 order-1 order-lg-0"></div>

        <!-- COPY SECTION -->
        <div
          class="copy-section col-12 col-md-6 col-lg-5 order-0 order-lg-1 mb-5 mb-md-0"
        >
          <h2 class="title-text h1-text roobert-700 grey-900 mgb-24">
            Redstone is right for you
          </h2>

          <h5 class="description-text h6-text roobert-400 grey-600">
            We have become the best option for businesses just because we offer
          </h5>
        </div>
      </div>

      <div class="row justify-content-between">
        <div class="col-12 col-md-6 col-lg-5 mgb-50">
          <div class="payment-card">
            <div class="icon-wrapper">
              <img
                v-lazy="loadImage('switch-icon.svg', 'landing')"
                alt="code-icon"
              />
            </div>

            <div class="title-copy h3-text grey-900 mgb-12">
              Seamless Reconciliation
            </div>

            <div class="content-copy h7-text grey-600">
              We handle the complexities in real-time, accurately tracking
              payments and their corresponding details, such as payer
              information and payment timestamps.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5 mgb-50">
          <div class="payment-card">
            <div class="icon-wrapper">
              <img
                v-lazy="loadImage('fraud-icon.svg', 'landing')"
                alt="globe-icon"
              />
            </div>

            <div class="title-copy h3-text grey-900 mgb-12">
              Fraud Detection
            </div>

            <div class="content-copy h7-text grey-600">
              Our payment gateway employs advanced fraud detection mechanisms,
              swiftly identifying and mitigating fraudulent transactions to
              safeguard your business and customers.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5 mgt-30">
          <div class="payment-card">
            <div class="icon-wrapper">
              <img
                v-lazy="loadImage('expand-icon.svg', 'landing')"
                alt="mobile-icon"
              />
            </div>

            <div class="title-copy h3-text grey-900 mgb-12">
              Flexible settlement
            </div>

            <div class="content-copy h7-text grey-600">
              We empowers merchants with greater control over cash flow
              management, optimizing financial processes and enhancing the
              payment experience.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5 mgt-40 img-column">
          <img v-lazy="loadImage('coins.svg', 'landing')" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "ServiceSection",
};
</script>
    
<style lang="scss" scoped>
.payment-section {
  padding: toRem(100) 0 toRem(120);
  position: relative;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .img-stack {
    position: absolute;
    left: 0;
    top: 0;

    @include breakpoint-down(lg) {
      display: none;
    }
  }

  .title-top-row {
    margin-bottom: toRem(80);

    @include breakpoint-down(md) {
      margin-bottom: toRem(20);
    }
  }

  .row {
    @include flex-row-between-wrap;

    .title-text {
      //   width: 90%;

      @include breakpoint-down(xl) {
        @include font-height(54, 64);
        width: 86%;
      }

      @include breakpoint-down(lg) {
        @include font-height(38, 46);
      }

      @include breakpoint-down(sm) {
        @include font-height(32, 42);
      }
    }

    .description-text {
      //   width: 90%;

      @include breakpoint-down(xl) {
        font-size: toRem(21);
        width: 96%;
      }

      @include breakpoint-down(lg) {
        @include font-height(19, 30);
      }

      @include breakpoint-down(sm) {
        font-size: toRem(18);
        width: 100%;
      }
    }
  }

  .payment-card {
    .icon-wrapper {
      background: getColor("neutral-10");
      @include draw-shape(70);
      border-radius: 50%;
      border: toRem(2) solid getColor("grey-50");
      margin-bottom: toRem(24);
      @include flex-row-center-nowrap;
      align-items: center;
    }

    .title-copy {
      @include breakpoint-down(xl) {
        @include font-height(28, 36);
      }

      @include breakpoint-down(lg) {
        @include font-height(25, 34);
      }

      @include breakpoint-down(sm) {
        @include font-height(23, 34);
      }
    }

    .content-copy {
      @include breakpoint-down(xl) {
        @include font-height(18, 30);
      }

      @include breakpoint-down(lg) {
        @include font-height(17.5, 28);
      }

      @include breakpoint-down(sm) {
        @include font-height(16, 28);
      }
    }
  }

  .img-column {
    @include breakpoint-down(lg) {
      @include flex-row-center-nowrap;
    }

    @include breakpoint-down(md) {
      margin-top: toRem(80) !important;
    }

    img {
      @include breakpoint-down(lg) {
        width: toRem(320);
        height: auto;
      }

      @include breakpoint-down(sm) {
        width: toRem(280);
      }
    }
  }
}
</style>
    