<template>
  <div class="payment-section green-50-bg">
    <div class="vesicash-container">
      <div class="row title-top-row">
        <div
          class="copy-section col-12 col-md-6 order-1 order-md-0 mb-5 mb-md-0"
        >
          <div class="payment-card mgr-24">
            <div class="icon-wrapper">
              <img
                v-lazy="loadImage('globe-icon.svg', 'landing')"
                alt="globe-icon"
              />
            </div>

            <div class="title-copy h3-text grey-900 mgb-12">Web SDKs</div>

            <div class="content-copy h7-text grey-500">
              Create SDK solution for your web payment collection flexible for
              customers.
            </div>
          </div>
        </div>

        <!-- COPY SECTION -->
        <div
          class="copy-section col-12 col-md-6 mb-5 order-0 order-md-1 mb-md-0"
        >
          <h2 class="title-text h1-text roobert-700 grey-900 mgb-32">
            Customise your payments
          </h2>

          <h5 class="description-text h6-text roobert-400 grey-500">
            Effortlessly set up a preferred payment route to collect payments
            from your customers. Our documentation is well placed and easy for
            developers.
          </h5>
        </div>
      </div>

      <div class="row justify-content-between">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <div class="payment-card mgr-24">
            <div class="icon-wrapper">
              <img
                v-lazy="loadImage('code-icon.svg', 'landing')"
                alt="code-icon"
              />
            </div>

            <div class="title-copy h3-text grey-900 mgb-12">API</div>

            <div class="content-copy h7-text grey-500">
              Our robust API  allows you can set up payment links and checkout
              pages for cards, USSD, bank transfers, and mobile money payment
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="payment-card">
            <div class="icon-wrapper">
              <img
                v-lazy="loadImage('mobile-icon.svg', 'landing')"
                alt="mobile-icon"
              />
            </div>

            <div class="title-copy h3-text grey-900 mgb-12">Mobile SDKs</div>

            <div class="content-copy h7-text grey-500">
              Access a complete suite of payment solutions for  cards, USSD,
              bank transfers, and mobile money with Mobile SDKs.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CustomizePaymentSection",
};
</script>
  
  <style lang="scss" scoped>
.payment-section {
  padding: toRem(100) 0 toRem(120);

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .title-top-row {
    margin-bottom: toRem(80);

    @include breakpoint-down(md) {
      margin-bottom: 0;
    }
  }

  .row {
    @include flex-row-between-wrap;

    .title-text {
      width: 74%;

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
      // width: 96%;

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
    background: getColor("neutral-10");
    border-radius: toRem(24);
    overflow: hidden;
    padding: toRem(24);
    height: toRem(300);

    @include breakpoint-down(lg) {
      margin-right: 0 !important;
    }

    @include breakpoint-down(md) {
      padding: toRem(32) toRem(24);
      height: auto;
    }

    @include breakpoint-down(sm) {
      padding: toRem(24) toRem(18);
    }

    .icon-wrapper {
      @include draw-shape(70);
      border-radius: 50%;
      border: toRem(2) solid getColor("grey-50");
      margin-bottom: toRem(24);
      @include flex-row-center-nowrap;
      align-items: center;

      @include breakpoint-down(md) {
        @include draw-shape(60);
      }
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
}
</style>
  