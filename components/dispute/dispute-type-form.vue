<template>
  <collapsible class="border p-4 rounded-lg">
    <template #trigger="{ opened }">
      <div class="flex justify-between items-center">
        <div class="text-[#171918] font-medium font-roobert-medium">
          Please select any of these if it applies to you?
        </div>
        <CaretDownIcon
          :class="[
            'relative transition-transform',
            opened ? 'rotate-180' : 'rotate-0',
          ]"
        />
      </div>
    </template>
    <template #content="{ opened }">
      <div :class="['space-y-2', opened ? 'pt-4' : '']">
        <label
          v-for="reason in reasons"
          :key="reason.id"
          class="flex items-start gap-x-3"
          :for="reason.id"
        >
          <input
            type="checkbox"
            name="reason"
            :id="reason.id"
            class="size-4 shrink-0 mt-1"
            @change="(e) => updateReason(reason, e.target.checked as boolean)"
          />
          <div class="text-[#171918]">
            {{ reason.title }}
          </div>
        </label>
      </div>
    </template>
  </collapsible>
</template>

<script lang="ts" setup>
import collapsible from "../shared/collapsible.vue";
import CaretDownIcon from "@/assets/svgs/caret-down.svg";

type Reason = {
  title: string;
  selected: boolean;
  id: string;
  slug: string;
};

const reasons = defineModel<Reason[]>("reasons");
const updateReason = (reason: Reason, checked: boolean) => {
  reasons.value = reasons.value?.map((item) => {
    if (item.id === reason.id) return { ...reason, selected: checked };
    return item;
  });
};
</script>
