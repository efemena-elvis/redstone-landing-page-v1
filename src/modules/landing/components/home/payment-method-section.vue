<template>
  <div class="payment-section overflow-hidden">
    <div class="vesicash-container">
      <div class="row title-top-row">
        <!-- COPY SECTION -->
        <div class="copy-section col-12 col-md-6 mb-5 mb-md-0">
          <h2 class="title-text h1-text roobert-700 grey-900 mgb-32">
            How customers pay you
          </h2>

          <h5 class="description-text h6-text roobert-400 grey-600">
            Simple and easy payment options.
          </h5>
        </div>

        <div class="section-img">
          <img v-lazy="loadImage('circular.svg', 'landing')" alt="" />
        </div>

        <div class="section-rect"></div>
      </div>

      <div class="row justify-content-between mgt-20">
        <div class="col-12 col-md-6 col-lg-5 mgb-48">
          <div class="payment-card">
            <div class="title-copy h3-text grey-900 mgb-12">USSD</div>

            <div class="content-copy h7-text grey-600">
              USSD as a payment option in our gateway, offering customers a
              convenient and accessible way to make transactions directly from
              their mobile phones
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5 mgb-48">
          <div class="payment-card">
            <div class="title-copy h3-text grey-900 mgb-12">Bank Transfer</div>

            <div class="content-copy h7-text grey-600">
              Another payment option within our gateway, providing customers
              with a secure and reliable method to transfer funds directly from
              their bank accounts.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5 mgb-48">
          <div class="payment-card">
            <div class="title-copy h3-text grey-900 mgb-12">Card</div>

            <div class="content-copy h7-text grey-600">
              Card payments are seamlessly integrated into our payment gateway,
              allowing customers to securely complete transactions using their
              debit or credit cards, ensuring convenience and peace of mind for
              both businesses and customers alike.
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-5">
          <div class="payment-card">
            <div class="title-copy h3-text grey-900 mgb-12">Mobile Money</div>

            <div class="content-copy h7-text grey-600">
              We support mobile money, allowing customers to make secure and
              convenient transactions using their mobile wallets, simplifying
              the payment process for users across various regions.
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
  position: relative;
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
      margin-bottom: toRem(20);
    }
  }

  .section-img {
    position: absolute;
    left: toRem(400);
    z-index: 3;
    top: toRem(-20);

    @include breakpoint-down(lg) {
      left: toRem(280);

      img {
        width: 80%;
      }
    }

    @include breakpoint-down(md) {
      display: none;
    }
  }

  .section-rect {
    position: absolute;
    width: 100%;
    height: toRem(540);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 58.06%);
    z-index: 7;
    top: 130%;
  }

  .row {
    @include flex-row-between-wrap;
    position: relative;
    z-index: 9;

    .title-text {
      width: 90%;

      @include breakpoint-down(xl) {
        @include font-height(54, 64);
        width: 86%;
      }

      @include breakpoint-down(lg) {
        @include font-height(38, 46);
        margin-bottom: toRem(20) !important;
      }

      @include breakpoint-down(sm) {
        @include font-height(32, 42);
      }
    }

    .description-text {
      width: 70%;

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
    @include breakpoint-down(md) {
      margin-bottom: toRem(12);
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
    