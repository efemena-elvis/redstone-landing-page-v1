<template>
  <div>
    <div @click="toggle" class="cursor-pointer">
      <slot name="trigger" v-bind="{ opened, toggle }"></slot>
    </div>
    <div
      :class="['overflow-hidden', opened ? 'expan' : 'collaps']"
      ref="content"
      :style="{
        '--collapsible-open-height': 'auto',
        '--collapsible-closed-height': '0px',
        height: opened
          ? 'var(--collapsible-open-height)'
          : 'var(--collapsible-closed-height)',
      }"
    >
      <slot name="content" v-bind="{ opened, toggle }"> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const opened = ref(false);
const toggle = () => {
  opened.value = !opened.value;
};

const content = ref<HTMLDivElement>();
const contentHeight = computed(() => content.value?.scrollHeight ?? 0);
</script>

<style scoped>
.expand {
  animation: expand ease-out 0.25s;
}
.collapse {
  animation: collapse ease-in 0.25s;
}

@keyframes expand {
  from {
    height: var(--collapsible-closed-height);
  }
  to {
    height: var(--collapsible-open-height);
  }
}

@keyframes collapse {
  from {
    height: var(--collapsible-open-height);
  }
  to {
    height: var(--collapsible-closed-height);
  }
}
</style>
