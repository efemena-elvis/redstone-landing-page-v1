<template>
  <collapsible class="border p-4 rounded-lg">
    <template #trigger="{ opened }">
      <div class="flex justify-between items-center">
        <div class="text-[#171918] font-medium font-roobert-medium">
          Details of transaction
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
      <div :class="['space-y-4', opened ? 'pt-4' : '']">
        <div class="space-y-1">
          <label
            for="amount"
            class="text-sm font-medium font-roobert-medium block"
            >Amount debited</label
          >
          <currencyInput
            v-model:input="cost"
            @update:input="updateCost($event)"
          />
        </div>

        <div class="space-y-1">
          <label
            for="date"
            class="text-sm font-medium font-roobert-medium block"
            >Date of transaction</label
          >
          <input
            type="date"
            class="outline-0 border rounded-md focus:border-green-400 p-2 w-full"
            id="date"
            @change="(e) => updateForm('date', e.target?.value)"
          />
        </div>
        <div class="space-y-1">
          <label
            for="channel"
            class="text-sm font-medium font-roobert-medium block"
            >Payment channel</label
          >
          <select
            name="channel"
            id="channel"
            class="outline-0 border rounded-md focus:border-green-400 p-2 w-full"
            placeholder="Enter payment channel"
            @change="(e) => updateForm('channel', e.target.value)"
            :value="form?.channel"
          >
            <option value="card">Card</option>
            <option value="mobile_money">Mobile money</option>
          </select>
        </div>
        <div class="space-y-1">
          <label
            for="merchant"
            class="text-sm font-medium font-roobert-medium block"
            >Merchant Name</label
          >
          <input
            type="text"
            class="outline-0 border rounded-md focus:border-green-400 p-2 w-full"
            placeholder="Enter merchant name"
            id="merchant"
            @change="(e) => updateForm('name', e.target?.value)"
          />
        </div>
        <div class="space-y-1">
          <label
            for="phone"
            class="text-sm font-medium font-roobert-medium block"
            >Phone number</label
          >
          <input
            type="text"
            class="outline-0 border rounded-md focus:border-green-400 p-2 w-full"
            placeholder="Enter phone number"
            @change="(e) => updateForm('phone', e.target?.value)"
            id="phone"
          />
        </div>
      </div>
    </template>
  </collapsible>
</template>

<script lang="ts" setup>
import collapsible from "../shared/collapsible.vue";
import CaretDownIcon from "@/assets/svgs/caret-down.svg";
import currencyInput from "../shared/currency-input.vue";

type TxForm = {
  amount?: number;
  currency?: string;
  date?: string;
  channel?: "card" | "mobile-money";
  name?: string;
  phone?: string;
};

type Fields = "amount" | "currency" | "date" | "channel" | "name" | "phone";
const form = defineModel<TxForm>("form");
const cost = ref({
  amount: form.value?.amount,
  currency: form.value?.currency,
});

const updateForm = (field: Fields, value: string | number) => {
  if (!form.value) return;
  Object.assign(form.value, { [field]: value });
};

const updateCost = (cost?: {
  amount?: number | string;
  currency?: number | string;
}) => {
  if (!form.value || !cost) return;
  Object.assign(form.value, { amount: cost.amount, currency: cost.currency });
};
</script>
