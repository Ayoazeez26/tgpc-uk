<script setup lang="ts">
import _ from 'lodash';
import { useDataStore } from '~/stores/data';
import { useAuthStore } from '~/stores/auth';
const dataStore = useDataStore();
const auth = useAuthStore();
const router = useRouter();
const scrolled = ref(false);
const open = ref(false);
const showSearchBar = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
    open.value = false;
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

const logout = () => {
  auth.logout();
};

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll);
}
// const searchTerm = ref('');
const tenders = ref([]);
const closeModal = ref(false);

// watch(searchTerm, (value) => {
//   if (value === '') {
//     closeModal.value = true;
//     getTenders('The');
//   } else {
//     closeModal.value = false;
//     getTenders(value);
//   }
// });

const getTenders = async () => {
  const searchResults = await dataStore.searchTenders(
    `?searchTerm=${dataStore.searchTerm === '' ? 'the' : dataStore.searchTerm.toLowerCase()}&size=20&from=1`
  );
  tenders.value = searchResults.mappedResults;
};

</script>
<template>
  <div
    class="fixed right-0 left-0 border-b border-grey-4 font-medium bg-grey-3 backdrop-blur-[28px] z-10"
  >
    <div
      class="flex h-24 md:h-[110px] items-center justify-between px-4 px-md-0 w-full max-w-[1296px] mx-auto"
    >
      <nuxt-link to="/dashboard">
        <img class="w-[63px]" src="/svg/logo.svg" />
      </nuxt-link>
      <div class="flex items-center gap-4 lg:hidden" @click="open = !open">
        <Icon
          @click="showSearchBar = true"
          name="ic:baseline-search"
          size="24px"
          color="#0A0A0A"
          class="absolute top-4 left-6"
        />
        <!-- <div
          @click="logout"
          class="pro flex items-center text-grey-5 gap-2 h-[38px] px-4"
        >
          <div class="italic font-black uppercase">pro</div>
          <div class="flex gap-1 items-center">
            <img src="/svg/coins.svg" alt="coins" />
            <p class="text-sm font-bold">15</p>
          </div>
        </div> -->
        <button ref="hamburger" @click="open = !open">
          <Icon name="ic:round-menu" size="24px" color="#0A0A0A" />
        </button>
      </div>
      <div class="hidden lg:block relative max-w-full w-[686px]">
        <Icon
          name="ic:baseline-search"
          size="24px"
          color="#0A0A0A"
          class="absolute top-4 left-6"
        />
        <input
          type="text"
          name="search"
          v-model="dataStore.searchTerm"
          id="search"
          class="px-6 pl-14 pr-[145px] border focus:outline-none text-sm focus:ring-grey-2 focus:ring-1 border-grey-2 rounded py-5 w-full"
          placeholder="Search Tenders & Contracts"
        />
        <button
          @click="getTenders"
          class="bg-secondary border-2 leading-[30px] tracking-[0.028px] border-secondary absolute right-2 font-medium py-1.5 top-2 px-8 rounded text-white"
        >
          Search
        </button>
        <!-- <div
          v-if="tenders.length !== 0 && !closeModal"
          class="shadow absolute w-full bg-grey-3 z-10 h-auto max-h-40 overflow-y-auto top-16 p-2"
        >
          <template v-for="(tender, index) in tenders" :key="index">
            <button
              @click="goToTender(tender)"
              class="bg-white clamp text-left w-full overflow-hidden text-ellipsis font-semibold text-sm p-3 border border-grey-2 rounded-lg mb-2"
            >
              {{ tender.Title }}
            </button>
          </template>
        </div> -->
      </div>
      <button class="hidden lg:block" ref="hamburger" @click="open = !open">
        <Icon name="ic:round-menu" size="24px" color="#0A0A0A" />
      </button>
    </div>
  </div>
  <ul
    class="navbar-links flex items-start max-h-fit"
    :class="{ 'navbar-links--navopen overflow-y-auto pb-8': open }"
    v-click-outside="close"
  >
    <div class="flex w-full justify-end items-end">
      <button class="" @click="open = !open">
        <Icon name="ic:round-close" size="24px" color="#1B5588" />
      </button>
    </div>
    <ul
      class="flex flex-col lg:items-start w-full gap-4 mt-10 lg:mt-0 lg:gap-10"
    >
      <li
        class="cursor-pointer text-grey-6 font-light text-sm py-3"
        @click="open = !open"
      >
        <nuxt-link to="/">{{ dataStore.userEmail }}</nuxt-link>
      </li>
      <div class="flex flex-col w-full gap-3">
        <li
          class="cursor-pointer sora flex gap-x-2 text-neutral py-3"
          @click="open = !open"
        >
          <img src="/svg/billing.svg" alt="billing icon" /><nuxt-link
            to="/account"
            >Billing & Profile</nuxt-link
          >
        </li>
        <li
          class="cursor-pointer sora flex gap-x-2 text-neutral py-3"
          @click="open = !open"
        >
          <img src="/svg/bookmarks.svg" alt="bookmarks icon" /><nuxt-link
            to="/bookmarks"
            >Bookmarks</nuxt-link
          >
        </li>
        <div
          class="flex flex-col w-full lg:w-auto lg:flex-row lg:items-center gap-4"
        >
          <button
            @click="logout"
            class="text-center font-semibold rounded-lg text-grey-6"
          >
            Logout
          </button>
        </div>
      </div>
    </ul>
  </ul>
</template>

<style lang="scss" scoped>
.navbar {
  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type='button']) {
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

    // @media screen and (max-width: 1023px) {
    transform: translateX(500px);
    // pointer-events: none;
    position: fixed;
    transition: transform 0.2s ease-out;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 20px !important;
    padding-right: 20px;
    top: 20px;
    bottom: 0;
    right: 20px;
    width: 300px;
    max-width: 100vw;
    background-color: $grey;
    border: 1px solid $grey-2;
    border-radius: 12px;
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
      // }
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
.shadow {
  box-shadow: 0px 20px 24px 0px rgba(0, 0, 0, 0.04);
}
</style>
