// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    // ... your configuration
    components: {
      ...components
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
