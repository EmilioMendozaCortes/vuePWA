// import Vue from 'vue'
// import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import Vuetify from 'vuetify'
// import vuetify from './plugins/vuetify'

// import 'vuetify/dist/vuetify.min.css'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'

// Vue.config.productionTip = false
// Vue.use(vuetify)

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
