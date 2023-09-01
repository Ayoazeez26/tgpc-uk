<template>
  <div
    v-click-outside="clickedOutside"
    class="bg-white border border-grey-8 font-medium z-10 overflow-y-auto rounded-xl overflow-x-hidden"
    v-bind="$attrs"
  >
    <div
      class="flex flex-col h-[358px] justify-between items-start p-6 w-full lg:w-[304px] text-primary relative"
    >
      <div class="flex flex-col mb-5" @click="clickedOutside">
        <nuxt-link to="/jobCandidate" class="text-head font-semibold">
          Register as a Candidate<Icon
            name="mdi:arrow-right"
            size="20px"
            class="hovered ml-1"
          />
        </nuxt-link>
        <p class="text-sm leading-7 mt-1">
          Take the first step towards a rewarding career in healthcare.
        </p>
      </div>
      <div class="flex flex-col mb-5" @click="clickedOutside">
        <nuxt-link to="/jobClient" class="text-head font-semibold">
          Register as a Client<Icon
            name="mdi:arrow-right"
            size="20px"
            class="hovered ml-1"
          />
        </nuxt-link>
        <p class="text-sm leading-7 mt-1">
          We have a wide network of talented healthcare professionals.
        </p>
      </div>
      <div class="flex flex-col" @click="clickedOutside">
        <nuxt-link to="/applyNow" class="text-head font-semibold">
          Apply Now<Icon
            name="mdi:arrow-right"
            size="20px"
            class="hovered ml-1"
          />
        </nuxt-link>
        <p class="text-sm leading-7 mt-1">
          We give you the freedom to choose when and where you work.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();

const open = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
    open.value = false;
  }
};

const clickedOutside = () => {
  dataStore.job = false;
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: $blue-2;
}
.navbar {
  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type="button"]) {
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
      transition: transform 0.2s ease-out;
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
      background-color: $blue-2;
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
