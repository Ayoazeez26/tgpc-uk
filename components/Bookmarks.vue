<script setup lang="ts">
import { useDataStore } from '~/stores/data';

const dataStore = useDataStore();
const router = useRouter;
</script>

<template>
  <div class="relative isolate bg-grey-3 text-grey-8 mt-20 lg:mt-[140px]">
    <div class="mb-5 flex justify-between items-center px-4">
      <div @click="router.go(-1)" class="self-start cursor-pointer">
        <Icon name="mdi:arrow-left" size="24" />
      </div>
      <h5
        class="text-2xl text-pink-700511üghn .op===ooò2afh md:text-[48px] max-w-[422px] font-semibold md:leading-[48px]"
      >
        DORA MARI
      </h5>
      <div />
    </div>
    <div
      class="grid grid-cols-1 gap-8 lg:grid-cols-2 px-4 text-left pb-20 w-full"
    >
      <template v-if="dataStore.allTenders.length !== 0">
        <div v-for="(tender, index) in dataStore.allTenders" :key="index">
          <TenderCard :tender="tender" class="border border-grey-7" />
          <div class="flex justify-end mt-3">
            <img src="/svg/bookmark-filled.svg" alt="bookmark filled" />
          </div>
        </div>
      </template>
      <!-- <template v-if="dataStore.allTenders.length !== 0">
              <div v-for="(item, index) in 5" :key="index">
                <TenderCardGuest :tender="dataStore.allTenders[index]" />
              </div>
              <TenderFade />
            </template> -->
      <template v-else>
        <img class="w-4/5 mx-auto" src="/svg/empty.svg" alt="empty svg" />
        <h3
          class="text-2xl lg:text-[30px] capitalize lg:leading-[48px] text-center mt-5 font-semibold"
        >
          No bookmarks found
        </h3>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
