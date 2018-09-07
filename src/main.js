import Vue from 'vue'
import App from './App.vue'
//全局注册
import Annoucement from './Annoucement.vue'
import Article from './Article.vue'
//import Author from './Author.vue'

Vue.component("app-annoucement",Annoucement)
Vue.component("app-article",Article)
//Vue.component("app-author",Author)
new Vue({
  el: '#app',
  render: h => h(App)
})
