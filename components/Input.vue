<template>
  <div
    class="tw-relative tw-max-w-2xl tw-mx-auto tw-mt-8 md:tw-mt-12 tw-px-4 md:tw-px-8"
  >
    <v-text-field
      clearable
      placeholder="https://example.com"
      variant="outlined"
      v-model="url"
      label="Url"
      :rules="[
        () => !!url || 'This field is required',
        () =>
          (!!url && url.length <= 100) ||
          'Address must be less than 100 characters'
      ]"
    ></v-text-field>
    <v-text-field
      class="tw-mt-2"
      clearable
      placeholder="please input prompt"
      variant="outlined"
      v-model="prompt"
      label="Prompt"
      :rules="[
        () => !!prompt || 'This field is required',
        () =>
          (!!prompt && prompt.length <= 100) ||
          'Address must be less than 100 characters'
      ]"
    >
      <template v-slot:append-inner>
        <v-btn color="deep-purple-accent-3">生成二维码</v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
const url = ref('')
const prompt = ref('')
</script>

<style scoped></style>
