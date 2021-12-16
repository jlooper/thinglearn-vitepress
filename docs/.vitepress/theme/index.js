// .vitepress/theme/index.js
import NotFound from './NotFound.vue'
import DefaultTheme from 'vitepress/theme'
import './index.css'

export default {
  ...DefaultTheme, 
  NotFound: NotFound,
}