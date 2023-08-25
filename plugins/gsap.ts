import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Scrollbar } from 'gsap/Scrollbar';

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(gsap)
  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('ScrollTrigger', ScrollTrigger)
})