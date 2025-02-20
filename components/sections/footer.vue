<template>
  <div class="bg-background pt-12">
    <div class="container relative">
      <NuxtLink
        class="flex items-center gap-x-px text-secondary text-[24px] leading-5"
        to="/"
      >
        <RedStoneIcon />
        Redstone
      </NuxtLink>
      <div
        class="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[50px] my-10"
      >
        <div class="space-y-6">
          <a
            class="text-muted-foreground"
            v-for="(email, i) in supportEmails"
            :key="i"
            :href="`mailto:${email.email_address}`"
            >{{ email.email_address }}</a
          >
          <div class="flex items-center gap-x-4">
            <PrismicLink
              v-for="(link, i) in socialLinks"
              :field="link.link"
              :key="link.icon.url ?? i"
              class="size-[48px] hover:bg-muted/50 cursor-pointer transition-colors rounded-full border grid place-items-center"
            >
              <PrismicImage
                :field="link.icon"
                v-if="link.icon.url"
                class="max-w-full max-h-full"
              />
            </PrismicLink>
          </div>
        </div>
        <div class="space-y-6">
          <div class="">Product</div>
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="/storefront"
          >
            Storefront
          </NuxtLink>
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="/dispute"
          >
            Dispute
          </NuxtLink>
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="/privacy-policy"
          >
            Privacy poilcy
          </NuxtLink>
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="/terms"
          >
            Terms of use
          </NuxtLink>
          <NuxtLink
            class="text-muted-foreground block hover:text-primary transition-colors hover:underline"
            to="https://notion-blog-orpin-two.vercel.app"
            external
            target="_blank"
          >
            Blog
          </NuxtLink>
        </div>
        <div class="space-y-6">
          <div class="">Company</div>
          <p class="text-muted-foreground">Contact</p>
          <p
            class="text-muted-foreground"
            v-for="(address, index) in officeAdresses"
            :key="index"
          >
            {{ address.address }}
          </p>
        </div>
      </div>
      <NuxtImg src="/images/RedStone.png" class="w-full" />
    </div>
    <div
      class="px-6 py-4 flex justify-center items-center text-[#C1C9C8] border-t"
    >
      <div>{{ copyright }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RedStoneIcon from "@/assets/svgs/redstone.svg";

const { client } = usePrismic();
const { data } = await useAsyncData("footer", () => {
  return client.getSingle("footer");
});

const supportEmails = computed(() => {
  return data.value?.data?.support_emails ?? [];
});

const socialLinks = computed(() => {
  return data.value?.data?.social_links ?? [];
});

const officeAdresses = computed(() => {
  return data.value?.data?.office_addresses ?? [];
});

const copyright = computed(() => {
  const cms_copy_right = data.value?.data?.copyright ?? "";
  return cms_copy_right
    ? cms_copy_right.replace("{{year}}", `${new Date().getFullYear()}`)
    : "";
});
</script>
