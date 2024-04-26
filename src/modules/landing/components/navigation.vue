<template>
  <div
    class="fixed-top w-100 index-999 smooth-transition neutral-10-bg"
    :class="{ 'scrolling-up': scrolled }"
    ref="navbar"
  >
    <div class="vesicash-container">
      <div class="navigation-section smooth-transition">
        <router-link :to="{ name: 'RedstoneHome' }" class="brand-logo">
          <img
            v-lazy="loadImage('redstone-logo.svg', 'landing')"
            alt="Redstone Logo"
          />
        </router-link>

        <!-- NAVIGATIONS -->
        <div class="navigations">
          <div
            class="menu-icon icon-hamburger grey-500 f-size-32 pointer"
            @click="toggleMobileDropdown"
          ></div>

          <!-- NAV BUTTONS -->
          <div class="nav-buttons">
            <a
              :href="`${$app_url}/contact-sales`"
              target="_blank"
              class="btn btn-tertiary btn-md roobert-500"
              >Contact Sales</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator" :style="{ width: `${page_scrolled}%` }"></div>
  </div>
</template>

<script>
export default {
  name: "Navigation",

  components: {},

  props: {
    scrolled: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    page_scrolled: 0,
  }),

  mounted() {
    this.checkMobileView();
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScrollExtent);
  },

  methods: {
    updateScrollExtent() {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      this.page_scrolled = (window.scrollY / totalHeight) * 100;
    },

    toggleMobileDropdown() {
      this.show_mobile_dropdown = !this.show_mobile_dropdown;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-section {
  @include flex-row-between-nowrap;
  padding: toRem(20) 0;

  .brand-logo {
    svg {
      width: toRem(150);
      height: auto;
    }
  }

  .navigations {
    @include flex-row-end-nowrap;

    .menu-icon {
      font-size: toRem(25);
      display: none;

      @include breakpoint-custom-down(1020) {
        display: unset;
      }
    }

    .nav-items {
      @include flex-row-end-nowrap;

      @include breakpoint-custom-down(1020) {
        display: none;
      }
    }

    .nav-buttons {
      @include flex-row-end-nowrap;

      @include breakpoint-custom-down(1020) {
        display: none;
      }

      .btn {
        font-size: toRem(15.75);

        @include breakpoint-custom-down(1100) {
          @include font-height(15.5, 21);
        }

        @include breakpoint-custom-down(1020) {
          @include font-height(16, 22);
        }
      }

      .btn-tertiary {
        padding: toRem(11) toRem(37);

        @include breakpoint-custom-down(920) {
          padding: toRem(12) toRem(30);
          margin-right: toRem(12);
        }
      }

      .btn-primary {
        padding: toRem(11.75) toRem(20);

        @include breakpoint-custom-down(920) {
          padding: toRem(12) toRem(15);
        }
      }
    }
  }
}

.scrolling-up {
  background: getColor("neutral-10");
  @include transition(0.3s);

  .navigation-section {
    padding: toRem(10) 0;
  }
}

.scrolling-down {
  display: none;
}

.scroll-indicator {
  height: toRem(3);
  background: getColor("teal-500");
  width: 40%;
  position: fixed;
  left: 0;
}
</style>
