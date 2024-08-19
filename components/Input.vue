<template>
  <div class="relative max-w-2xl mx-auto mt-8 md:mt-16 px-4 md:px-8">
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
      class="mt-4"
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
        <v-btn color="primary">生成二维码</v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
const url = ref('')
const prompt = ref('')
</script>

<style scoped></style>
