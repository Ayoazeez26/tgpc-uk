<template>
  <div class="fixed bg-whiter right-0 left-0 font-medium text-black/70 ">
    <div class="flex h-24 md:h-[120px] items-center justify-between px-4 px-md-0 w-full max-w-[1240px] mx-auto">
      <img class="w-20 h-20" src="/img/logo.png" />
      <button class="lg:hidden" @click="open = !open">
        <Icon name="ic:round-menu" size="24px" color="#03989E" />
      </button>
      <ul class="navbar-links flex items-start" :class="{ 'navbar-links--navopen': open }" v-click-outside="close">
        <button class="lg:hidden absolute right-3" @click="open = !open">
          <Icon name="ic:round-close" size="24px" color="#03989E" />
        </button>
        <ul class="flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-10">
          <li><nuxt-link to="#">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About Us</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <div class="flex flex-col lg:flex-row lg:items-center gap-6">
            <button class="border-2 border-primary font-semibold px-10 py-3 rounded-lg text-primary">eBooks</button>
            <button class="bg-primary border-2 border-primary font-semibold px-10 py-3 rounded-lg text-white">Training</button>        
          </div>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
const close = () => {
  open.value = false;
};
</script>

<style lang="scss" scoped>
.navbar {

  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type=button]) {
        color: $primary;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
          color: $primary;
        }
        @media screen and (min-width: 768px) {
          padding-left: 15px;
          padding-right: 15px;
        }
        &.drop {
          color: $primary;
          padding: 0;
        }
      }

      // button:not([data-type=button]) {
      //   color: $black;
      //   font-weight: 700;
      //   border-radius: 8px;
      //   min-height: 50px;
      //   min-width: 170px;
      // }
    }

    &__city {
      width: 300px;
    }
    &__about {
      width: 260px;
    }

    @media screen and (max-width: 1023px) {
      transform: translateX(500px);
      // pointer-events: none;
      position: fixed;
      transition: transform .2s ease-out;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-left: 30px !important;
      padding-right: 30px;
      top: 0;
      bottom: 0;
      right: 0;
      width: 500px;
      max-width: 100vw;
      background-color: #FFF;
      z-index: 100;
      &__toggle {
        display: none;
      }
      &--navopen {
        transform: translateX(0);
        pointer-events: all;

        .navbar-links__toggle {
          display: block;
          position: fixed;
          top: 50px;
          right: 20px;
          background: none;
          border: none;
        }

        .navbar-links__item {
          text-align: left;
          margin: 20px 0;
          width: 100%;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }

  &__toggle {
    background: none;
    border: none;

    div {
      background-color: $black;
      height: 3px;
      border-radius: 2px;
      margin: 4px;
      &:nth-child(2) {
        width: 20px;
      }

      &:nth-child(3) {
        width: 15px;
      }

      &:last-child {
        width: 9px;
      }
    }
  }
  &-scroll {
    box-shadow: 1px 2px 18px rgba(255, 255, 255, 0.1);
    background-color: $grey-2 !important;
    // background-color: transparent !important;
  }
}
</style>