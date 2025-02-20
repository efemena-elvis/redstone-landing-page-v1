<template>
  <div class="relative space-y-1">
    <div
      class="flex relative focus-within:border-green-400 border transition-colors rounded-md"
    >
      <div
        class="min-w-fit grid place-items-center px-3 bg-[#C1C9C8]/40 cursor-pointer border-r-2"
        @click="toggle"
      >
        {{ input?.currency }}
      </div>
      <input
        type="text"
        class="outline-0 py-2 w-[99%] px-2 mr-1 text-right"
        placeholder="45.50"
        :value="input?.amount"
        @change="(e) => updateAmount(e.target?.value)"
      />
    </div>
    <div
      class="max-h-[230px] w-full border rounded-lg overflow-auto p-2 animate-in slide-in-from-top-1 absolute z-10 bg-white"
      v-if="opened"
    >
      <div
        class="p-2 borcer-b bg-transparent hover:bg-[#C1C9C8]/40 transition-colors"
        @click="uppdateCurrency('NGN')"
      >
        NGN (N)
      </div>
      <div
        class="p-2 borcer-b bg-transparent hover:bg-[#C1C9C8]/40 transition-colors"
        @click="uppdateCurrency('ZMW')"
      >
        ZMW (Z)
      </div>
      <div
        class="p-2 borcer-b bg-transparent hover:bg-[#C1C9C8]/40 transition-colors"
        @click="uppdateCurrency('USD')"
      >
        USD ($)
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const opened = ref(false);

const toggle = () => {
  opened.value = !opened.value;
};

const input = defineModel<{ amount?: number | string; currency?: string }>(
  "input"
);

const uppdateCurrency = (currency: string) => {
  if (!input.value) return;
  input.value = { ...input.value, currency };
  opened.value = false;
};

const updateAmount = (amount?: number) => {
  if (!input.value || !amount) return;
  input.value = { ...input.value, amount };
};
</script>
