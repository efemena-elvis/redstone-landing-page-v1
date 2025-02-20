<template>
  <div class="bg-[#F1F7F6] min-h-screen">
    <div
      class="container py-[100px] flex flex-col lg:flex-row justify-between gap-6 items-start"
    >
      <div
        class="lg:absolute left-0 top-0 lg:max-w-[439px] pt-[100px] bg-[#FFFFFF] z-10 order-2 lg:order-1"
      >
        <div class="px-[30px] lg:px-[50px]">
          <h4 class="text-[#0B618F] text-3xl font-medium font-roobert-medium">
            We are here to serve you better
          </h4>
          <p class="my-[60px] text-[#043B56] leading-[28px]">
            Your refund request will be processed within a few minutes provided
            you are able to submit the relevant proofs indicating that the
            transaction takes place and the irregularity truly occurred.
          </p>
          <p class="text-[#043B56] leading-[28px]">
            We are committed to giving you a stress free experience and on that
            path we would remain.
          </p>
        </div>
        <div class="w-[200px] aspect-square mt-10">
          <NuxtImg
            src="/images/dispute.png"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        class="p-8 rounded-lg bg-[#FFFFFF] lg:ml-auto w-full lg:max-w-[500px] xl:max-w-[554px] space-y-4 order-1 lg:order-2"
      >
        <div
          class="py-[150px] grid place-items-center animate-in zoom-in-75"
          v-if="submitted"
        >
          <div class="space-y-2">
            <NuxtImg src="/images/check.png" />
            <div class="text-center text-gray-500">Thank you</div>
          </div>
        </div>
        <template v-else>
          <DisputeTypeForm v-model:reasons="reasons" />
          <TransactionDetailsForm v-model:form="form" />
          <TransactionReceipt @uploaded="receipt = $event" />
          <p
            class="my-2 animate-in slide-in-from-top-2 text-red-400 text-sm font-medium font-roobert-medium"
            v-if="error"
          >
            Failed to submit
          </p>
          <SharedButton
            @click="submitDisputeForm"
            :disabled="disabled || submitting"
          >
            <Loader class="size-5 animate-spin" v-if="submitting" />
            <span v-else>Submit dispute</span>
          </SharedButton>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DisputeTypeForm from "@/components/dispute/dispute-type-form.vue";
import TransactionDetailsForm from "@/components/dispute/transaction-details-form.vue";
import TransactionReceipt from "@/components/dispute/transaction-receipt.vue";
import { Loader } from "lucide-vue-next";

const reasons = ref([
  {
    title:
      "Only did one transaction at this merchant, I did not authorize the additional transaction. (Attach proof of the transaction).",
    selected: false,
    id: "0",
    slug: "unauthourized_additional_transaction",
  },
  {
    title:
      "Transaction was declined but the funds were still reserved or deducted from my account (attach a decline slip)",
    selected: false,
    id: "1",
    slug: "transaction_declined",
  },
  {
    title:
      "I returned the goods to the merchant and received a credit voucher,which does not not appear on my account",
    selected: false,
    id: "2",
    slug: "credit_not_seen",
  },
  {
    title:
      "I made a hotel/vehicle booking, but cancelled the booking. (Attach proof of the cancellation letter sent to and acknowledged by the merchant).",
    selected: false,
    id: "3",
    slug: "cancelled_transaction",
  },
  {
    title: "I never received the merchandize I have been debited for.",
    selected: false,
    id: "4",
    slug: "merchandize_not_received",
  },
]);

const form = ref({
  amount: undefined,
  currency: "ZMW",
  date: undefined,
  channel: undefined,
  name: undefined,
  phone: undefined,
});

const disputeType = computed(() => {
  return reasons.value
    .filter((reason) => reason.selected)
    ?.map((reason) => reason.slug)
    ?.join(",");
});

const payload = computed(() => {
  return {
    dispute_type: disputeType.value, //transaction_declined,unauthourized_additional_transaction,credit_not_seen,cancelled_transaction,merchandize_not_received
    amount_debited: Number(form.value?.amount ?? "0"),
    currency: form.value.currency,
    date_of_transaction: form.value.date,
    payment_channel: form.value.channel,
    merchant_name: form.value.name,
    phone_number: form.value.phone,
    transaction_receipt: receipt.value,
  };
});

const disabled = computed(() => {
  return Object.values(payload.value).some((item) => !item);
});

const receipt = ref("");
const submitted = ref(false);
const submitting = ref(false);
const error = ref(false);
const submitDisputeForm = async () => {
  submitting.value = true;
  try {
    const response = await $fetch<{ code: number; status: string }>(
      "https://api.gateway.redstonepgs.com/v1/dispute",
      {
        method: "post",
        body: payload.value,
      }
    );
    submitting.value = false;
    if (response.status !== "success") {
      error.value = true;
      return;
    }
    submitted.value = true;
  } catch (err) {
    error.value = true;
    submitting.value = false;
    submitted.value = false;
    console.error("ERROR SUBMITTING FORM", err);
  }
};
</script>
