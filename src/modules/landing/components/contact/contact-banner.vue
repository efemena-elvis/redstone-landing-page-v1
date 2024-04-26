<template>
  <div class="contact-banner green-50-bg">
    <div class="title-text grey-900 h1-text roobert-700 text-center">
      Contact Sales
    </div>

    <div class="description-text h6-text grey-600 roobert-400 text-center">
      Redstone’s team of professionals are committed to the highest standards in
      regards to the quality of work we offer our customers.
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactBanner",
};
</script>

<style lang="scss" scoped>
.contact-banner {
  @include flex-column-center;
  gap: toRem(24);
  padding: toRem(80);

  .description-text {
    width: 66%;
  }
}
</style>
