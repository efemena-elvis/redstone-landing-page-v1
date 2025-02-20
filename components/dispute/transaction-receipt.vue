<template>
  <collapsible class="border p-4 rounded-lg">
    <template #trigger="{ opened }">
      <div class="flex justify-between items-center">
        <div class="text-[#171918] font-medium font-roobert-medium">
          Upload transaction receipt
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
        <label
          :class="[
            'relative border border-dashed transition-colors rounded-lg p-4 gap-2 grid place-items-center mt-4 cursor-pointer',
            uploadError
              ? 'border-red-400 hover:border-green-400'
              : 'hover:border-green-400',
          ]"
          for="upload-receipt"
        >
          <div
            class="absolute inset-0 border grid place-items-center bg-white gap-3"
            v-if="isUploading"
          >
            <Loader class="size-5 animate-spin" />
          </div>
          <input
            type="file"
            name="upload-receipt"
            id="upload-receipt"
            class="hidden"
            accept=".jpg, .jpeg, .png, .pdf"
            @change="processDocumentUpload"
          />

          <div class="size-6">
            <FileGreyIcon />
          </div>
          <div class="font-bold font-roobert-bold text-[#171918] text-lg">
            {{ uploaded ? "Uploaded" : "Click here to upload" }}
          </div>
          <div :class="[uploadError ? 'text-red-400' : 'text-[#696F6E]']">
            {{
              uploadError
                ? uploadError
                : uploaded
                  ? filename
                  : "You can upload a doc or a PDF file"
            }}
          </div>
        </label>
      </div>
    </template>
  </collapsible>
</template>

<script lang="ts" setup>
import collapsible from "../shared/collapsible.vue";
import CaretDownIcon from "@/assets/svgs/caret-down.svg";
import { Loader } from "lucide-vue-next";
import FileGreyIcon from "@/assets/svgs/file-grey.svg";

const isUploading = ref(false);
const uploadError = ref("");
const uploaded = ref(false);
const filename = ref("");

const emit = defineEmits<{ uploaded: [file: string] }>();

const processDocumentUpload = async ($event: Event) => {
  const inputElement = $event.target as HTMLInputElement;
  const uploadedFile = inputElement.files ? inputElement.files[0] : null;
  filename.value = uploadedFile?.name ?? "";
  if (!uploadedFile) return;
  if (uploadedFile.size > 50000) {
    uploadError.value = "Upload file less than 5mb";
    return;
  }
  uploadError.value = "";
  try {
    const payload = new FormData();
    payload.append("files", uploadedFile);
    isUploading.value = true;
    const res = await $fetch<{
      code: number;
      data: { file_url: string; original_name: string }[];
      message: string;
      status: string;
    }>("https://api.gateway.redstonepgs.com/v1/files", {
      method: "post",
      body: payload,
    });
    const fileUrl = res.status === "success" ? res.data?.[0].file_url : null;
    if (fileUrl) {
      emit("uploaded", fileUrl);
      uploaded.value = true;
    }

    isUploading.value = false;
  } catch (err) {
    uploaded.value = false;
    console.error("ERROR", err);
    isUploading.value = false;
    uploadError.value = "Failed to upload";
    filename.value = "";
  }
};
</script>
