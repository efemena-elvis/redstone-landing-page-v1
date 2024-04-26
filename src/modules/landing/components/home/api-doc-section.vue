<template>
  <div class="api-doc-section neutral-10-bg">
    <div class="vesicash-container">
      <div class="row">
        <!-- COPY SECTION -->
        <div class="copy-section col-12 col-md-6 mb-5 mb-md-0">
          <h2 class="title-text h1-text roobert-700 grey-900 mgb-32">
            Your business, your payments
          </h2>

          <h5 class="description-text h6-text roobert-400 grey-600">
            API integration
          </h5>
        </div>

        <!-- IMAGE SECTION -->
        <div class="col-12 col-md-6">
          <div class="image-section position-relative w-100">
            <img
              v-lazy="loadImage('doc-screenshot.png', 'landing')"
              alt="API-code"
              class="wt-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "APIDocSection",
};
</script>

<style lang="scss" scoped>
.api-doc-section {
  padding: toRem(120) 0;

  @include breakpoint-down(lg) {
    padding: toRem(100) 0;
  }

  @include breakpoint-down(md) {
    padding: toRem(80) 0;
  }

  .row {
    @include flex-row-between-wrap;
    align-items: flex-start;

    .title-text {
      width: 90%;

      @include breakpoint-down(lg) {
        @include font-height(32, 40);
      }

      @include breakpoint-down(sm) {
        @include font-height(30, 40);
      }
    }

    .description-text {
      width: 80%;

      @include breakpoint-down(lg) {
        font-size: toRem(18);
        width: 95%;
      }

      @include breakpoint-down(sm) {
        font-size: toRem(16);
        width: 100%;
      }
    }

    .doc-link {
      @include flex-row-start-nowrap;
      width: max-content;

      .icon-wrapper {
        @include draw-shape(24);
        position: relative;

        .icon {
          @include center-placement();
          margin-left: toRem(1);
          font-size: toRem(23);
        }
      }

      .text {
        @include breakpoint-down(lg) {
          font-size: toRem(15);
        }
      }
    }

    .image-section {
      position: relative;
    }
  }
}
</style>
