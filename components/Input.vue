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
      :oninput="handleInputChange"
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
      :oninput="handleInputChange"
      :onkeyup="handleInputKeyup"
      :rules="[
        () => !!prompt || 'This field is required',
        () =>
          (!!prompt && prompt.length <= 100) ||
          'Address must be less than 100 characters'
      ]"
    >
      <template v-slot:append-inner>
        <v-btn color="deep-purple-accent-2">生成二维码</v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from 'vue-clerk'
const { isLoaded, isSignedIn, userId } = useAuth()

const url = ref('')
const prompt = ref('')

const handleInputKeyup = (e: KeyboardEvent) => {
  if (e.code === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
}

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.value.length > 0 && isLoaded.value && !isSignedIn.value) {
    // TODO add toast and delay
    return navigateTo('/sign-in')
  }
}

const handleSubmit = () => {
  if (isLoaded.value && !isSignedIn.value) {
    // TODO add toast and delay
    return navigateTo('/sign-in')
  }
  if (url.value.length === 0) {
    // TODO add toast and delay
    return
  }
  if (prompt.value.length === 0) {
    // TODO add toast and delay
    return
  }
}
</script>

<style scoped></style>
